import { Component } from '@angular/core';

@Component({
  selector: 'app-stormwater-runoff-calculator',
  templateUrl: './stormwater-runoff-calculator.component.html',
  styleUrls: ['./stormwater-runoff-calculator.component.css']
})
export class StormwaterRunoffCalculatorComponent {
  area: number=0;
  runoffVolume: number=0;

  calculateRunoff() {
    // Assuming the runoff volume is calculated based on the area of the site
    // and other parameters related to the site's characteristics and rainfall

    // Sample logic to calculate runoff volume (not complete)
    // For demonstration purposes, we assume a fixed runoff coefficient of 0.6
    // and a fixed rainfall intensity of 100 mm/hour.
    const runoffCoefficient = 0.6;
    const rainfallIntensity = 100; // mm/hour

    // Convert rainfall intensity from mm/hour to meters/second
    const rainfallIntensityMetersPerSecond = rainfallIntensity / 3600;

    // Calculate runoff volume in cubic meters
    this.runoffVolume = (this.area * runoffCoefficient * rainfallIntensityMetersPerSecond);
  }
}
