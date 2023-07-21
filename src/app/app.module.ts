import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './components/groups-management/groups-management.component';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';
import { AddGroupComponent } from './components/groups-management/add-Group/add-group/add-group.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailsGroupComponent } from './components/groups-management/details-group/details-group/details-group.component';
import { UpdateGroupComponent } from './components/groups-management/update-Group/update-group/update-group.component';
import { DetailsOffreComponent } from './components/offres-management/details-offre/details-offre.component';
import { AddOffreComponent } from './components/offres-management/add-offre/add-offre.component';
import { ListOffreComponent } from './components/offres-management/list-offre/list-offre.component';
import { UpdateOffreComponent } from './components/offres-management/update-offre/update-offre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import {UserManagmentComponent} from "./user-managment/user-managment.component";
import {AddUserComponent} from "./user-managment/add-user/add-user.component";
import {ListUserComponent} from "./user-managment/list-user/list-user.component";
import {UpdateUserComponent} from "./user-managment/update-user/update-user.component";
import {ReservationManagementComponent} from "./reservation-management/reservation-management.component";
import {AddReservationComponent} from "./reservation-management/add-reservation/add-reservation.component";
import {ListReservationComponent} from "./reservation-management/list-reservation/list-reservation.component";
import {PopComponent} from "./pop/pop.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {ProductComponent} from "./components/shop/product/product.component";
import {AddProductComponent} from "./components/shop/add-product/add-product.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import {QuestionsListComponent} from "./components/questions-list/questions-list.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatBadgeModule} from "@angular/material/badge";
import {LoadingInterceptor} from "./Interceptors/loading.interceptor";


@NgModule({
  declarations: [
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
    QuestionsListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatTabsModule,
    BrowserModule,
    // NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatBadgeModule,
  ],
  // providers: [
  //
  //   BrowserAnimationsModule,
  //   MatDialogModule,
  //   MatSelectModule
  //
  // ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
