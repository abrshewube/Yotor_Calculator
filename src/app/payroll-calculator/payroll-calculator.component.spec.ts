import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCalculatorComponent } from './payroll-calculator.component';

describe('PayrollCalculatorComponent', () => {
  let component: PayrollCalculatorComponent;
  let fixture: ComponentFixture<PayrollCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollCalculatorComponent]
    });
    fixture = TestBed.createComponent(PayrollCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
