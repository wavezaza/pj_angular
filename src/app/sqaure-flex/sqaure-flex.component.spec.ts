import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaureFlexComponent } from './sqaure-flex.component';

describe('SqaureFlexComponent', () => {
  let component: SqaureFlexComponent;
  let fixture: ComponentFixture<SqaureFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqaureFlexComponent]
    });
    fixture = TestBed.createComponent(SqaureFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
