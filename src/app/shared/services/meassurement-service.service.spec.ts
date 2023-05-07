import { TestBed } from '@angular/core/testing';

import { MeassurementServiceService } from './meassurement-service.service';

describe('MeassurementServiceService', () => {
  let service: MeassurementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeassurementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
