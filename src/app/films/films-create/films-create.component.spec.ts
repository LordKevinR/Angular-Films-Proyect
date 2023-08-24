import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCreateComponent } from './films-create.component';

describe('FilmsCreateComponent', () => {
  let component: FilmsCreateComponent;
  let fixture: ComponentFixture<FilmsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsCreateComponent]
    });
    fixture = TestBed.createComponent(FilmsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
