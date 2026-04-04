import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileSettings } from './inner/profile-settings/profile-settings';
import { History } from './inner/history/history';
import { MatIcon } from '@angular/material/icon';
import { StaysContextComponent } from '../../inner-items/options-component/stays-context-component/stays-context-component';

@Component({
  selector: 'app-settings',
  imports: [MatTabsModule, ProfileSettings, History, MatIcon, StaysContextComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {}
