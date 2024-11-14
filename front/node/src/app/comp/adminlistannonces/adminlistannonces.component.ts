import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { AnnoncesService } from '../../services/annonce.service';

@Component({
  selector: 'app-adminlistannonces',
  templateUrl: './adminlistannonces.component.html',
  styleUrl: './adminlistannonces.component.css'
})
export class AdminlistannoncesComponent  implements OnInit {
  annonces?: Annonce[];

  constructor(private annonceService: AnnoncesService) { }
  ngOnInit(): void {
    this.loadAnnonces1();
    console.log("hello");
  }
  loadAnnonces1(): void {
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
