import { TestBed, inject } from '@angular/core/testing';

import { LabelRecommendService } from './label-recommend.service';

describe('LabelRecommendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelRecommendService]
    });
  });

  it('should be created', inject([LabelRecommendService], (service: LabelRecommendService) => {
    expect(service).toBeTruthy();
  }));
});
