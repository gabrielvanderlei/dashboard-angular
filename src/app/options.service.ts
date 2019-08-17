import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OptionsService {

  constructor(private _http: HttpClient) { }

  getOptions() {
    return this._http.get("/assets/mock/general.json")
      .map(result => result);
  }

}