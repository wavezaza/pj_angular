import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSumComponent } from './test-sum.component';

describe('TestSumComponent', () => {
  let component: TestSumComponent;
  let fixture: ComponentFixture<TestSumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSumComponent]
    });
    fixture = TestBed.createComponent(TestSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
