import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailsAnnonceComponent } from './get-details-annonce.component';

describe('GetDetailsAnnonceComponent', () => {
  let component: GetDetailsAnnonceComponent;
  let fixture: ComponentFixture<GetDetailsAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetDetailsAnnonceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDetailsAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
