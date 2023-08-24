import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFilterComponent } from './films-filter.component';

describe('FilmsFilterComponent', () => {
  let component: FilmsFilterComponent;
  let fixture: ComponentFixture<FilmsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsFilterComponent]
    });
    fixture = TestBed.createComponent(FilmsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
