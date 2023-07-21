import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';
import { AddGroupComponent } from './components/groups-management/add-Group/add-group/add-group.component';
import { UpdateGroupComponent } from './components/groups-management/update-Group/update-group/update-group.component';
import { DetailsGroupComponent } from './components/groups-management/details-group/details-group/details-group.component';
import { ListOffreComponent } from './components/offres-management/list-offre/list-offre.component';
import { AddOffreComponent } from './components/offres-management/add-offre/add-offre.component';
import { UpdateOffreComponent } from './components/offres-management/update-offre/update-offre.component';
import { DetailsOffreComponent } from './components/offres-management/details-offre/details-offre.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'forums', component: ForumComponent },
  { path: 'forums/:id', component: TopicComponent },
  { path: 'complaint/:id', component: ComplaintComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
