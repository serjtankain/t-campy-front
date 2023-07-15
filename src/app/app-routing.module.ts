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
<<<<<<< Updated upstream
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
=======
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { ListUserComponent } from './user-managment/list-user/list-user.component';
import { AddReservationComponent } from './reservation-management/add-reservation/add-reservation.component';
import { ListReservationComponent } from './reservation-management/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './reservation-management/update-reservation/update-reservation.component';
import { PopComponent } from './pop/pop.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path: '', redirectTo:'groups',pathMatch:'full'},
  {path: 'groups', component:ListGroupComponent},
  {path: 'addGroup', component:AddGroupComponent},
  { path: 'update/:id', component: UpdateGroupComponent },
  { path: 'details/:id', component: DetailsGroupComponent },
  {path: 'offers', component:ListOffreComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent},
  { path: 'groups/:groupId/offre', component: AddOffreComponent },
  { path: 'updateOffre/:id', component: UpdateOffreComponent },
  {path: 'Users', component:ListUserComponent},                 
  { path: 'AddUser', component: AddUserComponent },
  { path: 'user/:id', component: UpdateUserComponent },
  {path: 'Reservations', component:ListReservationComponent},
  { path: 'AddReservation', component: AddReservationComponent },
  { path: 'Reservation/:id', component: UpdateReservationComponent },
  { path: 'offreDetails/:id', component: DetailsOffreComponent },
  {path:"pop",component:PopComponent}
  // {path: '**',component:ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
