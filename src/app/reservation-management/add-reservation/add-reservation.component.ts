import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Group } from 'src/app/models/group';
import { localisation } from 'src/app/models/localisation';
import { CreateReservationDto } from 'src/app/models/dtos/createReservationDto';
import { UpdateReservationDto } from 'src/app/models/dtos/updateReservationDto';
import { GroupService } from 'src/app/services/group.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css'],
})
export class AddReservationComponent implements OnInit {
  reservations!: Reservation[];
  createReservationDto : CreateReservationDto = {};
  updateReservationDto : UpdateReservationDto = {};
  groups: Group[] = [];
  localisations: localisation[] = [];
  form!: FormGroup;
  selectedLocation!: string;

  constructor(
    private groupService: GroupService,
    private reservationService: ReservationService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialogRef<AddReservationComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { type: number; reservationToUpdate?: Reservation }
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateReservation: ['', Validators.required],
      departureDate: ['', Validators.required],
      group: ['', Validators.required],
      localisation: ['', Validators.required],
    });
    this.loadGroups();
    this.getLocations();
    this.reservationService
      .getAllReservation()
      .subscribe((reservations) => (this.reservations = reservations));

    if (this.data.type == 1 && this.data.reservationToUpdate) {
      this.form.patchValue({
        dateReservation: this.data.reservationToUpdate.dateReservation,
        departureDate: this.data.reservationToUpdate.departureDate,
        group: this.data.reservationToUpdate.group.id,
        localisation: this.data.reservationToUpdate.localisation.id,
      });
    }
  }

  getLocations() {
    this.reservationService.getCampingLocation().subscribe(
      (data: any) => {
        this.localisations = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadGroups() {
    this.groupService.getGroups().subscribe(
      (data: Group[]) => {
        this.groups = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving groups:', error);
      }
    );
  }
   submit() {
    if (this.data.type == 0 ) {
      this.createReservationDto.dateReservation = this.form.value['dateReservation'];
      this.createReservationDto.departureDate = this.form.value['departureDate'];
      this.createReservationDto.group = this.form.value['group'];
      this.createReservationDto.localisation = this.form.value['localisation'];

      this.reservationService.createReservation(this.createReservationDto).subscribe(
        (response: Reservation) => {
          this.dialog.close(response);
        },
        (error) => {
          console.error('Error creating Reservation:', error);
        }
      );
    }
    else if (this.data.type == 1 && this.data.reservationToUpdate) {  
      this.updateReservationDto.id = this.data.reservationToUpdate.id;
      this.updateReservationDto.dateReservation = this.form.value['dateReservation'];
      this.updateReservationDto.departureDate = this.form.value['departureDate'];
      this.updateReservationDto.group = this.form.value['group'];
      this.updateReservationDto.localisation = this.form.value['localisation'];  

      this.reservationService.updateReservation(this.updateReservationDto).subscribe(
        (response: Reservation) => {
          this.dialog.close(response);
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating Reservation:', error);
        }
      );
    }
  }
}
