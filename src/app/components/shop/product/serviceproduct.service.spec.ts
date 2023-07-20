import { TestBed } from '@angular/core/testing';

import { ServiceproductService } from './serviceproduct.service';

describe('ServiceproductService', () => {
  let service: ServiceproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
