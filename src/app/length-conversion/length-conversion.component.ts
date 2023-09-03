import { Component } from '@angular/core';

@Component({
  selector: 'app-length-conversion',
  templateUrl: './length-conversion.component.html',
  styleUrls: ['./length-conversion.component.css']
})
export class LengthConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'meters';
  selectedToUnit: string = 'meters';
  result: number=0;

  convert() {
    const conversionFactors: { [key: string]: { [key: string]: number } } = {
      meters: {
        meters: 1,
        feet: 3.28084,
        inches: 39.3701
      },
      feet: {
        meters: 0.3048,
        feet: 1,
        inches: 12
      },
      inches: {
        meters: 0.0254,
        feet: 0.0833333,
        inches: 1
      }
    };

    this.result = this.inputValue * conversionFactors[this.selectedFromUnit][this.selectedToUnit];
  }
}
