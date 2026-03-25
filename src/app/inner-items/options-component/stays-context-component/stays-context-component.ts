import { Component } from '@angular/core';
import { StaysFormComponent } from '../stays-context-component/stays-form-component/stays-form-component';
import { OffersComponent } from './offers-component/offers-component';

@Component({
  selector: 'app-stays-context-component',
  imports: [StaysFormComponent, OffersComponent],
  templateUrl: './stays-context-component.html',
  styleUrl: './stays-context-component.scss',
})
export class StaysContextComponent {}
