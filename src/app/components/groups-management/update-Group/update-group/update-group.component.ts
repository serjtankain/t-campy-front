import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {
  id!: number;
  group!:Group

  constructor(private route: ActivatedRoute ,private router: Router,
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

    updateGroup() {
      this.groupService.updateGroup(this.id, this.group)
        .subscribe(data => {
          console.log(data);
          this.group = new Group();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updateGroup();
    }

    gotoList() {
      this.router.navigate(['/groups']);
    }
  

}
