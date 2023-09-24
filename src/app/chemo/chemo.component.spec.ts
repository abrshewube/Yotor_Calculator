import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemoComponent } from './chemo.component';

describe('ChemoComponent', () => {
  let component: ChemoComponent;
  let fixture: ComponentFixture<ChemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemoComponent]
    });
    fixture = TestBed.createComponent(ChemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
