import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralCalculatorComponent } from './integral-calculator.component';

describe('IntegralCalculatorComponent', () => {
  let component: IntegralCalculatorComponent;
  let fixture: ComponentFixture<IntegralCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegralCalculatorComponent]
    });
    fixture = TestBed.createComponent(IntegralCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
