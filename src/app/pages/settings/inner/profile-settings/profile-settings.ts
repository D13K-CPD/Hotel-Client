import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatAnchor } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { ManageProfilePic } from './manage-profile-pic/manage-profile-pic';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile-settings',
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    MatFormField,
    MatLabel,
    MatAnchor,
    ManageProfilePic,
    MatInputModule,
  ],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss',
})
export class ProfileSettings {}
