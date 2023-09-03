import { Component } from '@angular/core';

@Component({
  selector: 'app-inflation-calculator',
  templateUrl: './inflation-calculator.component.html',
  styleUrls: ['./inflation-calculator.component.css']
})
export class InflationCalculatorComponent {
  initialAmount: number;
  inflationRate: number;
  years: number;
  adjustedAmount: number;

  calculateAdjustedAmount(): void {
    const adjustedAmount = this.initialAmount / Math.pow(1 + this.inflationRate / 100, this.years);
    this.adjustedAmount = parseFloat(adjustedAmount.toFixed(2));
  }
}
