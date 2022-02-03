import { TestBed } from '@angular/core/testing';

import { Segunda.ServicesService } from './segunda.services.service';

describe('Segunda.ServicesService', () => {
  let service: Segunda.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Segunda.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
