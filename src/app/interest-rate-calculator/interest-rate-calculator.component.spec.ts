import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateCalculatorComponent } from './interest-rate-calculator.component';

describe('InterestRateCalculatorComponent', () => {
  let component: InterestRateCalculatorComponent;
  let fixture: ComponentFixture<InterestRateCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestRateCalculatorComponent]
    });
    fixture = TestBed.createComponent(InterestRateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
