import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable()
export class MissionsService {
  private options;

  constructor(private http: HttpClient) {
    this.options = {};
    this.options.headers = new HttpHeaders();
    this.options.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.options.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }


  getData(): Observable<any> {
    return this.http.get(`${environment.API}/missions`,  {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }

  getDataById(id: string): Observable<any>  {
    return this.http.get(`${environment.API}/missions/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }

  insert(data :any) : Observable<any> {
    return this.http.post(`${environment.API}/missions`, data,  {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

  }
  delete(id : string) : Observable<any> {
    return this.http.delete(`${environment.API}/missions/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }

  update(id:string, data:any) : Observable<any>{
    return this.http.put(`${environment.API}/missions/${id}`, data, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }
}
