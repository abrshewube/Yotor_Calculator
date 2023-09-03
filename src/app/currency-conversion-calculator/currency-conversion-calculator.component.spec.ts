import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConversionCalculatorComponent } from './currency-conversion-calculator.component';

describe('CurrencyConversionCalculatorComponent', () => {
  let component: CurrencyConversionCalculatorComponent;
  let fixture: ComponentFixture<CurrencyConversionCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyConversionCalculatorComponent]
    });
    fixture = TestBed.createComponent(CurrencyConversionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
