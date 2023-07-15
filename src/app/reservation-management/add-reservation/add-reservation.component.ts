import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { PopComponent } from 'src/app/pop/pop.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Group } from 'src/app/models/group';
import { localisation } from 'src/app/models/localisation';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgForOf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
  
})
export class AddReservationComponent implements OnInit {

ress!:Reservation[];
res:Reservation=new Reservation()
groupId!: number;
groups: Group[] = [];
localisations:localisation[]=[];
localisation!:string;
selectedGroupId!: number; 
  resForm!: FormGroup;
  selectedLocation!: string;
  // reservations:Reservation[]=[];
  id:number=1;
  constructor(private resservice:ReservationService,
    private router : Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog ) { }
    
 ngOnInit(): void {
  this.resForm = this.formBuilder.group({
    name: ['', Validators.required],
    activities: this.formBuilder.array([])
  });
  this.loadGroups();
  this.getLocations();
  this.resservice.getAllReservation()
  .subscribe(reservations => this.ress = reservations);
 }
 
//  openDialog(): void {
//   const dialogRef = this.dialog.open(UpdateUserComponent, {
//     data: {name: this.name, animal: this.animal},
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
// }
 

// getReservationsByGroupId(groupId: number) {
//   this.resservice.getReservationsByGroupId(groupId)
//     .subscribe(reservations => {
//       this.ress = reservations;
//       // Perform any additional processing or binding here
//     });
// }
getLocations() {
  this.resservice.getCampingLocation().subscribe(
    (data:any) => {
      this.localisations = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}


loadGroups() {
  this.resservice.getGroups(this.id).subscribe(
    (data: Group[]) => {
      this.groups = data;
      console.log(data);
    },
    (error) => {
      console.error('Error retrieving groups:', error);
    }
  );
}
  AddReservation() {
      // console.log(this.res);
      this.resservice.createReservation(this.res).subscribe(
        () => {
        console.log(this.res)
          
          this.router.navigate(['/Reservations']);
        },
        (error) => {
          // Handle error if user creation fails
          console.error('Error creating Reservation:', error);
        }
      );
      }
    }
