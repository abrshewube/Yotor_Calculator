import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverseCalculatorComponent } from './inverse-calculator.component';

describe('InverseCalculatorComponent', () => {
  let component: InverseCalculatorComponent;
  let fixture: ComponentFixture<InverseCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InverseCalculatorComponent]
    });
    fixture = TestBed.createComponent(InverseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
