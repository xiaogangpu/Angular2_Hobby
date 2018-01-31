import { TestBed, inject } from '@angular/core/testing';

import { InfiniteScrollDetailService } from './infinite-scroll-detail.service';

describe('InfiniteScrollDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfiniteScrollDetailService]
    });
  });

  it('should be created', inject([InfiniteScrollDetailService], (service: InfiniteScrollDetailService) => {
    expect(service).toBeTruthy();
  }));
});
