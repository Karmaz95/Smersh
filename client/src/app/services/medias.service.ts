import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/services/abstract';
import { HttpClient } from '@angular/common/http';
import { ClientSerializerApplication } from 'src/app/model/Client';
import { Observable } from 'rxjs';

@Injectable()
export class MediasService extends AbstractService {
  protected endpoint = 'media';
  public serializer = new ClientSerializerApplication();

  constructor(protected http: HttpClient) {
    super(http);
  }

  getPictureByName(name: string): Observable<any> {
    return this.http.get(`${this.getUrl()}/${name}`, this.getOptions());
  }
}
