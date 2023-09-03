import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitCalculatorComponent } from './limit-calculator.component';

describe('LimitCalculatorComponent', () => {
  let component: LimitCalculatorComponent;
  let fixture: ComponentFixture<LimitCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitCalculatorComponent]
    });
    fixture = TestBed.createComponent(LimitCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
