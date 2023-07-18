import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = environment.baseUrl + 'jwt'
  baseUrl:string = "http://localhost:8090/api/users";


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
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

  public roleMatch(allowedRoles:any): any {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

}
