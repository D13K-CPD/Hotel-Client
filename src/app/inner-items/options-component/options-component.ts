import { Component } from '@angular/core';
import { MatTabsModule, MatTabLabel } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { StaysContextComponent } from '../options-component/stays-context-component/stays-context-component';
import { FlightContextComponent } from './flight-context-component/flight-context-component';
import { CarRentalsContextComponent } from './car-rentals-context-component/car-rentals-context-component';
import { ActivitiesContextComponent } from './activities-context-component/activities-context-component';
import { AirportShuttleContextComponent } from './airport-shuttle-context-component/airport-shuttle-context-component';

@Component({
  selector: 'app-options-component',
  imports: [
    MatTabsModule,
    MatTabLabel,
    MatIconModule,
    StaysContextComponent,
    FlightContextComponent,
    CarRentalsContextComponent,
    ActivitiesContextComponent,
    AirportShuttleContextComponent,
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss',
})
export class OptionsComponent {}
