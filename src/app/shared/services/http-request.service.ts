

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(
    private http: HttpClient) { }

  getRequest(url, params?: any) {
    return this.http.get(`${environment.apiEndPoint}${url}`, { params, observe: 'response' })
      .pipe(map((res) => res.body));
  }

  postRequest(url, data) {
    return this.http.post(`${environment.apiEndPoint}${url}`, data, { observe: 'response' })
      .pipe(map((res) => res.body));
  }

  deleteRequest() {
  }
}
