import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportShuttleContextComponent } from './airport-shuttle-context-component';

describe('AirportShuttleContextComponent', () => {
  let component: AirportShuttleContextComponent;
  let fixture: ComponentFixture<AirportShuttleContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportShuttleContextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirportShuttleContextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
