import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-rate-calculator',
  templateUrl: './interest-rate-calculator.component.html',
  styleUrls: ['./interest-rate-calculator.component.css']
})
export class InterestRateCalculatorComponent {
  principal: number = 0;
  interest: number = 0;
  time: number = 0;
  result: number = 0;

  calculateInterest() {
    if (this.principal !== null && this.interest !== null && this.time !== null) {
      const rate = (this.interest / (this.principal * this.time)) * 100;
      this.result = this.principal + (this.principal * rate * this.time) / 100;
    } else {
      this.result =0;
    }
  }
}
