import { Component } from '@angular/core';

@Component({
  selector: 'app-ph-calculator',
  templateUrl: './ph-calculator.component.html',
  styleUrls: ['./ph-calculator.component.css']
})
export class PhCalculatorComponent {
  hydrogenConcentration: number=0;
  phValue: number =0 ;

  calculatePH() {
    this.phValue = -Math.log10(this.hydrogenConcentration);
  }
}
