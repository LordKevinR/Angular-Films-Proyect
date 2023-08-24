import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersCreateComponent } from './theaters-create.component';

describe('TheatersCreateComponent', () => {
  let component: TheatersCreateComponent;
  let fixture: ComponentFixture<TheatersCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatersCreateComponent]
    });
    fixture = TestBed.createComponent(TheatersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
