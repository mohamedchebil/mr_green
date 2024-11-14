import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartnerComponent } from './create-partner.component';

describe('CreatePartnerComponent', () => {
  let component: CreatePartnerComponent;
  let fixture: ComponentFixture<CreatePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
