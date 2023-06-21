import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
