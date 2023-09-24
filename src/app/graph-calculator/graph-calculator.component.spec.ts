import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCalculatorComponent } from './graph-calculator.component';

describe('GraphCalculatorComponent', () => {
  let component: GraphCalculatorComponent;
  let fixture: ComponentFixture<GraphCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphCalculatorComponent]
    });
    fixture = TestBed.createComponent(GraphCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
