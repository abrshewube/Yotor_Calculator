import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentReturnCalculatorComponent } from './investment-return-calculator.component';

describe('InvestmentReturnCalculatorComponent', () => {
  let component: InvestmentReturnCalculatorComponent;
  let fixture: ComponentFixture<InvestmentReturnCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentReturnCalculatorComponent]
    });
    fixture = TestBed.createComponent(InvestmentReturnCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
