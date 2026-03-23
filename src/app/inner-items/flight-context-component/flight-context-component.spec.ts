import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightContextComponent } from './flight-context-component';

describe('FlightContextComponent', () => {
  let component: FlightContextComponent;
  let fixture: ComponentFixture<FlightContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightContextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightContextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
