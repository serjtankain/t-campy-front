<<<<<<< Updated upstream
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = environment.baseUrl + 'jwt'

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
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = "http://localhost:8089/api/users";

  constructor(private http :HttpClient) { }
//   getAllUsers(){
//     return this.http.get<User[]>(this.baseUrl)
//   }
//   getUserByid (id:number) {
//     return this.http.get<User>(this.baseUrl +id);
// } 
// createUser(user :User) {
//   return this.http.post<User>(this.baseUrl,User);
// }
// updateUser(id:number,user:User){
//   return this.http.put<User>(this.baseUrl +user.id,user)
// }
// deleteUser(id:number) {
//   return this.http.delete(this.baseUrl+id);
  

// }
getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl);
}

getUserByid(id: number): Observable<User> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<User>(url);
}

createUser(user: User): Observable<User> {
  return this.http.post<User>(this.baseUrl, user);
}

deleteUser(id: number): Observable<void> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<void>(url);
}

updateUser(id: number, user: User): Observable<User> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.put<User>(url, user);
}
>>>>>>> Stashed changes
}
