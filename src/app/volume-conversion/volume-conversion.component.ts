import { Component } from '@angular/core';

@Component({
  selector: 'app-volume-conversion',
  templateUrl: './volume-conversion.component.html',
  styleUrls: ['./volume-conversion.component.css']
})
export class VolumeConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'liters';
  selectedToUnit: string = 'liters';
  result: number=0;

  conversionFactors: { [key: string]: { [key: string]: number } } = {
    liters: {
      liters: 1,
      gallons: 0.264172,
      'cubic-feet': 0.0353147
    },
    gallons: {
      liters: 3.78541,
      gallons: 1,
      'cubic-feet': 0.133681
    },
    'cubic-feet': {
      liters: 28.3168,
      gallons: 7.48052,
      'cubic-feet': 1
    }
  };

  convert() {
    this.result = this.inputValue * this.conversionFactors[this.selectedFromUnit][this.selectedToUnit];
  }
}
