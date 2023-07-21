import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatTabGroup} from "@angular/material/tabs";
import {TabService} from "../../services/tab.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }



  navigateToBookNow() {
    this.router.navigate(["login"]); // Switch to Booking tab
  }
}
