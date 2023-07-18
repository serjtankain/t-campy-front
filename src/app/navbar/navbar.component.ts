import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstname!:any;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

}
