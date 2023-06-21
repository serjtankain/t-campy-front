import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
listGroup:Group[]= [];
  constructor(private groupeService:GroupService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGroups();
  }
  getGroups(){
    return this.groupeService.getGroups().subscribe(groups => {this.listGroup=groups
      console.log(this.listGroup)})
  }
  deleteGroup(id: number) {

    this.groupeService.deleteGroup(id)
      .subscribe(
        data => {
          console.log(data);
          this.getGroups();
        },
        error => console.log(error));
  }

  groupDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateGroup(id: number){
    this.router.navigate(['details', id]);
  }

}
