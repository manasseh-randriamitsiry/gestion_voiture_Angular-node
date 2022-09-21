import { TestBed } from '@angular/core/testing';

import { FiltreService } from './service/filtre.service';

describe('FiltreService', () => {
  let service: FiltreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
