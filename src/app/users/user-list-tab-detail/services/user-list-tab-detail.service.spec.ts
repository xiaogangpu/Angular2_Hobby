import { TestBed, inject } from '@angular/core/testing';

import { UserListTabDetailService } from './user-list-tab-detail.service';

describe('UserListTabDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListTabDetailService]
    });
  });

  it('should be created', inject([UserListTabDetailService], (service: UserListTabDetailService) => {
    expect(service).toBeTruthy();
  }));
});
