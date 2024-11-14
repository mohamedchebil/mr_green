import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitAllAnnoncesComponent } from './cit-all-annonces.component';

describe('CitAllAnnoncesComponent', () => {
  let component: CitAllAnnoncesComponent;
  let fixture: ComponentFixture<CitAllAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitAllAnnoncesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitAllAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
