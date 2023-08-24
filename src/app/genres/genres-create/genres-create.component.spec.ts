import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresCreateComponent } from './genres-create.component';

describe('GenresCreateComponent', () => {
  let component: GenresCreateComponent;
  let fixture: ComponentFixture<GenresCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenresCreateComponent]
    });
    fixture = TestBed.createComponent(GenresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
