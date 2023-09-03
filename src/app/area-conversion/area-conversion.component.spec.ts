import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConversionComponent } from './area-conversion.component';

describe('AreaConversionComponent', () => {
  let component: AreaConversionComponent;
  let fixture: ComponentFixture<AreaConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaConversionComponent]
    });
    fixture = TestBed.createComponent(AreaConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
