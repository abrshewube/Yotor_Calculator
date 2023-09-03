import { Component } from '@angular/core';

@Component({
  selector: 'app-permutation-calculator',
  templateUrl: './permutation-calculator.component.html',
  styleUrls: ['./permutation-calculator.component.css'],
})
export class PermutationCalculatorComponent {
  totalObjects: number | undefined;
  arrangeObjects: number | undefined;
  permutationResult: number | undefined;

  calculatePermutation() {
    if (this.totalObjects !== undefined && this.arrangeObjects !== undefined) {
      this.permutationResult = this.factorial(this.totalObjects) / this.factorial(this.totalObjects - this.arrangeObjects);
    } else {
      this.permutationResult = undefined;
    }
  }

  factorial(num: number): number {
    if (num <= 1) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }
}
