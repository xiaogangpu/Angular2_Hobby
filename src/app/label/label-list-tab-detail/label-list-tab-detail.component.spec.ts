import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelListTabDetailComponent } from './label-list-tab-detail.component';

describe('LabelListTabDetailComponent', () => {
  let component: LabelListTabDetailComponent;
  let fixture: ComponentFixture<LabelListTabDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelListTabDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelListTabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
