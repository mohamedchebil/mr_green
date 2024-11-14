import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistannoncesComponent } from './adminlistannonces.component';

describe('AdminlistannoncesComponent', () => {
  let component: AdminlistannoncesComponent;
  let fixture: ComponentFixture<AdminlistannoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminlistannoncesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminlistannoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
