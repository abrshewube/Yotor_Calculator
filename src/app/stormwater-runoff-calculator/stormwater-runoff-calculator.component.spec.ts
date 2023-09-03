import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormwaterRunoffCalculatorComponent } from './stormwater-runoff-calculator.component';

describe('StormwaterRunoffCalculatorComponent', () => {
  let component: StormwaterRunoffCalculatorComponent;
  let fixture: ComponentFixture<StormwaterRunoffCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StormwaterRunoffCalculatorComponent]
    });
    fixture = TestBed.createComponent(StormwaterRunoffCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
