import { TestBed, inject } from '@angular/core/testing';

import { RideServiceService } from './ride-service.service';

describe('RideServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RideServiceService]
    });
  });

  it('should be created', inject([RideServiceService], (service: RideServiceService) => {
    expect(service).toBeTruthy();
  }));
});
