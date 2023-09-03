import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  principal: number | null = null;
  interestRate: number | null = null;
  loanTerm: number | null = null;
  monthlyPayment: number | null = null;

  calculateMonthlyPayment() {
    try {
      if (this.principal && this.interestRate && this.loanTerm) {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const totalPayments = this.loanTerm * 12;
        const compoundInterest = Math.pow(1 + monthlyInterestRate, totalPayments);
        const monthlyPayment = (this.principal * monthlyInterestRate * compoundInterest) / (compoundInterest - 1);
        this.monthlyPayment = Math.round(monthlyPayment * 100) / 100;
      }
    } catch (error) {
      this.resetResults();
    }
  }

  resetResults() {
    this.monthlyPayment = null;
  }
}
