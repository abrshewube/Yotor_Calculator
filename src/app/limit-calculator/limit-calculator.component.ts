import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-limit-calculator',
  templateUrl: './limit-calculator.component.html',
  styleUrls: ['./limit-calculator.component.css']
})
export class LimitCalculatorComponent {
  expression: string = '';
  limitValue: number | null = null;
  limitResult: string = '';

  calculateLimit() {
    try {
      if (this.expression && this.limitValue !== null) {
        // Evaluate the limit
        const scope = { x: this.limitValue };
        const result = math.evaluate(this.expression, scope);
        this.limitResult = result.toString();
        console.log(this.limitResult)
      }
    } catch (error) {
      this.limitResult = 'Error: Invalid input or the limit does not exist.';
    }
  }
}
