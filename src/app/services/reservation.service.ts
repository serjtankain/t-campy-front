import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { localisation } from '../models/localisation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl:string = "http://localhost:8089/api/reservation";

  constructor(private http :HttpClient) { }
  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl+ "/retrieve-all-reservation")
  }
  getReservationsByUserId (id:number): Observable<Reservation>  {
    return this.http.get<Reservation>(`${this.baseUrl}/user/${id}/reservations`);
} 
createReservation(res :Reservation): Observable<Reservation> {
  return this.http.post<Reservation>(this.baseUrl+"/addRes",res);
}
updateReservation(id:number,res:Reservation): Observable<Reservation>{
  const url = `${this.baseUrl}/updateRes/${id}`;

  return this.http.put<Reservation>(url,res)
}
deleteReservation(id:number) : Observable<void>{
  const url = `${this.baseUrl}/deleteRes/${id}`;

  return this.http.delete<void>(url);


}
// getGroupsForReservation(id: number): Observable<Group[]> {
//   // const url = `${this.baseUrl}/${id}/group`;
//   const url = `${this.baseUrl}/group/${id}/reservation`;

  // return this.http.get<Group[]>(url);
  getResByid(id: number): Observable<Reservation> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }
// getReservationsByGroupId(groupId: number): Observable<any> {
//   const url = `${this.baseUrl}/group/${groupId}`;
//   return this.http.get<any[]>(url);
// }
getCampingLocation(): Observable<localisation> {
  const url = `${this.baseUrl}/locations`;
  return this.http.get<localisation>(url);
}
getGroups(id:number): Observable<Group[]> {
   
  return this.http.get<Group[]>(`${this.baseUrl}/${id}/groups`);
}


}

