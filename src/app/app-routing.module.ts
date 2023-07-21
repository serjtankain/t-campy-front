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

import {ProfileComponent} from "./components/profile/profile.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {ListUserComponent} from "./user-managment/list-user/list-user.component";
import {AddUserComponent} from "./user-managment/add-user/add-user.component";
import {UpdateUserComponent} from "./user-managment/update-user/update-user.component";
import {ListReservationComponent} from "./reservation-management/list-reservation/list-reservation.component";
import {AddReservationComponent} from "./reservation-management/add-reservation/add-reservation.component";
import {ProductComponent} from "./components/shop/product/product.component";
import {ShopyComponent} from "./components/shop/shopy/shopy.component";
import {PopComponent} from "./pop/pop.component";
import {AddProductComponent} from "./components/shop/add-product/add-product.component";
import {ForumComponent} from "./Views/forum/forum.component";
import {TopicComponent} from "./Views/topic/topic.component";
import {ComplaintComponent} from "./Views/complaint/complaint.component";
import {ErrorComponent} from "./Views/error/error.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'groups', component:ListGroupComponent},
  {path: 'home', component:HomeComponent},
  {path: 'addGroup', component:AddGroupComponent},
  { path: 'update/:id', component: UpdateGroupComponent },
  { path: 'details/:id', component: DetailsGroupComponent },
  {path: 'offers', component:ListOffreComponent},
  {path: 'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'groups/:groupId/offre', component: AddOffreComponent },
  { path: 'updateOffre/:id', component: UpdateOffreComponent },
  {path: 'Users', component:ListUserComponent},
  { path: 'AddUser', component: AddUserComponent },
  { path: 'user/:id', component: UpdateUserComponent },
  {path: 'Reservations', component:ListReservationComponent},
  { path: 'AddReservation', component: AddReservationComponent },
  { path: 'offreDetails/:id', component: DetailsOffreComponent },
  {path: 'Produit',component:ProductComponent},
  {path:'Shop',component:ShopyComponent},
  {path:"pop",component:PopComponent},
  {path:'add-produit',component:AddProductComponent},
  { path: 'forums', component: ForumComponent },
  { path: 'forums/:id', component: TopicComponent },
  { path: 'complaint/:id', component: ComplaintComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: ErrorComponent },

  //{path: '**',component:ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
