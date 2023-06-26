import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-sum',
  templateUrl: './test-sum.component.html',
  styleUrls: ['./test-sum.component.scss']
})
export class TestSumComponent {
  title = 'ReactiveForms';
  bmi = 0;
  info = '';

  weightForm = new FormControl(30, Validators.required);
  heightForm = new FormControl(1.4, Validators.required);

  constructor() {}

  // A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.

  calculate() {
    if (this.weightForm.invalid || this.heightForm.invalid) {
      return;
    }
    const weight = this.weightForm.value;
    const height = this.heightForm.value;

    if (weight === null || height === null) {
      return;
    }

    this.bmi = weight / height ** 2;
  }
}
