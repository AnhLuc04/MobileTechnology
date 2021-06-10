import { TestBed } from '@angular/core/testing';

import { SalePhoneServiceService } from './sale-phone-service.service';

describe('SalePhoneServiceService', () => {
  let service: SalePhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalePhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
