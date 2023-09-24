import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateCalculatorComponentComponent } from './interest-rate-calculator.component.component';

describe('InterestRateCalculatorComponentComponent', () => {
  let component: InterestRateCalculatorComponentComponent;
  let fixture: ComponentFixture<InterestRateCalculatorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestRateCalculatorComponentComponent]
    });
    fixture = TestBed.createComponent(InterestRateCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
