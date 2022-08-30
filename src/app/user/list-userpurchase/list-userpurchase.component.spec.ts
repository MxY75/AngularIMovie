import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserpurchaseComponent } from './list-userpurchase.component';

describe('ListUserpurchaseComponent', () => {
  let component: ListUserpurchaseComponent;
  let fixture: ComponentFixture<ListUserpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
