import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOGIN } from 'src/app/api/api.url';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(LOGIN, user);
  }
}
