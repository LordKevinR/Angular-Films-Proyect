import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsFormComponent } from './actors-form.component';

describe('ActorsFormComponent', () => {
  let component: ActorsFormComponent;
  let fixture: ComponentFixture<ActorsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsFormComponent]
    });
    fixture = TestBed.createComponent(ActorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
