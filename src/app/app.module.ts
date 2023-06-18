import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './components/groups-management/groups-management.component';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsManagementComponent,
    ListGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
