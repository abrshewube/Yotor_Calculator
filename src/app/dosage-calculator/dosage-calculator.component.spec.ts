import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosageCalculatorComponent } from './dosage-calculator.component';

describe('DosageCalculatorComponent', () => {
  let component: DosageCalculatorComponent;
  let fixture: ComponentFixture<DosageCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosageCalculatorComponent]
    });
    fixture = TestBed.createComponent(DosageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
