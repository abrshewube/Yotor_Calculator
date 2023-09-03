import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCalculatorComponent } from './conversion-calculator.component';

describe('ConversionCalculatorComponent', () => {
  let component: ConversionCalculatorComponent;
  let fixture: ComponentFixture<ConversionCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionCalculatorComponent]
    });
    fixture = TestBed.createComponent(ConversionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
