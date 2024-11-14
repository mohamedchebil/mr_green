import { TestBed } from '@angular/core/testing';

import { AnnoncesService } from './annonce.service';

describe('AnnonceService', () => {
  let service: AnnoncesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoncesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
