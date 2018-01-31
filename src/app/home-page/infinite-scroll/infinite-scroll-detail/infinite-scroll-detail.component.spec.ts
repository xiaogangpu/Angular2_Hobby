import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollDetailComponent } from './infinite-scroll-detail.component';

describe('InfiniteScrollDetailComponent', () => {
  let component: InfiniteScrollDetailComponent;
  let fixture: ComponentFixture<InfiniteScrollDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
