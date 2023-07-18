import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  userForm: FormGroup;
  user!:User
  constructor(private userservice:UserService,private router : Router,private route: ActivatedRoute, private formBuilder: FormBuilder ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.max(100)]]
   })}

  ngOnInit(): void {
    this.user = new User();

      this.id = this.route.snapshot.params['id'];

      this.userservice.getUserByid(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        },
         error => console.log(error));
    }

    updateUser() {
      this.userservice.updateUser(this.id,this.user)
        .subscribe(data => {
          console.log(data);
          this.user = new User();
          this.gotoList();
        }, 
        error => console.log(error));
    }
    gotoList() {
      this.router.navigate(['/Users']);
    }
}
