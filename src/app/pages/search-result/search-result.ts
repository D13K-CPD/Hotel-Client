import { Component } from '@angular/core';
import { StaysFormComponent } from '../../inner-items/options-component/stays-context-component/stays-form-component/stays-form-component';
import { HotelCard } from './inner/hotel-card/hotel-card';

@Component({
  selector: 'app-search-result',
  imports: [StaysFormComponent, HotelCard],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult {}
