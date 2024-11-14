import { Component, OnInit } from '@angular/core';
import { Partner } from '../../models/partner';
import { PartnerService } from '../../services/partner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-partner',
  templateUrl: './update-partner.component.html',
  styleUrl: './update-partner.component.css'
})
export class UpdatePartnerComponent implements OnInit {
  partnerId: string = '';
  partner: Partner = new Partner(); // Or initialize with default values
  updatedPartner: Partner = new Partner(); // For updating

  constructor(
    private route: ActivatedRoute,
    private partnerService: PartnerService
    , private router : Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.partnerId = idParam;
        this.fetchPartnerDetails(this.partnerId);
      } else {
        console.error('Partner ID not found in URL');
       
      }
    });
  }

  fetchPartnerDetails(partnerId: string) {
    this.partnerService.getPartnerById(partnerId).subscribe(
      (partner) => {
        this.partner = partner;
        // Optionally, pre-fill input fields for update
        this.updatedPartner = { ...partner }; // Clone partner object
      },
      (error) => {
        console.error('Error fetching partner details:', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  updatePartner() {
    this.partnerService.updatePartner(this.partnerId, this.updatedPartner).subscribe(
      
      
      (updatedPartner) => {
        console.log('Partner updated:', updatedPartner);
        // Optionally, display a success message or redirect
        this.router.navigate(['/partners/listofpartners']);

        

      },
      (error) => {
        console.error('Error updating partner:', error);
        // Handle error (e.g., show error message)
      }
    );

  }
}
