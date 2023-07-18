import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { localisation } from 'src/app/models/localisation';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  id!: number;
  res!:Reservation;
  selectedLocation!: string;
  localisation!:string;
  localisations:localisation[]=[];
  groups: Group[] = [];
  selectedGroupId!: number; 


  constructor(private resService:ReservationService,private router : Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.res = new Reservation();

    this.id = this.route.snapshot.params['id'];

    this.resService.getResByid(this.id)
      .subscribe(data => {
        console.log(data)
        this.res = data;
      },
       error => console.log(error));
  }
  updateReservation() {
    this.resService.updateReservation(this.id,this.res)
      .subscribe(data => {
        console.log(data);
        this.res = new Reservation();
        this.gotoList();
      }, error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/Reservations']);
  }

}
