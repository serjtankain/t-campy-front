import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Forum } from 'src/app/models/forum/forum.model';
import { AuthService } from 'src/app/services/auth.service';
import { ForumService } from 'src/app/services/forum.service';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public category: string = 'All';
  constructor(
    private authService: AuthService,
    private router: Router,
    private forumService: ForumService,
    private storageService:StorageService
  ) {}

  ngOnInit() {
    this.forumService.getForums();
    this.forumService.getTags();
  }

  public isAdmin(): boolean {
    if (this.storageService.getUser().admin==true){
      return true;
    }
    else {
      return false;
    }
  }

  public getCategories(): string[] {
    return this.forumService.getCategories();
  }

  public selectCategory(category: HTMLSelectElement) {
    this.category = category.value;
  }

  public filterForumsByCategory(forums: Forum[]) {
    if (this.category !== 'All') {
      forums.filter((forum) => forum.getCategory() === this.category);
    }
  }

  public getTags(): string[] {
    return this.forumService.getTags();
  }
}
