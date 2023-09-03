import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoringCalculatorComponent } from './factoring-calculator.component';

describe('FactoringCalculatorComponent', () => {
  let component: FactoringCalculatorComponent;
  let fixture: ComponentFixture<FactoringCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoringCalculatorComponent]
    });
    fixture = TestBed.createComponent(FactoringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
