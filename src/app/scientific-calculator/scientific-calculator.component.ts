import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.component.html',
  styleUrls: ['./scientific-calculator.component.css'],
})
export class ScientificCalculatorComponent {
  expression = '';
  degreeMode: boolean = true; // Default to degree mode


  appendToExpression(value: string) {
    this.expression += value;
  }

  calculate() {
    try {
      this.expression = math.evaluate(this.expression);
    } catch (error) {
      this.expression = 'Error';
    }
  }

  clear() {
    this.expression = '';
  }

  // New methods for handling buttons
  addDigit(digit: string) {
    this.appendToExpression(digit);
  }

  addOperator(operator: string) {
    this.appendToExpression(operator);
  }

  addTrigFunction(func: string) {
    this.appendToExpression(func + '(');
  }

  

  addSquareRoot() {
    this.appendToExpression('sqrt(');
  }

  addSquare() {
    this.appendToExpression('^2');
  }

  addCubeRoot() {
    this.appendToExpression('cbrt(');
  }

  addCube() {
    this.appendToExpression('^3');
  }

  addExponentiation() {
    this.appendToExpression('^');
  }

  addLogarithm() {
    this.appendToExpression('log(');
  }

  addDecimal() {
    this.appendToExpression('.');
  }

  addParenthesesOpen() {
    this.appendToExpression('(');
  }

  addParenthesesClose() {
    this.appendToExpression(')');
  }

  addPi() {
    this.appendToExpression('pi');
  }

  addExponential() {
    this.appendToExpression('exp(');
  }

  addFactorial() {
    this.appendToExpression('!');
  }

  addModulus() {
    this.appendToExpression('%');
  }

  addAbsoluteValue() {
    this.appendToExpression('abs(');
  }

  addArcsin() {
    this.appendToExpression('asin(');
  }
  
  addArccos() {
    this.appendToExpression('acos(');
  }
  
  addArctan() {
    this.appendToExpression('atan(');
  }
}