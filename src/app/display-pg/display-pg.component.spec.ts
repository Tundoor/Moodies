import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPgComponent } from './display-pg.component';

describe('DisplayPgComponent', () => {
  let component: DisplayPgComponent;
  let fixture: ComponentFixture<DisplayPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPgComponent]
    });
    fixture = TestBed.createComponent(DisplayPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
