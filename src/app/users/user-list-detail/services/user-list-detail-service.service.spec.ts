import { TestBed, inject } from '@angular/core/testing';

import { UserListDetailServiceService } from './user-list-detail-service.service';

describe('UserListDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListDetailServiceService]
    });
  });

  it('should be created', inject([UserListDetailServiceService], (service: UserListDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
