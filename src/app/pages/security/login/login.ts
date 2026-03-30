import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
