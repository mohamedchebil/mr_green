import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { AnnoncesService } from '../../services/annonce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrl: './update-annonce.component.css'
})
export class UpdateAnnonceComponent implements OnInit {
  annonce: Annonce = new Annonce(); // Assuming Annonce is your model class
  imageFile: File | null = null; // Declare imageFile property


  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnoncesService
    , private router : Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getAnnouncementDetails(id);
    } else {
      console.error('ID parameter is null');
    }
  }

  getAnnouncementDetails(id: string): void {
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
  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imageFile = fileList[0];
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      if (this.imageFile !== null) {
        // Update announcement with new image
        this.annonceService.updateAnnonce(id, this.annonce, this.imageFile)
          .subscribe(
            response => {
              console.log('Announcement updated successfully:', response);
              // Navigate to the updated announcement details or any other page
              this.goToCategoryList();
            },
            error => {
              console.error('Error updating announcement:', error);
              // Handle error if needed
            }
          );
      } else {
        // Update announcement without changing the image
        this.annonceService.updateAnnonce(id, this.annonce)
          .subscribe(
            response => {
              console.log('Announcement updated successfully:', response);
              // Navigate to the updated announcement details or any other page
              this.goToCategoryList();

            },
            error => {
              console.error('Error updating announcement:', error);
              // Handle error if needed
            }
          );
      }
    } else {
      console.error('ID parameter is null');
    }
  }
  

  goToCategoryList(){
    this.router.navigate(['/annonces/cit']);
  }
  
}
