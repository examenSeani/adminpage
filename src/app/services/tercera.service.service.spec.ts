import { TestBed } from '@angular/core/testing';

import { Tercera.ServiceService } from './tercera.service.service';

describe('Tercera.ServiceService', () => {
  let service: Tercera.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tercera.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
