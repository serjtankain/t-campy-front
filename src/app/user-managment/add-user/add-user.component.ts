import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],

})
export class AddUserComponent implements OnInit {
  user:User=new User();
  userForm: FormGroup;
  position = 'bottom-right';
  users!:User[];

  constructor(private userservice:UserService,
   private router : Router,
   private dialogRef: MatDialogRef<AddUserComponent>,
   private formBuilder: FormBuilder ) { 
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.max(100)]]
    });
   }

  ngOnInit(): void {
    
  }
  addUser() {
    console.log(this.user);
  
    this.userservice.createUser(this.user).subscribe(
      () => {
        // Update the user list after successful user creation
        this.userservice.getAllUsers().subscribe(
          (user) => {
            // Assuming you have a users array in your component to store the user list
            this.users = user;
          }
        );
        
        this.router.navigate(['/Users']);
      },
      (error) => {
        // Handle error if user creation fails
        console.error('Error creating user:', error);
      }
    );
    this.dialogRef.close();

  }

}



