import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MapView } from '../map-view/map-view';

@Component({
  selector: 'app-hotel-card',
  imports: [MatButtonModule],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss',
})
export class HotelCard {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(MapView, {
      width: '1000px',
      height: '600px',
      data: {},
      disableClose: true,
    });
  }
}
