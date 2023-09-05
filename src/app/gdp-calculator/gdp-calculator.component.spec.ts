import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdpCalculatorComponent } from './gdp-calculator.component';

describe('GdpCalculatorComponent', () => {
  let component: GdpCalculatorComponent;
  let fixture: ComponentFixture<GdpCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdpCalculatorComponent]
    });
    fixture = TestBed.createComponent(GdpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
