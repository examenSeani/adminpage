import { TestBed } from '@angular/core/testing';

import { AddAlService } from './add-al.service';

describe('AddAlService', () => {
  let service: AddAlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
