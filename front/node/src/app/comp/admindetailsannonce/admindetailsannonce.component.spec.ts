import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailsannonceComponent } from './admindetailsannonce.component';

describe('AdmindetailsannonceComponent', () => {
  let component: AdmindetailsannonceComponent;
  let fixture: ComponentFixture<AdmindetailsannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindetailsannonceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindetailsannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
