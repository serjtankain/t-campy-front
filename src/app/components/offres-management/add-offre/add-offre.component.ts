import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  offre:Offre = new Offre();
  constructor(private offreService:OffreService,
    private router :Router) { }

  ngOnInit(): void {
  }
  addOffre(){
    console.log(this.offre);

    this.offreService.addOffre(this.offre).subscribe(
      {
        next: () => this.router.navigate(['/offres']),
      }
    )

    }
}
