import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConversionComponent } from './length-conversion.component';

describe('LengthConversionComponent', () => {
  let component: LengthConversionComponent;
  let fixture: ComponentFixture<LengthConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LengthConversionComponent]
    });
    fixture = TestBed.createComponent(LengthConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
