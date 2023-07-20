import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbarshop',
  templateUrl: './navbarshop.component.html',
  styleUrls: ['./navbarshop.component.css']
})
export class NavbarshopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

orders(){
  this.router.navigate(['Orders'])
}
}
