import { Component } from '@angular/core';

interface LoanSchedule {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

@Component({
  selector: 'app-loan-amortization-calculator',
  templateUrl: './loan-amortization-calculator.component.html',
  styleUrls: ['./loan-amortization-calculator.component.css']
})
export class LoanAmortizationCalculatorComponent {
  loanAmount: number=0;
  interestRate: number=0;
  loanTerm: number=0;
  monthlyPayment: number=0;
  totalInterestPaid: number=0;
  loanSchedule: LoanSchedule[] = [];

  calculateAmortization(): void {
    const monthlyInterestRate = this.interestRate / 100 / 12;
    this.monthlyPayment =
      (this.loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -this.loanTerm));

    this.totalInterestPaid = 0;
    this.loanSchedule = [];

    let balance = this.loanAmount;
    for (let month = 1; month <= this.loanTerm; month++) {
      const interest = balance * monthlyInterestRate;
      const principal = this.monthlyPayment - interest;
      balance -= principal;
      this.totalInterestPaid += interest;

      this.loanSchedule.push({
        month,
        payment: this.monthlyPayment,
        principal,
        interest,
        balance
      });
    }
  }
}
