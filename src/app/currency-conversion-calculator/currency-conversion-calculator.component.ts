import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-conversion-calculator',
  templateUrl: './currency-conversion-calculator.component.html',
  styleUrls: ['./currency-conversion-calculator.component.css']
})
export class CurrencyConversionCalculatorComponent {
  amount: number=0;
  sourceCurrency: string='';
  targetCurrency: string='';
  convertedAmount: number=0;

  constructor(private http: HttpClient) {}

  convertCurrency(): void {
    if (this.amount && this.sourceCurrency && this.targetCurrency) {
      const apiEndpoint = `https://api.exchangeratesapi.io/latest?base=${this.sourceCurrency}`;
      
      this.http.get(apiEndpoint).subscribe((data: any) => {
        const exchangeRate = data.rates[this.targetCurrency];
        this.convertedAmount = this.amount * exchangeRate;
      });
    }
  }
}
