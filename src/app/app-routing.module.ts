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
  { path: 'offreDetails/:id', component: DetailsOffreComponent },
  {path: 'Produit',component:ProductComponent},
  {path:'Shop',component:ShopyComponent}
  // {path: '**',component:ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
