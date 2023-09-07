import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCountCalculatorComponent } from './word-count-calculator.component';

describe('WordCountCalculatorComponent', () => {
  let component: WordCountCalculatorComponent;
  let fixture: ComponentFixture<WordCountCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordCountCalculatorComponent]
    });
    fixture = TestBed.createComponent(WordCountCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
