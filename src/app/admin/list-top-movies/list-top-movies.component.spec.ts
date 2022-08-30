import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopMoviesComponent } from './list-top-movies.component';

describe('ListTopMoviesComponent', () => {
  let component: ListTopMoviesComponent;
  let fixture: ComponentFixture<ListTopMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
