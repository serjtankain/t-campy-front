// camping-card.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampingCardService {
  private apiUrl = 'http://localhost:3000/campingCards';

  constructor(private http: HttpClient) {}

  getCampingCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCampingCard(card: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, card);
  }
}
