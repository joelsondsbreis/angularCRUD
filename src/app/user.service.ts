import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  post(data) {
    return this.http.post(this.baseUrl + '/api/saveUser', data);
  }
}
