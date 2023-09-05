import { Component } from '@angular/core';

@Component({
  selector: 'app-inflation-calculator',
  templateUrl: './inflation-calculator.component.html',
  styleUrls: ['./inflation-calculator.component.css']
})
export class InflationCalculatorComponent {
  initialAmount: number = 1000; // Initial amount in dollars
  inflationRate: number = 3; // Annual inflation rate in percentage
  years: number = 5; // Number of years
  adjustedAmount: number | null = null;

  calculateAdjustedAmount() {
    // Convert inflation rate to decimal
    const decimalInflationRate = this.inflationRate / 100;

    // Calculate adjusted amount using the formula
    this.adjustedAmount = this.initialAmount / Math.pow(1 + decimalInflationRate, this.years);
  }
}
