import { TestBed, inject } from '@angular/core/testing';

import { LabelListTabService } from './label-list-tab.service';

describe('LabelListTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelListTabService]
    });
  });

  it('should be created', inject([LabelListTabService], (service: LabelListTabService) => {
    expect(service).toBeTruthy();
  }));
});
