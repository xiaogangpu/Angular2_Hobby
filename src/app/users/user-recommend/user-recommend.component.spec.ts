import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecommendComponent } from './user-recommend.component';

describe('UserRecommendComponent', () => {
  let component: UserRecommendComponent;
  let fixture: ComponentFixture<UserRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
