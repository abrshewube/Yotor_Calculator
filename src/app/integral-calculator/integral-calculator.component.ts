import { Component } from '@angular/core';
import * as nerdamer from 'nerdamer';
import 'nerdamer/Algebra';
import 'nerdamer/Calculus';

@Component({
  selector: 'app-integral-calculator',
  templateUrl: './integral-calculator.component.html',
  styleUrls: ['./integral-calculator.component.css']
})
export class IntegralCalculatorComponent {
  inputFunction: string = '';
  result: any;

  calculateIntegral() {
    try {
      // Parse and evaluate the input function.
      const integralResult = nerdamer.integrate(this.inputFunction, 'x').toString();

      this.result = integralResult;
    } catch (error) {
      console.error('Error calculating integral:', error);
      this.result = 'Error';
    }
  }
}
