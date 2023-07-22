import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

import { ComplaintService } from 'src/app/services/complaint.service';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {Complaint} from "../../models/Complaint/complaint";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  currentUser = this.storageService.getUser();
  user!: User;
  route: string = this.router.url;
  view: string = 'dashboard';
  complaints!: Complaint[];
  public complaint!: Complaint;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private complaintService: ComplaintService,
    private storageService:StorageService
  ) {
    if (this.storageService.getUser().admin==true) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/']);
    }
    this.complaint = this.complaintService.complaint;
  }

  ngOnInit() {
    this.user = this.storageService.getUser();
    console.log(this.user.username);
    console.log('route', this.route);
    this.complaintService.fetchComplaintsFromServer().then((complaints) => {
      this.complaints = complaints;
      console.log('complaints', this.complaints);
    });
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public switchViewTo(view: string): void {
    if (view === 'complaints') {
      this.view = 'complaints';
      this.complaintService.fetchComplaintsFromServer().then((complaints) => {
        this.complaints = complaints;
      });
    } else {
      this.view = 'dashboard';
    }
  }

  public deleteComplaint(complaintId: number): void {
    this.complaintService.deleteComplaintFromServer(complaintId);
    this.complaintService.fetchComplaintsFromServer().then((complaints) => {
      this.complaints = complaints;
      console.log('complaints', this.complaints);
    });

    this.router.navigate(['/admin']).then(() => {
      window.location.reload();
    });
  }

  public async fetchComplaintFromServer(complaintId: number) {
    await this.complaintService
      .fetchComplaintFromServer(complaintId)
      .then((complaint) => {
        this.complaint = complaint;
        console.log('complaint', this.complaint);
      });
    this.complaintService.complaint = await this.complaint;
  }
}
