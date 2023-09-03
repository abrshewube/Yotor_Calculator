import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-conversion',
  templateUrl: './weight-conversion.component.html',
  styleUrls: ['./weight-conversion.component.css']
})
export class WeightConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'kilograms';
  selectedToUnit: string = 'kilograms';
  result: number=0;

  conversionFactors: { [key: string]: { [key: string]: number } } = {
    kilograms: {
      kilograms: 1,
      pounds: 2.20462,
      ounces: 35.27396
    },
    pounds: {
      kilograms: 0.453592,
      pounds: 1,
      ounces: 16
    },
    ounces: {
      kilograms: 0.0283495,
      pounds: 0.0625,
      ounces: 1
    }
  };

  convert() {
    this.result = this.inputValue * this.conversionFactors[this.selectedFromUnit][this.selectedToUnit];
  }
}
