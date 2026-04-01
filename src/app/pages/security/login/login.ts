import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatFormFieldModule, MatAnchor],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
