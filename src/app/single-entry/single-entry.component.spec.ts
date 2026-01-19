import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryComponent } from './single-entry.component';

describe('SingleEntryComponent', () => {
  let component: SingleEntryComponent;
  let fixture: ComponentFixture<SingleEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEntryComponent]
    });
    fixture = TestBed.createComponent(SingleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
