import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-factoring-calculator',
  templateUrl: './factoring-calculator.component.html',
  styleUrls: ['./factoring-calculator.component.css']
})
export class FactoringCalculatorComponent {
  polynomialInput: string = '';
  factoredEquation: string | null = null;

  factor() {
    try {
      this.factoredEquation = this.getFactoredEquation(this.polynomialInput);
    } catch (error) {
      this.factoredEquation = null;
      alert('Error: Invalid input. Please enter a valid polynomial equation.');
    }
  }

  private getFactoredEquation(polynomial: string): string {
    // Clean up the input by removing whitespaces and replacing 'x' with '*x'
    polynomial = polynomial.replace(/\s/g, '').replace(/x/g, '*x');

    // Use the rational root theorem to find possible rational roots
    const possibleRoots = this.findRationalRoots(polynomial);

    // Try each possible root using synthetic division
    let factoredExpression = polynomial;
    for (const root of possibleRoots) {
      factoredExpression = this.syntheticDivision(factoredExpression, root);
    }

    // Return the factored equation as a string
    return factoredExpression;
  }

  private findRationalRoots(polynomial: string): number[] {
    // The rational root theorem states that possible rational roots are divisors
    // of the constant term divided by divisors of the leading coefficient.
    const constantTerm = math.evaluate(polynomial, { x: 0 });
    const leadingCoefficient = math.evaluate(`d/dx(${polynomial})`, { x: 0 });

    const roots: number[] = [];
    for (let i = 1; i <= Math.abs(constantTerm); i++) {
      if (constantTerm % i === 0) {
        roots.push(i, -i);
      }
    }
    for (let i = 1; i <= Math.abs(leadingCoefficient); i++) {
      if (leadingCoefficient % i === 0 && !roots.includes(i, -i)) {
        roots.push(i, -i);
      }
    }

    return roots;
  }

  private syntheticDivision(polynomial: string, root: number): string {
    // Synthetic division reduces the degree of the polynomial by one
    // and finds the quotient of division.
    const coefficients = this.getCoefficients(polynomial);
    let remainder = 0;
    let quotient = '';

    for (let i = 0; i < coefficients.length; i++) {
      remainder = coefficients[i] + remainder * root;
      if (i === 0) {
        quotient += coefficients[i];
      } else {
        quotient += (coefficients[i] >= 0 ? ' + ' : ' - ') + Math.abs(coefficients[i]);
      }
    }

    return quotient;
  }

  private getCoefficients(polynomial: string): number[] {
    // Extract coefficients from the polynomial expression.
    // For example, for '3x^2 + 4x - 6', return [3, 4, -6]
    const regex = /([+\-]?\d*)(?:\*x\^(\d+))?/g;
    let match;
    const coefficients: number[] = [];
    while ((match = regex.exec(polynomial)) !== null) {
      const coefficient = match[1] !== '' ? parseFloat(match[1]) : 1;
      const exponent = match[2] !== undefined ? parseInt(match[2], 10) : 0;
      coefficients[exponent] = coefficient;
    }
    return coefficients.reverse();
  }
}
