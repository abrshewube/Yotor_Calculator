import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyDueDateCalculatorComponent } from './pregnancy-due-date-calculator.component';

describe('PregnancyDueDateCalculatorComponent', () => {
  let component: PregnancyDueDateCalculatorComponent;
  let fixture: ComponentFixture<PregnancyDueDateCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PregnancyDueDateCalculatorComponent]
    });
    fixture = TestBed.createComponent(PregnancyDueDateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
