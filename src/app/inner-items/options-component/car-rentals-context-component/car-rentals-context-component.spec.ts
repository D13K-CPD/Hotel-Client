import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalsContextComponent } from './car-rentals-context-component';

describe('CarRentalsContextComponent', () => {
  let component: CarRentalsContextComponent;
  let fixture: ComponentFixture<CarRentalsContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalsContextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarRentalsContextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
