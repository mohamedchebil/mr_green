import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { AnnoncesService } from '../../services/annonce.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cit-all-annonces',
  templateUrl: './cit-all-annonces.component.html',
  styleUrl: './cit-all-annonces.component.css'
})
export class CitAllAnnoncesComponent implements OnInit {
  annonces?: Annonce[];

  constructor(private annonceService: AnnoncesService, private router: Router) { }
  ngOnInit(): void {
    this.loadAnnonces1();
    console.log("hello");
    
  }
  loadAnnonces1(): void {
    this.annonceService.CitoyenAllAnnonces().subscribe(
      (data: any) => {
        this.annonces = data;
      },
      (error: any) => {
        console.error('Error loading annonces:', error);
      }
    );
  }

  onDelete(id: string | undefined): void {
    if (!id) {
      console.error('Invalid id:', id);
      return;
    }
  
    this.annonceService.deleteAnnonce(id).subscribe(
      () => {
        console.log('Annonce deleted successfully');
        // Reload the list of announcements after deletion
        this.loadAnnonces1();
      },
      error => {
        console.error('Error deleting annonce:', error);
        // Handle error
      }
    );
  }

 
  
  
}
