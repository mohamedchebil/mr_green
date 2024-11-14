import { Component, OnInit } from '@angular/core';
import { Partner } from '../../models/partner';
import { PartnerService } from '../../services/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-partners',
  templateUrl: './get-all-partners.component.html',
  styleUrl: './get-all-partners.component.css'
})
export class GetAllPartnersComponent implements OnInit {
  partners?: Partner[];
  id:Partner["_id"] ;

  constructor(private partnerService: PartnerService , private router : Router) { }
  ngOnInit(): void {
    this.loadPartners();
    
  }
  loadPartners(): void {
    this.partnerService.getAllPartners().subscribe(
      (data: any) => {
        this.partners = data;
      },
      (error: any) => {
        console.error('Error loading annonces:', error);
      }
    );
  }

  
}
