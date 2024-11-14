import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllAnnoncesComponent } from './comp/get-all-annonces/get-all-annonces.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDetailsAnnonceComponent } from './comp/get-details-annonce/get-details-annonce.component';
import { CreateAnnonceComponent } from './comp/create-annonce/create-annonce.component';
import { FormsModule } from '@angular/forms';
import { CitAllAnnoncesComponent } from './comp/cit-all-annonces/cit-all-annonces.component';
import { UpdateAnnonceComponent } from './comp/update-annonce/update-annonce.component';
import { RouterModule } from '@angular/router';
import { CreatePartnerComponent } from './comp/create-partner/create-partner.component';
import { GetAllPartnersComponent } from './comp/get-all-partners/get-all-partners.component';
import { GetDetailsPartnerComponent } from './comp/get-details-partner/get-details-partner.component';
import { UpdatePartnerComponent } from './comp/update-partner/update-partner.component';
import { MapViewComponent } from './comp/map-view/map-view.component';
import { AdminlistannoncesComponent } from './comp/adminlistannonces/adminlistannonces.component';
import { AdmindetailsannonceComponent } from './comp/admindetailsannonce/admindetailsannonce.component';


@NgModule({
  declarations: [
    AppComponent,
    GetAllAnnoncesComponent,
    GetDetailsAnnonceComponent,
    CreateAnnonceComponent,
    CitAllAnnoncesComponent,
    UpdateAnnonceComponent,
    CreatePartnerComponent,
    GetAllPartnersComponent,
    GetDetailsPartnerComponent,
    UpdatePartnerComponent,
    MapViewComponent,
    AdminlistannoncesComponent,
    AdmindetailsannonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
