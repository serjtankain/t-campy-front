import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/models/Complaint/complaint';
import { Forum } from 'src/app/models/forum/forum.model';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ForumService } from 'src/app/services/forum.service';
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  forum!: Forum;
  @Input() complaint!: Complaint;
  forums!: Forum[];

  title!: string;
  description!: string;
  category!: string;
  complaintReply!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private forumService: ForumService,
    private complaintService: ComplaintService,
    private snackBar: MatSnackBar,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.forumService
      .fetchForumsFromServer()
      .then((forums) => (this.forums = forums ? forums : []));
  }

  public addForumToServer(): void {
    if (!this.title || !this.description || !this.category) {
      this.snackBar.open('Please fill all the fields', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
      return;
    }

  const maxID = Math.max(...this.forums.map(item => item.id));


    this.forum = new Forum(
      (maxID + 1),
      this.title,
      this.description,
      new Date(),
      this.storageService.getUser().username,
      'No tags yet',
      0,
      0,
      'Open',
      this.category,
      [],
      []
    );

    try {
      this.forumService.addForumToServer(this.forum); // add Forum to server
      this.snackBar.open('Forum added', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      this.snackBar.open('Error while adding Forum', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
    this.title = '';
    this.description = '';
    this.router.navigate(['/forums']).then(() => {
      window.location.reload();
    });
  }

  public addComplaint(): void {
    if (!this.title || !this.description) {
      this.snackBar.open('Please fill all the fields', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
      return;
    }
    const maxIDcomplaint = Math.max(...this.forums.map(item => item.id));
    this.complaint = new Complaint(
      maxIDcomplaint+ 1,
      this.title,
      this.description,
      new Date(),
      new Date(),
      '',
      Number(this.storageService.getUser().id),
      1
    );
    try {
      this.complaintService.addComplaintToServer(this.complaint); // add complaint to server
      // this.complaintService.addComplaint(this.complaint); // add complaint not to server
      this.snackBar.open('Complaint added', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      this.snackBar.open('Error while adding complaint', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
    this.title = '';
    this.description = '';
  }

  public getCategories(): string[] {
    return this.forumService.getCategories();
  }

  public selectCategory(category: HTMLSelectElement) {
    this.category = category.value;
    console.log('selected', this.category);
  }
  public isAdmin(): boolean {
    if (this.storageService.getUser().admin==true){
      return true;
    }
    else {
      return false;
    }
  }

}
