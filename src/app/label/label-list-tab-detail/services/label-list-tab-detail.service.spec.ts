import { TestBed, inject } from '@angular/core/testing';

import { LabelListTabDetailService } from './label-list-tab-detail.service';

describe('LabelListTabDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelListTabDetailService]
    });
  });

  it('should be created', inject([LabelListTabDetailService], (service: LabelListTabDetailService) => {
    expect(service).toBeTruthy();
  }));
});
