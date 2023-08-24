import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectorComponent } from './multiple-selector.component';

describe('MultipleSelectorComponent', () => {
  let component: MultipleSelectorComponent;
  let fixture: ComponentFixture<MultipleSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSelectorComponent]
    });
    fixture = TestBed.createComponent(MultipleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
