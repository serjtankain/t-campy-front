import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddOffreComponent} from "../../offres-management/add-offre/add-offre.component";
import {CampService} from "../../../services/camp.service";
import {Camping} from "../../../models/camping";
import {AddCampComponent} from "../add-camp/add-camp.component";

@Component({
  selector: 'app-list-camp',
  templateUrl: './list-camp.component.html',
  styleUrls: ['./list-camp.component.css']
})
export class ListCampComponent implements OnInit {

  // listCamp:Camping[]= [];
  // campId!:number
   constructor(private campService:CampService,
               private router: Router,
               private route: ActivatedRoute,
               private dialog: MatDialog,
   ) { }

  ngOnInit(): void {
  }
  //
  // ngOnInit(): void {
  //   this.campId=this.route.snapshot.params['campId'];
  //   this.getCamps();
  // }
  // openAddCampDialog(): void {
  //   const dialogRef = this.dialog.open(AddCampComponent, {
  //     width: '400px', // adjust the width and other options as needed
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     // Handle the dialog close event if needed
  //
  //   });
  // }
  // openAddOffreDialog(id:number): void {
  //   const dialogRef = this.dialog.open(AddOffreComponent, {
  //     width: '400px',
  //     data: { id: id } // adjust the width and other options as needed
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     // Handle the dialog close event if needed
  //   });
  // }
  // getCamps(){
  //   return this.campService.getCamps().subscribe(camps => {this.listCamp=camps
  //     console.log(this.listCamp)})
  // }
  // deleteCamp(id: number) {
  //
  //   this.campService.deleteCamp(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.getCamps();
  //       },
  //       error => console.log(error));
  // }
  //
  // campDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }
  // updateCamp(id: number){
  //   this.router.navigate(['update', id]);
  // }
  // // openAddOffre() {
  // //   this.router.navigate(['groups', this.groupId, 'offres', 'add']);
  // // }
  // addOffreToGroup(groupId: number): void {
  //   this.router.navigate(['groups', groupId,'offre']);
  // }
  // goTo(){
  //   this.router.navigate(['addGroup' ]);
  // }

}
