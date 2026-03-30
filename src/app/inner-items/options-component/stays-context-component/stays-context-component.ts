import { Component } from '@angular/core';
import { StaysFormComponent } from '../stays-context-component/stays-form-component/stays-form-component';
import { OffersComponent } from './offers-component/offers-component';
import { TrendingDestinations } from './trending-destinations/trending-destinations';

@Component({
  selector: 'app-stays-context-component',
  imports: [StaysFormComponent, OffersComponent, TrendingDestinations],
  templateUrl: './stays-context-component.html',
  styleUrl: './stays-context-component.scss',
})
export class StaysContextComponent {}
