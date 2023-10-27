import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDetailsComponent } from './films-details.component';

describe('FilmsDetailsComponent', () => {
  let component: FilmsDetailsComponent;
  let fixture: ComponentFixture<FilmsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsDetailsComponent]
    });
    fixture = TestBed.createComponent(FilmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
