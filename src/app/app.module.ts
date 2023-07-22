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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './components/shop/add-product/add-product.component';
import { ErrorComponent } from './error/error.component';

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
    PopComponent,
   NavbarComponent,
   RegisterComponent,
   HomeComponent,
   ProfileComponent,
   BoardAdminComponent,
   BoardModeratorComponent,
   BoardUserComponent,
   ProductComponent,
   AddProductComponent,
   ErrorComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule
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
