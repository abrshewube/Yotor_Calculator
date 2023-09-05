import { Component } from '@angular/core';

@Component({
  selector: 'app-gdp-calculator',
  templateUrl: './gdp-calculator.component.html',
  styleUrls: ['./gdp-calculator.component.css'], // Add your CSS file here
})
export class GdpCalculatorComponent {
  consumption: number = 0;
  investment: number = 0;
  government: number = 0;
  exports: number = 0;
  imports: number = 0;
  gdp: number | undefined;

  calculateGDP() {
    this.gdp =
      this.consumption + this.investment + this.government + (this.exports - this.imports);
  }
}
