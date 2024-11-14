import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { ActivatedRoute } from '@angular/router';
import { AnnoncesService } from '../../services/annonce.service';

@Component({
  selector: 'app-admindetailsannonce',
  templateUrl: './admindetailsannonce.component.html',
  styleUrl: './admindetailsannonce.component.css'
})
export class AdmindetailsannonceComponent implements OnInit {
  annonce?: Annonce;
  id: any | undefined ;
  loading = true;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnoncesService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getAnnouncementDetails1(id);
    } else {
      console.error('ID parameter is null');
    }
  }

  getAnnouncementDetails1(id: string): void {
    this.annonceService.getAnnouncementById(id)
      .subscribe(
        (annonce: Annonce) => {
          this.annonce = annonce;
          // Populate form fields with existing data
        },
        error => {
          console.error('Error fetching announcement details:', error);
        }
      );
  }
}

