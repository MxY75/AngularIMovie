import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPorfileComponent } from './user-porfile.component';

describe('UserPorfileComponent', () => {
  let component: UserPorfileComponent;
  let fixture: ComponentFixture<UserPorfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPorfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
