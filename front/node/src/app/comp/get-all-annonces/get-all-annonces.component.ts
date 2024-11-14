import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../../services/annonce.service';
import { Annonce } from '../../models/annonce';
import { Location } from '@angular/common'; // Import Location service

@Component({
  selector: 'app-get-all-annonces',
  templateUrl: './get-all-annonces.component.html',
  styleUrl: './get-all-annonces.component.css'
})
export class GetAllAnnoncesComponent  implements OnInit {
  annonces?: Annonce[];

  constructor(private annonceService: AnnoncesService, location: Location) { }
  ngOnInit(): void {
    this.loadAnnonces();
    console.log("hello");
  }
  loadAnnonces(): void {
    this.annonceService.getAllAnnonces().subscribe(
      (data: any) => {
        this.annonces = data;
      },
      (error: any) => {
        console.error('Error loading annonces:', error);
      }
    );
  }
 
}

