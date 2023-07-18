import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { AddReservationComponent } from '../add-reservation/add-reservation.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/models/group';
import { DeleteReservationResponse } from 'src/app/models/dtos/deleteReservationResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { PopComponent } from 'src/app/pop/pop.component';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css'],
})
export class ListReservationComponent implements OnInit {
  listofRes: Reservation[] = [];
  localisations: Location[] = [];
  groups: Group[] = [];
  constructor(
    private resService: ReservationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  createReservation(type: number) {
    const dialogRef = this.dialog.open(AddReservationComponent, {
      height: '400px',
      width: '600px',
      data: { type: type },
    });

    dialogRef.afterClosed().subscribe((result: Reservation) => {
      if (result != undefined) this.listofRes.push(result);
    });
  }

  ngOnInit(): void {
    this.AfficheRes();
  }

  AfficheRes() {
    return this.resService.getAllReservation().subscribe((reservations) => {
      this.listofRes = reservations;
    });
  }

  removeReservation(id: any) {
    this.resService.deleteReservation(id).subscribe(
      (response: DeleteReservationResponse) => {
        const dialogRef = this.dialog.open(PopComponent, {
          height: '200px',
          width: '300px',
          data: { type: "reservation" },
        });

        dialogRef.afterClosed().subscribe(() => {
          this.listofRes = this.listofRes.filter(
            (reservation) => reservation.id != id
          );
          this.listofRes = [...this.listofRes];  
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  updateReservation(type: number, reservation: Reservation) {
    const dialogRef = this.dialog.open(AddReservationComponent, {
      height: '400px',
      width: '600px',
      data: { type: type, reservationToUpdate: reservation },
    });

    dialogRef.afterClosed().subscribe((result: Reservation) => {
      if (result != undefined) {
        for (let i = 0; i < this.listofRes.length; i++) {
          if (this.listofRes[i].id == result.id) this.listofRes[i] = result;
        }
        this.listofRes = [...this.listofRes];
      }
    });
  }
}
