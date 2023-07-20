import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AddReservationComponent } from '../reservation-management/add-reservation/add-reservation.component';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
