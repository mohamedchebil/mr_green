import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

interface RecyclingCenter {
  name: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  map: any;
  myLocation: { latitude: number; longitude: number } | null = null;
  userLocation: { latitude: number; longitude: number } | null = null;
  


  recyclingCenters: RecyclingCenter[] = [
    { name: 'Tunis Impex SARL', lat: 36.90870266712651, lng: 10.177939232331813 }, 
    { name: 'Tunisie Recyclage', lat: 36.8890720540641, lng: 10.2708080165598 },
    { name: 'Respect environnement group Tunis ', lat: 36.86627774496586, lng: 10.161631388858211 },
    { name: 'COLLECTUN D3E RECYCLAGE', lat: 36.870947012879235, lng: 10.302050384864344 },  
    { name: 'Green Plastic Engineering SARL', lat: 36.8475978197661, lng: 10.241282261898364 },  
    { name: 'IDEAL SERVICE MEDENINE', lat: 36.811598625160066, lng: 10.182230752701916  }, 
    { name: 'Sinda Collecte et transport des déchets', lat: 36.7964794103158, lng: 10.110132976556107  }, 





    // Add more recycling centers as needed
  ];

  constructor() { }

  ngOnInit(): void {
// Retrieve recycling centers from local storage when the component initializes
const savedRecyclingCenters = localStorage.getItem('recyclingCenters');
if (savedRecyclingCenters) {
  this.recyclingCenters = JSON.parse(savedRecyclingCenters);
}

    this.initMap();
    this.getUserLocation(); // Request user's location permission when the component initializes
    this.addRecyclingCenterMarkers();
    this.addRecyclingCenterOnClick(); 
  }

  initMap(): void {
    this.map = L.map('map').setView([36.8065, 10.1815], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }
  

  getUserLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.myLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          this.map.setView([this.myLocation.latitude, this.myLocation.longitude], 13);
          this.addRecyclingCenterMarkers(); // Call addRecyclingCenterMarkers after getting user's location
          this.addUserLocationMarker();
        },
        (error) => {console.error('Error getting user location:', error);
          // Handle error (e.g., show error message to user)
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle if geolocation is not supported
    }
  }

  addRecyclingCenterMarkers(): void {
    this.recyclingCenters.forEach(center => {
      const marker = L.marker([center.lat, center.lng]).addTo(this.map);
      marker.bindPopup(`<b>${center.name}</b><br>`);
      marker.on('click', () => {
        if (this.myLocation) {
          const distance = this.calculateDistance(this.myLocation.latitude, this.myLocation.longitude, center.lat, center.lng);
          alert(`Distance from your location to ${center.name}: ${distance.toFixed(2)} km`);
          this.showRoutingToRecyclingCenter(center);
        } else {
          console.error('User location not available.');
        }
      });
    });
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  showRoutingToRecyclingCenter(center: RecyclingCenter): void {
    if (this.myLocation) {
      L.Routing.control({
        waypoints: [
          L.latLng(this.myLocation.latitude, this.myLocation.longitude),
          L.latLng(center.lat, center.lng)
        ]
      }).addTo(this.map);
    }
  }

  addUserLocationMarker(): void {
    if (this.myLocation) {
      const userIcon = L.icon({
        iconUrl: '/assets/icon-marker.png',
        iconSize: [32, 32], // Set icon size
        iconAnchor: [16, 16], // Set icon anchor
      });
      const userMarker = L.marker([this.myLocation.latitude, this.myLocation.longitude], { icon: userIcon }).addTo(this.map);
      userMarker.bindPopup('Your location');
    }
  }


  addRecyclingCenter(center: RecyclingCenter): void {
    // Add the new recycling center to the existing list
    this.recyclingCenters.push(center);
    
    // Update local storage
    localStorage.setItem('recyclingCenters', JSON.stringify(this.recyclingCenters));
    
    // Update markers on the map
    this.addRecyclingCenterMarkers(); // Call without passing any arguments
}
  addRecyclingCenterOnClick(): void {
    // Listen for click event on the map
    this.map.on('click', (e: any) => {
      // Get coordinates where user clicked
      const latlng = e.latlng;
      
      // Prompt user to enter name of recycling center
      const centerName = prompt('Enter the name of the recycling center:');
      
      // Check if a name was entered
      if (centerName) {
        // Add marker at clicked location with entered name
        const marker = L.marker(latlng).addTo(this.map);
        marker.bindPopup(`<b>${centerName}</b><br>`);
        
        // Calculate distance from user's location to the new recycling center
        if (this.myLocation) {
          const distance = this.calculateDistance(this.myLocation.latitude, this.myLocation.longitude, latlng.lat, latlng.lng);
          alert(`Distance from your location to ${centerName}: ${distance.toFixed(2)} km`);
        }
        
        // Show route from user's location to the new recycling center
        if (this.myLocation) {
          this.showRoutingToRecyclingCenter({ name: centerName, lat: latlng.lat, lng: latlng.lng });
        }
        
        // Add the new recycling center to the list and local storage
        const newCenter: RecyclingCenter = { name: centerName, lat: latlng.lat, lng: latlng.lng };
        this.addRecyclingCenter(newCenter);
      }
    });
  }
}
