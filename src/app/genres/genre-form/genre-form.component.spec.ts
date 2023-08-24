import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFormComponent } from './genre-form.component';

describe('GenreFormComponent', () => {
  let component: GenreFormComponent;
  let fixture: ComponentFixture<GenreFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreFormComponent]
    });
    fixture = TestBed.createComponent(GenreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
