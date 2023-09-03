import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakEvenCalculatorComponent } from './break-even-calculator.component';

describe('BreakEvenCalculatorComponent', () => {
  let component: BreakEvenCalculatorComponent;
  let fixture: ComponentFixture<BreakEvenCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakEvenCalculatorComponent]
    });
    fixture = TestBed.createComponent(BreakEvenCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
