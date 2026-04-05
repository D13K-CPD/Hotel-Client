import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileSettings } from './inner/profile-settings/profile-settings';
import { History } from './inner/history/history';

@Component({
  selector: 'app-settings',
  imports: [MatTabsModule, ProfileSettings, History],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {}
