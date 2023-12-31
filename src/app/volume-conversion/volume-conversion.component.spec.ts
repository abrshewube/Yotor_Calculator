import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeConversionComponent } from './volume-conversion.component';

describe('VolumeConversionComponent', () => {
  let component: VolumeConversionComponent;
  let fixture: ComponentFixture<VolumeConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeConversionComponent]
    });
    fixture = TestBed.createComponent(VolumeConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
