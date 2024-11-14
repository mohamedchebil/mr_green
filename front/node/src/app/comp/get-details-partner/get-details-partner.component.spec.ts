import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailsPartnerComponent } from './get-details-partner.component';

describe('GetDetailsPartnerComponent', () => {
  let component: GetDetailsPartnerComponent;
  let fixture: ComponentFixture<GetDetailsPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetDetailsPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDetailsPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
