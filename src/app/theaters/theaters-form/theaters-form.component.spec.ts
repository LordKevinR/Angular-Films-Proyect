import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersFormComponent } from './theaters-form.component';

describe('TheatersFormComponent', () => {
  let component: TheatersFormComponent;
  let fixture: ComponentFixture<TheatersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatersFormComponent]
    });
    fixture = TestBed.createComponent(TheatersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
