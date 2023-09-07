import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCountCalculatorComponent } from './character-count-calculator.component';

describe('CharacterCountCalculatorComponent', () => {
  let component: CharacterCountCalculatorComponent;
  let fixture: ComponentFixture<CharacterCountCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCountCalculatorComponent]
    });
    fixture = TestBed.createComponent(CharacterCountCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
