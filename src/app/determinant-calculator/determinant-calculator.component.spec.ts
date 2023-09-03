import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminantCalculatorComponent } from './determinant-calculator.component';

describe('DeterminantCalculatorComponent', () => {
  let component: DeterminantCalculatorComponent;
  let fixture: ComponentFixture<DeterminantCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeterminantCalculatorComponent]
    });
    fixture = TestBed.createComponent(DeterminantCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
