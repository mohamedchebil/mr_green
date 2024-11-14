import { Component } from '@angular/core';
import { Partner } from '../../models/partner';
import { PartnerService } from '../../services/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrl: './create-partner.component.css'
})
export class CreatePartnerComponent {
  partner: Partner = {};

  constructor(private partnerService: PartnerService , private router : Router) { }


  createNewPartner() {
    this.partnerService.createPartner(this.partner).subscribe(
      (response) => {
        console.log('Partner created successfully:', response);
        this.router.navigate(['/partners/listofpartners']);

        // Optionally handle success (e.g., show success message)
      },
      (error) => {
        console.error('Error creating partner:', error);
        // Optionally handle error (e.g., show error message)
      }
    );
  }

}
