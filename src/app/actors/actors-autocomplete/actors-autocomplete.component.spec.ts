import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsAutocompleteComponent } from './actors-autocomplete.component';

describe('ActorsAutocompleteComponent', () => {
  let component: ActorsAutocompleteComponent;
  let fixture: ComponentFixture<ActorsAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsAutocompleteComponent]
    });
    fixture = TestBed.createComponent(ActorsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
