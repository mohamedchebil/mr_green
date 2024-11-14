import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllAnnoncesComponent } from './comp/get-all-annonces/get-all-annonces.component';
import { GetDetailsAnnonceComponent } from './comp/get-details-annonce/get-details-annonce.component';
import { CreateAnnonceComponent } from './comp/create-annonce/create-annonce.component';
import { CitAllAnnoncesComponent } from './comp/cit-all-annonces/cit-all-annonces.component';
import { UpdateAnnonceComponent } from './comp/update-annonce/update-annonce.component';
import { CreatePartnerComponent } from './comp/create-partner/create-partner.component';
import { GetAllPartnersComponent } from './comp/get-all-partners/get-all-partners.component';
import { GetDetailsPartnerComponent } from './comp/get-details-partner/get-details-partner.component';
import { UpdatePartnerComponent } from './comp/update-partner/update-partner.component';
import { MapViewComponent } from './comp/map-view/map-view.component';
import { AdminlistannoncesComponent } from './comp/adminlistannonces/adminlistannonces.component';
import { AdmindetailsannonceComponent } from './comp/admindetailsannonce/admindetailsannonce.component';

const routes: Routes = [
  {path: '', redirectTo: 'annonces', pathMatch: 'full'},
  

  { path: 'annonces/cit', component: CitAllAnnoncesComponent },
  { path: 'annonces/update-annonce/:id', component: UpdateAnnonceComponent },
  { path: 'annonces/details/:id', component: GetDetailsAnnonceComponent },

  { path: 'annonces/create-annonce', component: CreateAnnonceComponent },
  { path: 'annonces', component: GetAllAnnoncesComponent },



  { path: 'partners/listofpartners', component: GetAllPartnersComponent },
  { path: 'partners/details/:id', component: GetDetailsPartnerComponent },
  { path: 'partners/create-partner', component: CreatePartnerComponent },
  { path: 'partners/update-partner/:id', component: UpdatePartnerComponent },
  { path: 'partners/map', component: MapViewComponent },
  { path: 'admin/listannonces', component: AdminlistannoncesComponent },
  { path: 'admin/detailsann/:id', component: AdmindetailsannonceComponent },





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
