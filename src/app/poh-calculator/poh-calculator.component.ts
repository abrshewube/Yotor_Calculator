import { Component } from '@angular/core';

@Component({
  selector: 'app-poh-calculator',
  templateUrl: './poh-calculator.component.html',
  styleUrls: ['./poh-calculator.component.css']
})
export class PohCalculatorComponent {
  hydroxideConcentration: string='';
  pohValue: number=0;

  calculatePOH() {
    const concentration = Number(this.hydroxideConcentration);

    if (isNaN(concentration)) {
      // Invalid input, handle the error if needed
      console.error('Invalid input');
      return;
    }

    this.pohValue = -Math.log10(concentration);
  }
}
