import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveStatisticsCalculatorComponent } from './descriptive-statistics-calculator.component';

describe('DescriptiveStatisticsCalculatorComponent', () => {
  let component: DescriptiveStatisticsCalculatorComponent;
  let fixture: ComponentFixture<DescriptiveStatisticsCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptiveStatisticsCalculatorComponent]
    });
    fixture = TestBed.createComponent(DescriptiveStatisticsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
