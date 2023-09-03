import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PohCalculatorComponent } from './poh-calculator.component';

describe('PohCalculatorComponent', () => {
  let component: PohCalculatorComponent;
  let fixture: ComponentFixture<PohCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PohCalculatorComponent]
    });
    fixture = TestBed.createComponent(PohCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
