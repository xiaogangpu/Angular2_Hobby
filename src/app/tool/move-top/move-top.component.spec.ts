import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveTopComponent } from './move-top.component';

describe('MoveTopComponent', () => {
  let component: MoveTopComponent;
  let fixture: ComponentFixture<MoveTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
