import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getData(endpoint) {
    return this._http.get(endpoint)
      .map(result => result);
  }

}