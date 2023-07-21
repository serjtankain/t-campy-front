import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PopComponent } from 'src/app/pop/pop.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUsers!:User[]
showPassword: { [userId: number]: boolean } = {}; // Track password visibility per user

  constructor(private userService:UserService, private router :Router,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent,{
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

  ngOnInit(): void {
    this.AfficheUser();
  }
  AfficheUser() {
    return this.userService.getAllUsers().subscribe(User => {this.listUsers=User
      console.log(this.listUsers)
    })

  }



  removeUsers(id: any) {

  
  

    this.userService.deleteUser(id).subscribe(
      (Response) => {
        console.log(Response);
      const dialogRef = this.dialog.open(PopComponent,{
        height: '200',
        width: '300',
        data: { type: "user" },
  
      });
    
      dialogRef.afterClosed().subscribe(() => {
        this.listUsers = this.listUsers.filter(
          (user) => user.id != id
        );
        this.listUsers = [...this.listUsers];  
      });
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
    );
  }
  updateUser(id:number){
    this.router.navigate(['/user',id]);
  }
  togglePasswordVisibility(userId:number) {
    this.showPassword[userId] = !this.showPassword[userId];
  }
  addoffre(){
    this.router.navigate(['/offers']);
  }
  
}

