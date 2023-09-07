import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  number: string = '';
  sourceBase: string = 'binary';
  targetBase: string = 'decimal';
  result: string | null = null;

  convert() {
    if (this.number.trim() === '') {
      this.result = 'Please enter a valid number.';
      return;
    }

    try {
      let num: number=0;

      if (this.sourceBase === 'binary') {
        num = parseInt(this.number, 2);
      } else if (this.sourceBase === 'decimal') {
        num = parseInt(this.number, 10);
      } else if (this.sourceBase === 'hexadecimal') {
        num = parseInt(this.number, 16);
      }

      if (this.targetBase === 'binary') {
        this.result = num.toString(2);
      } else if (this.targetBase === 'decimal') {
        this.result = num.toString(10);
      } else if (this.targetBase === 'hexadecimal') {
        this.result = num.toString(16).toUpperCase();
      }
    } catch (error) {
      this.result = 'Invalid number or base selection.';
    }
  }
}
