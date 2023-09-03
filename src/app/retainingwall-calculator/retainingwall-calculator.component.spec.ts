import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetainingwallCalculatorComponent } from './retainingwall-calculator.component';

describe('RetainingwallCalculatorComponent', () => {
  let component: RetainingwallCalculatorComponent;
  let fixture: ComponentFixture<RetainingwallCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetainingwallCalculatorComponent]
    });
    fixture = TestBed.createComponent(RetainingwallCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
