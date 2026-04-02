import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatAnchor } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [
    MatFormField,
    MatFormFieldModule,
    FormsModule,
    MatAnchor,
    MatLabel,
    MatCheckboxModule,
    RouterLink,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  showStatus: boolean = false;
}
