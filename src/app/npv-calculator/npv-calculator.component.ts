import { Component } from '@angular/core';

@Component({
  selector: 'app-npv-calculator',
  templateUrl: './npv-calculator.component.html',
  styleUrls: ['./npv-calculator.component.css']
})
export class NpvCalculatorComponent {
  initialInvestment: number=0;
  cashFlows: number[] = [0];
  discountRate: number=0;
  npv: number=0;

  addCashFlow(): void {
    this.cashFlows.push(0);
  }

  removeCashFlow(index: number): void {
    this.cashFlows.splice(index, 1);
    this.calculateNpv();
  }

  calculateNpv(): void {
    let presentValue = -this.initialInvestment;
    for (let i = 0; i < this.cashFlows.length; i++) {
      presentValue += this.cashFlows[i] / Math.pow(1 + this.discountRate, i + 1);
    }
    this.npv = presentValue;
  }
}
