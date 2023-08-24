import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsIndexComponent } from './actors-index.component';

describe('ActorsIndexComponent', () => {
  let component: ActorsIndexComponent;
  let fixture: ComponentFixture<ActorsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsIndexComponent]
    });
    fixture = TestBed.createComponent(ActorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
