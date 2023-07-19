import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AddReservationComponent } from '../reservation-management/add-reservation/add-reservation.component';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css'],
})
export class PopComponent implements OnInit {
  message: string = "";
  constructor(
    public dialog: MatDialogRef<PopComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { type: string }
  ) {}

  ngOnInit(): void 
  {
    if(this.data.type == "reservation")
      this.message = "Reservation deleted successfully";
    else
      this.message = "User deleted successfully.";
  }

  close(): void {
     this.dialog.close();
  }
}
