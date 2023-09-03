import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeCalculatorComponent } from './derivative-calculator.component';

describe('DerivativeCalculatorComponent', () => {
  let component: DerivativeCalculatorComponent;
  let fixture: ComponentFixture<DerivativeCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerivativeCalculatorComponent]
    });
    fixture = TestBed.createComponent(DerivativeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
