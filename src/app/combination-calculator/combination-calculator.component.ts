import { Component } from '@angular/core';

@Component({
  selector: 'app-combination-calculator',
  templateUrl: './combination-calculator.component.html',
  styleUrls: ['./combination-calculator.component.css'],
})
export class CombinationCalculatorComponent {
  totalObjects: number | undefined;
  selectObjects: number | undefined;
  combinationResult: number | undefined;

  calculateCombination() {
    if (this.totalObjects !== undefined && this.selectObjects !== undefined) {
      this.combinationResult =
        this.factorial(this.totalObjects) / (this.factorial(this.selectObjects) * this.factorial(this.totalObjects - this.selectObjects));
    } else {
      this.combinationResult = undefined;
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
