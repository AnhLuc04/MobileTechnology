import { TestBed } from '@angular/core/testing';

import { DelivererServiceService } from './deliverer-service.service';

describe('DelivererServiceService', () => {
  let service: DelivererServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelivererServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
