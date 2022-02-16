import { TestBed } from '@angular/core/testing';

import { EtapaServicesService } from './etapa.services.service';

describe('Segunda.ServicesService', () => {
  let service: EtapaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
