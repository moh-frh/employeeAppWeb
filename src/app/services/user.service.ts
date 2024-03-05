import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user: any) {
    return this.http.post(`${baseURL}/register`, user);
  }

  public login(user: any) {
    return this.http.post(`${baseURL}/login`, user);
  }
}
