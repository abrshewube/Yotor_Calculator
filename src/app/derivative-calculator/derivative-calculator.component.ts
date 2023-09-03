// derivative-calculator.component.ts
import { Component } from '@angular/core';
import { derivative, parse } from 'mathjs';

@Component({
  selector: 'app-derivative-calculator',
  templateUrl: './derivative-calculator.component.html',
  styleUrls: ['./derivative-calculator.component.css']
})
export class DerivativeCalculatorComponent {
  expression: string = '';
  variable: string = 'x';
  result: string | null = null;

  calculateDerivative() {
    try {
      if (this.expression) {
        this.result = this.calculateDerivativeForExpression(this.expression);
      } else {
        this.result = null;
      }
    } catch (error) {
      this.result = 'Invalid expression';
    }
  }

  calculateDerivativeForExpression(expression: string): string {
    const node = parse(expression);
    const derivativeNode = derivative(node, this.variable);
    return derivativeNode.toString();
  }
}
