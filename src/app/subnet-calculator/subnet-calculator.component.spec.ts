import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetCalculatorComponent } from './subnet-calculator.component';

describe('SubnetCalculatorComponent', () => {
  let component: SubnetCalculatorComponent;
  let fixture: ComponentFixture<SubnetCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubnetCalculatorComponent]
    });
    fixture = TestBed.createComponent(SubnetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
