import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { Offre } from 'src/app/models/offre';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { OffreService } from 'src/app/services/offre.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {

  listOffre:Offre[]= [];
  groupe!:Group
  private roles: string[] = [];
isLoggedIn = false;
showAdminBoard = false;
showModeratorBoard = false;
username?: string;
  constructor(private offreeService:OffreService,
    private router: Router,
    private groupService:GroupService,
    private storageService: StorageService,
     private authService: AuthService) { }

  ngOnInit(): void {
    this.getOffres();
    this.isLoggedIn = this.storageService.isLoggedIn();

      if (this.isLoggedIn) {
        const user = this.storageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
      }
  }
  getOffres(){
    return this.offreeService.getOffres().subscribe(offres => {this.listOffre=offres
      console.log(this.listOffre)})
  }
  deleteOffre(id: number) {
    this.offreeService.deleteOffre(id)
      .subscribe(
        data => {
          console.log(data);
          this.getOffres();
        },
        error => console.log(error));
  }

  offreDetails(id: number){
    this.router.navigate(['offreDetails', id]);
  }
  updateOffre(id: number){
    this.router.navigate(['updateOffre', id]);
  }

}
