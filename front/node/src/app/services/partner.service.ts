import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../models/partner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private apiUrl = 'http://localhost:8001/api/partners'; 

  constructor(private http: HttpClient) { }

  createPartner(partnerData: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.apiUrl, partnerData);
}


getAllPartners(): Observable<Partner> {
  return this.http.get(this.apiUrl);
}


getPartnerById(partnerId: string): Observable<Partner> {
  const url = `${this.apiUrl}/${partnerId}`;
  return this.http.get<Partner>(url);
}

updatePartner(partnerId: string, updatedPartner: Partner): Observable<Partner> {
  console.log(updatedPartner);
  const url = `${this.apiUrl}/${partnerId}`;
  console.log(url);
  
  return this.http.put<Partner>(url, updatedPartner);
}

}
