import { Component } from '@angular/core';

@Component({
  selector: 'app-time-conversion',
  templateUrl: './time-conversion.component.html',
  styleUrls: ['./time-conversion.component.css']
})
export class TimeConversionComponent {
  inputValue: number=0;
  selectedFromUnit: string = 'seconds';
  selectedToUnit: string = 'seconds';
  result: number=0;

  convert() {
    if (this.selectedFromUnit === 'seconds' && this.selectedToUnit === 'minutes') {
      this.result = this.inputValue / 60;
    } else if (this.selectedFromUnit === 'seconds' && this.selectedToUnit === 'hours') {
      this.result = this.inputValue / 3600;
    } else if (this.selectedFromUnit === 'minutes' && this.selectedToUnit === 'seconds') {
      this.result = this.inputValue * 60;
    } else if (this.selectedFromUnit === 'minutes' && this.selectedToUnit === 'hours') {
      this.result = this.inputValue / 60;
    } else if (this.selectedFromUnit === 'hours' && this.selectedToUnit === 'seconds') {
      this.result = this.inputValue * 3600;
    } else if (this.selectedFromUnit === 'hours' && this.selectedToUnit === 'minutes') {
      this.result = this.inputValue * 60;
    } else {
      // If both units are the same, no conversion needed
      this.result = this.inputValue;
    }
  }
}
