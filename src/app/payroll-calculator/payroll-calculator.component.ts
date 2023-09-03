import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.css']
})
export class PayrollCalculatorComponent {
  hourlyRate: number=0;
  hoursWorked: number=0;
  deductions: number=0;
  grossPay: number=0;
  taxes: number=0;
  netPay: number=0;

  calculatePayroll(): void {
    this.grossPay = this.hourlyRate * this.hoursWorked;
    this.taxes = this.calculateTaxes(this.grossPay);
    this.netPay = this.grossPay - this.deductions - this.taxes;
  }

  private calculateTaxes(grossPay: number): number {
    // Your tax calculation logic goes here (e.g., use tax brackets, rates, etc.)
    // For simplicity, let's assume a flat tax rate of 20% on the gross pay
    return 0.2 * grossPay;
  }
}
