import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-details-group',
  templateUrl: './details-group.component.html',
  styleUrls: ['./details-group.component.css']
})
export class DetailsGroupComponent implements OnInit {
  id!: number;
  group!: Group;

  constructor(private route: ActivatedRoute,private router: Router,
    private groupService: GroupService) { }

  ngOnInit() {
    this.group = new Group();

    this.id = this.route.snapshot.params['id'];

    this.groupService.getGroupById(this.id)
      .subscribe(data => {
        console.log(data)
        this.group = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['groups']);
  }


}
