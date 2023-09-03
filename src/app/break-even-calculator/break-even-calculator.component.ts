import { Component } from '@angular/core';

@Component({
  selector: 'app-break-even-calculator',
  templateUrl: './break-even-calculator.component.html',
  styleUrls: ['./break-even-calculator.component.css']
})
export class BreakEvenCalculatorComponent {
  fixedCosts: number=0;
  variableCostsPerUnit: number=0;
  sellingPricePerUnit: number=0;
  breakEvenPoint: number=0;

  calculateBreakEven(): void {
    this.breakEvenPoint = this.fixedCosts / (this.sellingPricePerUnit - this.variableCostsPerUnit);
  }
}
