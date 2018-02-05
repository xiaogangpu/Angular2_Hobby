import { TestBed, inject } from '@angular/core/testing';

import { LabelListService } from './label-list.service';

describe('LabelListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelListService]
    });
  });

  it('should be created', inject([LabelListService], (service: LabelListService) => {
    expect(service).toBeTruthy();
  }));
});
