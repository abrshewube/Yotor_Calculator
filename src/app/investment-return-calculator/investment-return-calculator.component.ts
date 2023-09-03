import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-return-calculator',
  templateUrl: './investment-return-calculator.component.html',
  styleUrls: ['./investment-return-calculator.component.css']
})
export class InvestmentReturnCalculatorComponent {
  initialInvestment: number=0;
  annualInterestRate: number=0;
  investmentDuration: number=0;
  futureValue: number=0;
  totalReturn: number=0;

  calculateReturn(): void {
    const annualInterest = 1 + this.annualInterestRate / 100;
    this.futureValue = this.initialInvestment * Math.pow(annualInterest, this.investmentDuration);
    this.totalReturn = this.futureValue - this.initialInvestment;
  }
}
