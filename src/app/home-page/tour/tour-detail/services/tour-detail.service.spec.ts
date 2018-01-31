import { TestBed, inject } from '@angular/core/testing';

import { TourDetailService } from './tour-detail.service';

describe('TourDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourDetailService]
    });
  });

  it('should be created', inject([TourDetailService], (service: TourDetailService) => {
    expect(service).toBeTruthy();
  }));
});
