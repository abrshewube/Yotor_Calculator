import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCalculatorComponent } from './column-calculator.component';

describe('ColumnCalculatorComponent', () => {
  let component: ColumnCalculatorComponent;
  let fixture: ComponentFixture<ColumnCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnCalculatorComponent]
    });
    fixture = TestBed.createComponent(ColumnCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
