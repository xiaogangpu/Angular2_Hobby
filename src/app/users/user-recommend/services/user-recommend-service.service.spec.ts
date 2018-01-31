import { TestBed, inject } from '@angular/core/testing';

import { UserRecommendServiceService } from './user-recommend-service.service';

describe('UserRecommendServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRecommendServiceService]
    });
  });

  it('should be created', inject([UserRecommendServiceService], (service: UserRecommendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
