import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupUrl = environment.baseUrl + 'group'
  constructor(private http:HttpClient) { }
  getGroups():Observable<any>{
    return this.http.get(this.groupUrl +'/retrieve-all-Groups');
  }
  addGroup(group:Group):Observable<any>{
    return this.http.post<Group>(this.groupUrl +'/addGroup',group)
  }
  deleteGroup (group: Group | number):Observable<Group> {
    const id = typeof group === 'number' ? group : group.id; const url=this.groupUrl+'/deleteGroup'+id;
    return this.http.delete<Group>(url);
  }
  updateGroup (id: number, group: Group): Observable<Group> {
    return this.http.put<Group>(this.groupUrl+'/updateGroup'+ id, group);
  }
}
