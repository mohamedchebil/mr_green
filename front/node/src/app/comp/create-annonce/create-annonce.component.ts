import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../../services/annonce.service';
import { Annonce } from '../../models/annonce';
import { Router } from '@angular/router'; // Import Router




@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrl: './create-annonce.component.css'
})
export class CreateAnnonceComponent implements OnInit {
  annonce: Annonce = {};
  selectedFile: File | null = null;
 


  constructor(private annonceService: AnnoncesService , private router : Router) { }

  ngOnInit(): void {
    // Initialization code goes here if needed
  }

  submitForm() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('nom', this.annonce.nom || '');
      formData.append('description', this.annonce.description || '');
      formData.append('prix', this.annonce.prix?.toString() || '');
      formData.append('numtel', this.annonce.numtel || '');
      formData.append('adresse', this.annonce.adresse || '');

      this.annonceService.createAnnonceWithImage(formData)
        .subscribe(
          response => {
            console.log('Success:', response);
            this.goToCategoryList();
            // Handle success response
           
          },
          error => {
            console.error('Error:', error);
            // Handle error response
          }
        );
    } else {
      console.error('No file selected');
      // Handle case where no file is selected
    }
  }
  goToCategoryList(){
    this.router.navigate(['/annonces/cit']);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
