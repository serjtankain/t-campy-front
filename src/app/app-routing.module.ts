import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupComponent } from './components/groups-management/list-group/list-group/list-group.component';

const routes: Routes = [
  {path: '', redirectTo:'groups',pathMatch:'full'},
  {path: 'groups', component:ListGroupComponent},

  {path: '**',component:ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
