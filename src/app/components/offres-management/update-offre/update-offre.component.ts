import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  id!: number;
  offre!:Offre

  constructor(private route: ActivatedRoute ,private router: Router,
    private offreService: OffreService) { }

    ngOnInit() {
      this.offre = new Offre();

      this.id = this.route.snapshot.params['id'];

      this.offreService.getOffreById(this.id)
        .subscribe(data => {
          console.log(data)
          this.offre = data;
        }, error => console.log(error));
    }

    updateOffre() {
      this.offreService.updateOffre(this.id, this.offre)
        .subscribe(data => {
          console.log(data);
          this.offre = new Offre();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updateOffre();
    }

    gotoList() {
      this.router.navigate(['/offres']);
    }
}
