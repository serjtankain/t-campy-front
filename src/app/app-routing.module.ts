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
import { ProductComponent } from './components/shop/product/product.component';
import { ShopyComponent } from './components/shop/shopy/shopy.component';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { ListUserComponent } from './user-managment/list-user/list-user.component';
import { AddReservationComponent } from './reservation-management/add-reservation/add-reservation.component';
import { ListReservationComponent } from './reservation-management/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './reservation-management/update-reservation/update-reservation.component';
import { PopComponent } from './pop/pop.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import {COOKINGMATERIALSComponent} from "./components/shop/cookingmaterials/cookingmaterials.component";
import {SPORTMATERIALSComponent} from "./components/shop/sportmaterials/sportmaterials.component";
import {CLOTHESComponent} from "./components/shop/clothes/clothes.component";
import {LIGHTNINGComponent} from "./components/shop/lightning/lightning.component";
import {OTHERSComponent} from "./components/shop/others/others.component";
import {OrderComponent} from "./components/shop/order/order.component";
import {DetailProductComponent} from "./components/shop/detail-product/detail-product.component";
import {AboutComponent} from "./components/shop/about/about.component";
const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'groups', component:ListGroupComponent},
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
  { path: 'Reservation/:id', component: UpdateReservationComponent },
  { path: 'offreDetails/:id', component: DetailsOffreComponent },
  {path: 'Produit',component:ProductComponent},
  {path:'shops',component:ShopyComponent},
  {path:'COOKINGMATERIALS',component:COOKINGMATERIALSComponent},
  {path:'SPORTMATERIALS',component:SPORTMATERIALSComponent},
  {path:'CLOTHES',component:CLOTHESComponent},
  {path:'LIGHTNING',component:LIGHTNINGComponent},
  {path:'OTHERS',component:OTHERSComponent},
  {path:'Orders',component:OrderComponent},
  {path:'Details/:id',component:DetailProductComponent},
  {path:'About',component:AboutComponent},
  {path:"pop",component:PopComponent}
  // {path: '**',component:ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
