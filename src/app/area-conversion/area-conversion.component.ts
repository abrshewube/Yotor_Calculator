import { Component } from '@angular/core';

@Component({
  selector: 'app-area-conversion',
  templateUrl: './area-conversion.component.html',
  styleUrls: ['./area-conversion.component.css']
})
export class AreaConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'square-meters';
  selectedToUnit: string = 'square-meters';
  result: number=0;

  conversionFactors: { [key: string]: { [key: string]: number } } = {
    'square-meters': {
      'square-meters': 1,
      'square-feet': 10.7639,
      acres: 0.000247105
    },
    'square-feet': {
      'square-meters': 0.092903,
      'square-feet': 1,
      acres: 0.0000229568
    },
    acres: {
      'square-meters': 4046.86,
      'square-feet': 43560,
      acres: 1
    }
  };

  convert() {
    this.result = this.inputValue * this.conversionFactors[this.selectedFromUnit][this.selectedToUnit];
  }
}
