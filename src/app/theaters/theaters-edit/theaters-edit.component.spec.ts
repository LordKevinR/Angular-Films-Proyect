import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersEditComponent } from './theaters-edit.component';

describe('TheatersEditComponent', () => {
  let component: TheatersEditComponent;
  let fixture: ComponentFixture<TheatersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatersEditComponent]
    });
    fixture = TestBed.createComponent(TheatersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
