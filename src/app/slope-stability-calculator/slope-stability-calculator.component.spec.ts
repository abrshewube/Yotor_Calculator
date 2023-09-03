import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopeStabilityCalculatorComponent } from './slope-stability-calculator.component';

describe('SlopeStabilityCalculatorComponent', () => {
  let component: SlopeStabilityCalculatorComponent;
  let fixture: ComponentFixture<SlopeStabilityCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlopeStabilityCalculatorComponent]
    });
    fixture = TestBed.createComponent(SlopeStabilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
