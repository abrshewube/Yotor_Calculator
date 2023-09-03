import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamCalculatorComponent } from './beam-calculator.component';

describe('BeamCalculatorComponent', () => {
  let component: BeamCalculatorComponent;
  let fixture: ComponentFixture<BeamCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeamCalculatorComponent]
    });
    fixture = TestBed.createComponent(BeamCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
