import { TestBed, inject } from '@angular/core/testing';

import { ReadDetailService } from './read-detail.service';

describe('ReadDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadDetailService]
    });
  });

  it('should be created', inject([ReadDetailService], (service: ReadDetailService) => {
    expect(service).toBeTruthy();
  }));
});
