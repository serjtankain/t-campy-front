import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group:Group = new Group();
  groupForm!: FormGroup;
  constructor(private groupService:GroupService,
    private router :Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      name: ['', Validators.required],
      activities: this.formBuilder.array([])
    });
  }
  addGroup(){
    console.log(this.group);

    this.groupService.addGroup(this.group).subscribe(
      {
        next: () => this.router.navigate(['/groups']),
      }
    )

  }
  addActivity() {

    const activityForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],

    });

    this.activities.push(activityForm);
  }


  get activities() {
    return this.groupForm.get('activities') as FormArray;
  }
}
