import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersIndexComponent } from './theaters-index.component';

describe('TheatersIndexComponent', () => {
  let component: TheatersIndexComponent;
  let fixture: ComponentFixture<TheatersIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatersIndexComponent]
    });
    fixture = TestBed.createComponent(TheatersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
