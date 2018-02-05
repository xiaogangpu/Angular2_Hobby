import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelListTabComponent } from './label-list-tab.component';

describe('LabelListTabComponent', () => {
  let component: LabelListTabComponent;
  let fixture: ComponentFixture<LabelListTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelListTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
