import { Component } from '@angular/core';

@Component({
  selector: 'app-column-calculator',
  templateUrl: './column-calculator.component.html',
  styleUrls: ['./column-calculator.component.css']
})
export class ColumnCalculatorComponent {
  height: number=0;
  width: number=0;
  material: string = 'concrete';
  concreteStrength: number=0;
  steelStrength: number=0;
  axialLoadCapacity: number=0;

  calculateAxialLoadCapacity() {
    // Assuming axial load capacity is calculated based on dimensions and material properties
    // For concrete columns, axial load capacity = (0.85 * Concrete Strength * Column Area)
    // For steel columns, axial load capacity = (Steel Strength * Column Area)

    const columnArea = this.height * this.width;

    if (this.material === 'concrete' && this.concreteStrength) {
      this.axialLoadCapacity = 0.85 * this.concreteStrength * columnArea;
    } else if (this.material === 'steel' && this.steelStrength) {
      this.axialLoadCapacity = this.steelStrength * columnArea;
    } else {
      // Handle error if inputs are not provided
      this.axialLoadCapacity =0;
    }
  }
}
