import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './components/groups-management/groups-management.component';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';
import { AddGroupComponent } from './components/groups-management/add-Group/add-group/add-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsGroupComponent } from './components/groups-management/details-group/details-group/details-group.component';
import { UpdateGroupComponent } from './components/groups-management/update-Group/update-group/update-group.component';
import { DetailsOffreComponent } from './components/offres-management/details-offre/details-offre.component';
import { AddOffreComponent } from './components/offres-management/add-offre/add-offre.component';
import { ListOffreComponent } from './components/offres-management/list-offre/list-offre.component';
import { UpdateOffreComponent } from './components/offres-management/update-offre/update-offre.component';
<<<<<<< Updated upstream
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/shop/product/product.component';
import { ShopyComponent } from './components/shop/shopy/shopy.component';
import { OrderComponent } from './components/shop/order/order.component';
import { DetailOrderComponent } from './components/shop/detail-order/detail-order.component';


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
<<<<<<< Updated upstream
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
<<<<<<< Updated upstream
    MatDialogModule
  ],
  providers: [
    
=======
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule

 
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [KeycloakService
    // {provide : APP_INITIALIZER, deps : [KeycloakService],useFactory : Kcfactory, multi : true},
>>>>>>> Stashed changes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
