import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrologyCalculatorComponent } from './hydrology-calculator.component';

describe('HydrologyCalculatorComponent', () => {
  let component: HydrologyCalculatorComponent;
  let fixture: ComponentFixture<HydrologyCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HydrologyCalculatorComponent]
    });
    fixture = TestBed.createComponent(HydrologyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
