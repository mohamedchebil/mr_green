import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPartnersComponent } from './get-all-partners.component';

describe('GetAllPartnersComponent', () => {
  let component: GetAllPartnersComponent;
  let fixture: ComponentFixture<GetAllPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
