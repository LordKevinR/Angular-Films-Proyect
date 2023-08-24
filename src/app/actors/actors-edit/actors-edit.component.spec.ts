import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsEditComponent } from './actors-edit.component';

describe('ActorsEditComponent', () => {
  let component: ActorsEditComponent;
  let fixture: ComponentFixture<ActorsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsEditComponent]
    });
    fixture = TestBed.createComponent(ActorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
