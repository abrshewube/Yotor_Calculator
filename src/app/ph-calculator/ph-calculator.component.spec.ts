import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhCalculatorComponent } from './ph-calculator.component';

describe('PhCalculatorComponent', () => {
  let component: PhCalculatorComponent;
  let fixture: ComponentFixture<PhCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhCalculatorComponent]
    });
    fixture = TestBed.createComponent(PhCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
