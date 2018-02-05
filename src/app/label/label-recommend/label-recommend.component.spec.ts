import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelRecommendComponent } from './label-recommend.component';

describe('LabelRecommendComponent', () => {
  let component: LabelRecommendComponent;
  let fixture: ComponentFixture<LabelRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
