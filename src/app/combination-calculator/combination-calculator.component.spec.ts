import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationCalculatorComponent } from './combination-calculator.component';

describe('CombinationCalculatorComponent', () => {
  let component: CombinationCalculatorComponent;
  let fixture: ComponentFixture<CombinationCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinationCalculatorComponent]
    });
    fixture = TestBed.createComponent(CombinationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
