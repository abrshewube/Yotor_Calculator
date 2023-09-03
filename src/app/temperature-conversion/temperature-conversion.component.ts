import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-conversion',
  templateUrl: './temperature-conversion.component.html',
  styleUrls: ['./temperature-conversion.component.css']
})
export class TemperatureConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'celsius';
  selectedToUnit: string = 'celsius';
  result: number=0;

  convert() {
    if (this.selectedFromUnit === 'celsius' && this.selectedToUnit === 'fahrenheit') {
      this.result = (this.inputValue * 9/5) + 32;
    } else if (this.selectedFromUnit === 'celsius' && this.selectedToUnit === 'kelvin') {
      this.result = this.inputValue + 273.15;
    } else if (this.selectedFromUnit === 'fahrenheit' && this.selectedToUnit === 'celsius') {
      this.result = (this.inputValue - 32) * 5/9;
    } else if (this.selectedFromUnit === 'fahrenheit' && this.selectedToUnit === 'kelvin') {
      this.result = (this.inputValue - 32) * 5/9 + 273.15;
    } else if (this.selectedFromUnit === 'kelvin' && this.selectedToUnit === 'celsius') {
      this.result = this.inputValue - 273.15;
    } else if (this.selectedFromUnit === 'kelvin' && this.selectedToUnit === 'fahrenheit') {
      this.result = (this.inputValue - 273.15) * 9/5 + 32;
    } else {
      // If both units are the same, no conversion needed
      this.result = this.inputValue;
    }
  }
}
