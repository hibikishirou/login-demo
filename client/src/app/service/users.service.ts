import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LIST_USER } from 'src/app/api/api.url';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUser() {
    return this.http.get(LIST_USER);
  }
}
