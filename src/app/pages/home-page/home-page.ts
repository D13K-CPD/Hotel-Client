import { Component } from '@angular/core';
import { OptionsComponent } from '../../inner-items/options-component/options-component';

@Component({
  selector: 'app-home-page',
  imports: [OptionsComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
