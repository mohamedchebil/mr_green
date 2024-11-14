import { Component, OnInit } from '@angular/core';
import { Partner } from '../../models/partner';
import { PartnerService } from '../../services/partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-details-partner',
  templateUrl: './get-details-partner.component.html',
  styleUrl: './get-details-partner.component.css'
})
export class GetDetailsPartnerComponent implements OnInit {
  partner: Partner | undefined;
   partnerId = String ;


  constructor(private route: ActivatedRoute, private partnerService: PartnerService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.fetchPartnerDetails(id);
    } else {
      console.error('ID parameter is null');
    }
  }

  fetchPartnerDetails(partnerId: string) {
    this.partnerService.getPartnerById(partnerId).subscribe(
      (partner: Partner) => {
        this.partner = partner;
        console.log('Fetched partner details:', partner);
      },
      (error) => {
        console.error('Error fetching partner details:', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
