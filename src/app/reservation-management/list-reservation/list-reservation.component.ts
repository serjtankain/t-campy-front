import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { AddReservationComponent } from '../add-reservation/add-reservation.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  listofRes!: Reservation[];
  localisations: any[] = [];
  groups: Group[] = [];
  id:number=1;
  constructor(
    private resService: ReservationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddReservationComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.AfficheRes();
    this.getLocations();
    this.loadGroups();
  }

  AfficheRes() {
    return this.resService.getAllReservation().subscribe(reservations => {
      this.listofRes = reservations;
      console.log(this.listofRes);
    });
  }

  getLocations() {
    this.resService.getCampingLocation().subscribe(
      (data: any) => {
        this.localisations = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadGroups() {
    this.resService.getGroups(this.id).subscribe(
      (data: Group[]) => {
        this.groups = data;
        console.log(data);
      },
      (error) => {
        console.error('Error retrieving groups:', error);
      }
    );
  }

  removeReservation(id: any) {
    console.log(id);

    this.resService.deleteReservation(id).subscribe(
      (Response) => {
        console.log(Response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateReservation(id: number) {
    this.router.navigate(['/Reservation', id]);
  }
}
