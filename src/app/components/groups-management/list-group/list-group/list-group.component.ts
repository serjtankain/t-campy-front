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
  constructor(private groupeService:GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }
  getGroups(){
    return this.groupeService.getGroups().subscribe(groups => this.listGroup=groups)
  }

}
