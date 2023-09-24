import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitwiseCalculatorComponent } from './bitwise-calculator.component';

describe('BitwiseCalculatorComponent', () => {
  let component: BitwiseCalculatorComponent;
  let fixture: ComponentFixture<BitwiseCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitwiseCalculatorComponent]
    });
    fixture = TestBed.createComponent(BitwiseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
