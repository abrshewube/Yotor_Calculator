import { Component } from '@angular/core';

@Component({
  selector: 'app-hydrology-calculator',
  templateUrl: './hydrology-calculator.component.html',
  styleUrls: ['./hydrology-calculator.component.css']
})
export class HydrologyCalculatorComponent {
  rainfallIntensity: number=0;
  drainageArea: number=0;
  flowRate: number=0;

  calculateFlowRate() {
    // Sample calculation for the design flow rate based on the rainfall intensity
    // and drainage area. For demonstration purposes, we assume a fixed flow coefficient of 0.8.

    // Convert rainfall intensity from mm/hour to meters/second
    const rainfallIntensityMetersPerSecond = this.rainfallIntensity / 3600;

    // Calculate design flow rate in cubic meters per second
    const flowCoefficient = 0.8;
    this.flowRate = this.drainageArea * rainfallIntensityMetersPerSecond * flowCoefficient;
  }
}
