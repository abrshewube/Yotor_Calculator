import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationCalculatorComponent } from './permutation-calculator.component';

describe('PermutationCalculatorComponent', () => {
  let component: PermutationCalculatorComponent;
  let fixture: ComponentFixture<PermutationCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermutationCalculatorComponent]
    });
    fixture = TestBed.createComponent(PermutationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
