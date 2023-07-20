import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {
  id!: number;
  groups!: Group[];
  selectedGroupId!: number;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    // this.getGroupsForReservation();

  }
  // getGroupsForReservation(): void {
  //   this.reservationService.getGroupsForReservation(this.id)
  //     .subscribe(groups => {
  //       this.groups = groups;
  //     });
  // }
  
  // onGroupSelectionChange(): void {
  //   console.log('Selected Group ID:', this.selectedGroupId);
  // }
}
