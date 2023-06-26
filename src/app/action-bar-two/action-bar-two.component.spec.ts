import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarTwoComponent } from './action-bar-two.component';

describe('ActionBarTwoComponent', () => {
  let component: ActionBarTwoComponent;
  let fixture: ComponentFixture<ActionBarTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionBarTwoComponent]
    });
    fixture = TestBed.createComponent(ActionBarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
