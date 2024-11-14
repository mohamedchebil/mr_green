import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAnnoncesComponent } from './get-all-annonces.component';

describe('GetAllAnnoncesComponent', () => {
  let component: GetAllAnnoncesComponent;
  let fixture: ComponentFixture<GetAllAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllAnnoncesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
