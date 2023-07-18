import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';
import { Observable } from 'rxjs';
import { localisation } from '../models/localisation';
import { CreateReservationDto } from '../models/dtos/createReservationDto';
import { UpdateReservationDto } from '../models/dtos/updateReservationDto';
import { DeleteReservationResponse } from '../models/dtos/deleteReservationResponse';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  baseUrl: string = 'http://localhost:8090/api/reservation';

  constructor(private http: HttpClient) {}
  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      this.baseUrl + '/retrieve-all-reservation'
    );
  }
  getReservationsByUserId(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(
      `${this.baseUrl}/user/${id}/reservations`
    );
  }
  createReservation(dto: CreateReservationDto): Observable<Reservation> {
    return this.http.post<Reservation>(this.baseUrl + '/addRes', dto);
  }
  updateReservation(dto: UpdateReservationDto): Observable<Reservation> {
    return this.http.put<Reservation>(this.baseUrl + '/updateRes', dto);
  }
  deleteReservation(id: number): Observable<DeleteReservationResponse> {
    const url = `${this.baseUrl}/deleteRes/${id}`;
    return this.http.delete<DeleteReservationResponse>(url);
  }

  getResByid(id: number): Observable<Reservation> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  getCampingLocation(): Observable<localisation> {
    const url = `${this.baseUrl}/locations`;
    return this.http.get<localisation>(url);
  }
}
