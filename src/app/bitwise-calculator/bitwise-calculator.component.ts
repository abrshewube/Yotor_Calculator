import { Component } from '@angular/core';

@Component({
  selector: 'app-bitwise-calculator',
  templateUrl: './bitwise-calculator.component.html',
  styleUrls: ['./bitwise-calculator.component.css']
})
export class BitwiseCalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  performBitwiseAnd() {
    this.result = this.number1 & this.number2;
  }

  performBitwiseOr() {
    this.result = this.number1 | this.number2;
  }

  performBitwiseXor() {
    this.result = this.number1 ^ this.number2;
  }

  performBitwiseNot() {
    this.result = ~this.number1;
  }
}
