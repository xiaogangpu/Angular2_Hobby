import { TestBed, inject } from '@angular/core/testing';

import { GetMedicineService } from './get-medicine.service';

describe('GetMedicineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMedicineService]
    });
  });

  it('should be created', inject([GetMedicineService], (service: GetMedicineService) => {
    expect(service).toBeTruthy();
  }));
});
