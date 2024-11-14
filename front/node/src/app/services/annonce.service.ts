import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private apiUrl = 'http://localhost:8001/api';

  constructor(private httpClient: HttpClient) { }

  getAllAnnonces(): Observable<Annonce> {
    return this.httpClient.get<Annonce>(`${this.apiUrl}/annonces`);
  }

  getAnnouncementById(id:String): Observable<Annonce> {
    const url = `${this.apiUrl}/annonces/${id}`;
    return this.httpClient.get<Annonce>(url);
  }

  createAnnonceWithImage(formData: FormData) {
    return this.httpClient.post<any>('http://localhost:8001/api/annonces', formData);
  }

  CitoyenAllAnnonces(): Observable<Annonce> {
    return this.httpClient.get<Annonce>(`${this.apiUrl}/annonces`);
  }
  deleteAnnonce(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  updateAnnonce(id: string, updateData: any, image?: File): Observable<any> {
    // Check if image is provided
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('nom', updateData.nom);
      formData.append('description', updateData.description);
      formData.append('prix', updateData.prix.toString());
      formData.append('numtel', updateData.numtel);
      formData.append('adresse', updateData.adresse);
  
      return this.httpClient.put(`${this.apiUrl}/annonces/update-image/${id}`, formData);
    } else {
      // Update announcement without changing the image
      return this.httpClient.put(`${this.apiUrl}/annonces/${id}`, updateData);
    }
  }
  
}

