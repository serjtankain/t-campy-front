import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './components/groups-management/groups-management.component';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';
import { AddGroupComponent } from './components/groups-management/add-Group/add-group/add-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsGroupComponent } from './components/groups-management/details-group/details-group/details-group.component';
import { UpdateGroupComponent } from './components/groups-management/update-Group/update-group/update-group.component';
import { DetailsOffreComponent } from './components/offres-management/details-offre/details-offre.component';
import { AddOffreComponent } from './components/offres-management/add-offre/add-offre.component';
import { ListOffreComponent } from './components/offres-management/list-offre/list-offre.component';
import { UpdateOffreComponent } from './components/offres-management/update-offre/update-offre.component';

import { ProductComponent } from './components/shop/product/product.component';
import { ShopyComponent } from './components/shop/shopy/shopy.component';
import { OrderComponent } from './components/shop/order/order.component';
import { DetailOrderComponent } from './components/shop/detail-order/detail-order.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { ListUserComponent } from './user-managment/list-user/list-user.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { AddReservationComponent } from './reservation-management/add-reservation/add-reservation.component';
import { ListReservationComponent } from './reservation-management/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './reservation-management/update-reservation/update-reservation.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopComponent } from './pop/pop.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

import { SidebarshopComponent } from './components/shop/sidebarshop/sidebarshop.component';
import { HomeshopComponent } from './components/shop/homeshop/homeshop.component';
import {NavbarshopComponent} from "./components/shop/navbarshop/navbarshop.component";
import { SPORTMATERIALSComponent } from './components/shop/sportmaterials/sportmaterials.component';
import { COOKINGMATERIALSComponent } from './components/shop/cookingmaterials/cookingmaterials.component';
import { CLOTHESComponent } from './components/shop/clothes/clothes.component';
import { LIGHTNINGComponent } from './components/shop/lightning/lightning.component';
import { OTHERSComponent } from './components/shop/others/others.component';
import { DetailProductComponent } from './components/shop/detail-product/detail-product.component';
import { AboutComponent } from './components/shop/about/about.component';

//   return () =>
//    kcService.init({

//       config: {
//         url: 'http://localhost:8080/auth/',
//         realm: 'AMANI',
//         clientId:'camp',


//       },
//       initOptions: {
//         onLoad: 'login-required',
//         checkLoginIframe:                                                                                                                                                                                                                             true,

//       },
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    GroupsManagementComponent,
    ListGroupComponent,
    AddGroupComponent,
    DetailsGroupComponent,
    UpdateGroupComponent,
    DetailsOffreComponent,
    AddOffreComponent,
    ListOffreComponent,
    UpdateOffreComponent,
    LoginComponent,
    AdminComponent,
    UserManagmentComponent,
    AddUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    ReservationManagementComponent,
    AddReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    PopComponent,
   NavbarComponent,
   RegisterComponent,
   HomeComponent,
   ProfileComponent,
   BoardAdminComponent,
   BoardModeratorComponent,
   BoardUserComponent,
   NavbarshopComponent,
   SidebarshopComponent,
   HomeshopComponent,
    ProductComponent,
    ShopyComponent,
    SPORTMATERIALSComponent,
    COOKINGMATERIALSComponent,
    CLOTHESComponent,
    LIGHTNINGComponent,
    OTHERSComponent,
    DetailProductComponent,
    AboutComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [

    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule


  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
