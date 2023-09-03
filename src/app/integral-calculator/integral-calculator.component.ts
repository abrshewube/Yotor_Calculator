// integral-calculator.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-integral-calculator',
  templateUrl: './integral-calculator.component.html',
  styleUrls: ['./integral-calculator.component.css']
})
export class IntegralCalculatorComponent {
  expression: string = '';
  variable: string = 'x';
  result: string | null = null;

  constructor(private http: HttpClient) {}

  calculateIntegral() {
    const data = {
      expression: this.expression,
      variable: this.variable
    };

    this.http.post<any>('http://localhost:5000/api/integrate', data).subscribe(
      (response) => {
        this.result = response.result;
      },
      (error) => {
        console.error('Error calculating integral:', error);
        this.result = 'Error: Unable to calculate integral';
      }
    );
  }
}
