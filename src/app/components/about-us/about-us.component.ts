// about-us.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AboutUsComponent implements OnInit {
  showAboutUs: boolean = true;
  showAdventureTrips: boolean = false;
  showContact: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.showAboutUs = false;
      this.showAdventureTrips = true;
    }, 3000); // Display "Adventure Trips" section after 3 seconds

    setTimeout(() => {
      this.showAdventureTrips = false;
      this.showContact = true;
    }, 6000); // Display "Contact" section after 6 seconds
  }
}
