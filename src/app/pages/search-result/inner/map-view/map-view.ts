import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, GoogleMapsModule],
  templateUrl: './map-view.html',
  styleUrls: ['./map-view.scss'],
})
export class MapView implements OnChanges, AfterViewInit {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  @Input() hotelLocation: { latitude: number; longitude: number; title?: string }[] = [
    { latitude: 37.7749, longitude: -122.4194, title: 'Hotel A' },
  ];

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: any;

  ngAfterViewInit(): void {
    if (this.hotelLocation.length > 0) {
      const mapOptions = {
        center: new google.maps.LatLng(
          this.hotelLocation[0].latitude,
          this.hotelLocation[0].longitude,
        ),
        zoom: 12,
      };
      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

      this.hotelLocation.forEach((location) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(location.latitude, location.longitude),
          map: this.map,
          title: location.title || 'Hotel Location',
        });
      });
    }
  }
}
