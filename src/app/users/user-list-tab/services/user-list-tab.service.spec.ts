import { TestBed, inject } from '@angular/core/testing';

import { UserListTabService } from './user-list-tab.service';

describe('UserListTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListTabService]
    });
  });

  it('should be created', inject([UserListTabService], (service: UserListTabService) => {
    expect(service).toBeTruthy();
  }));
});
