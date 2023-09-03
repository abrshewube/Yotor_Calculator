import { Component } from '@angular/core';

@Component({
  selector: 'app-beam-calculator',
  templateUrl: './beam-calculator.component.html',
  styleUrls: ['./beam-calculator.component.css']
})
export class BeamCalculatorComponent {
  length: number=0;
  load: number=0;
  bendingMoment: number=0;
  shearForce: number=0;

  calculateBendingMomentAndShearForce() {
    // Assuming simple supported beam
    // Bending Moment = (Load * Length) / 4
    // Shear Force = Load / 2

    if (this.length && this.load) {
      this.bendingMoment = (this.load * this.length) / 4;
      this.shearForce = this.load / 2;
    } else {
      // Handle error if inputs are not provided
      this.bendingMoment = 0;
      this.shearForce = 0;
    }
  }
}
