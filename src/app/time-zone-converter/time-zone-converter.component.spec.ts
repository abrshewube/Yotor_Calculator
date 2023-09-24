import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneConverterComponent } from './time-zone-converter.component';

describe('TimeZoneConverterComponent', () => {
  let component: TimeZoneConverterComponent;
  let fixture: ComponentFixture<TimeZoneConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeZoneConverterComponent]
    });
    fixture = TestBed.createComponent(TimeZoneConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
