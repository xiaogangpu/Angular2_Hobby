import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTabDetailComponent } from './user-list-tab-detail.component';

describe('UserListTabDetailComponent', () => {
  let component: UserListTabDetailComponent;
  let fixture: ComponentFixture<UserListTabDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListTabDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
