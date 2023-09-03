import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalEquationCalculatorComponent } from './chemical-equation-calculator.component';

describe('ChemicalEquationCalculatorComponent', () => {
  let component: ChemicalEquationCalculatorComponent;
  let fixture: ComponentFixture<ChemicalEquationCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemicalEquationCalculatorComponent]
    });
    fixture = TestBed.createComponent(ChemicalEquationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
