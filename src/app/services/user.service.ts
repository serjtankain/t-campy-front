import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = environment.baseUrl + 'jwt'
  baseUrl:string = "http://localhost:8089/api/users";


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
  ) {}

  public login(loginData:any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }
  getAllUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.baseUrl);
  }

  getUserByid(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpclient.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    return this.httpclient.post<User>(this.baseUrl, user);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpclient.delete<void>(url);
  }

  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpclient.put<User>(url, user);
  }

  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  // public roleMatch(allowedRoles:any): any {
  //   let isMatch = false;
  //   const userRoles: any = this.userAuthService.getRoles();

  //   if (userRoles != null && userRoles) {
  //     for (let i = 0; i < userRoles.length; i++) {
  //       for (let j = 0; j < allowedRoles.length; j++) {
  //         if (userRoles[i].roleName === allowedRoles[j]) {
  //           isMatch = true;
  //           return isMatch;
  //         } else {
  //           return isMatch;
  //         }
  //       }
  //     }
  //   }
  // }
  getPublicContent(): Observable<any> {
    return this.httpclient.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.httpclient.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.httpclient.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.httpclient.get(API_URL + 'admin', { responseType: 'text' });
  }

}
