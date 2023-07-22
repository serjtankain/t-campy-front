import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group:Group = new Group();
  groupForm!: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private groupService:GroupService,
    private router :Router,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddGroupComponent>,
  private location: Location,
  private storageService: StorageService, private authService: AuthService) {

    }




    ngOnInit(): void {
      
    }
  addGroup(){

    console.log(this.group);
    if (!this.group.activities) {
      this.group.activities = [];
    }

    this.groupService.addGroup(this.group).subscribe(
      {
        next: () =>{ this.router.navigate(['groups'])
        this.dialogRef.close();
        window.location.reload();
      },
      }
    )

  }


  // addActivity() {

  //   const activityForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     description: ['', Validators.required],

  //   });

  //   this.activities.push(activityForm);
  // }
  addActivity() {
    if (!this.group.activities) {
      this.group.activities = [];
    }
    this.group.activities.push({ id:0,name: '', description: '' });
  }
  // deleteActivity(index: number) {
  //   this.activities.removeAt(index);
  // }
  deleteActivity(index: number) {
    this.group.activities.splice(index, 1);
  }

  get activities() {
    return this.groupForm.get('activities') as FormArray;
  }

}
