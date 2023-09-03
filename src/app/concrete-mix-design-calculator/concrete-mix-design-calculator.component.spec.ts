import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteMixDesignCalculatorComponent } from './concrete-mix-design-calculator.component';

describe('ConcreteMixDesignCalculatorComponent', () => {
  let component: ConcreteMixDesignCalculatorComponent;
  let fixture: ComponentFixture<ConcreteMixDesignCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcreteMixDesignCalculatorComponent]
    });
    fixture = TestBed.createComponent(ConcreteMixDesignCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
