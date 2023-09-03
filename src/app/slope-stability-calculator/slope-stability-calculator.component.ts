import { Component } from '@angular/core';

@Component({
  selector: 'app-slope-stability-calculator',
  templateUrl: './slope-stability-calculator.component.html',
  styleUrls: ['./slope-stability-calculator.component.css']
})
export class SlopeStabilityCalculatorComponent {
  slopeAngle: number=0;
  soilType: string = 'clay';
  cohesion: number=0;
  angleOfFriction: number=0;
  stabilityResult: string='';

  evaluateStability() {
    // Assuming slope stability is evaluated based on slope angle, soil properties, and cohesion
    // Slope stability evaluation may involve calculating factor of safety

    // Sample logic to evaluate slope stability based on inputs (not complete)
    const factorOfSafety = this.cohesion / Math.tan(this.angleOfFriction * Math.PI / 180);
    if (factorOfSafety > 1.5) {
      this.stabilityResult = 'Stable';
    } else {
      this.stabilityResult = 'Unstable';
    }
  }
}
