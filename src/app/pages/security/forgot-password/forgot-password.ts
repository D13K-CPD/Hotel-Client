import { Component, inject, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgot-password',
  imports: [
    MatAnchor,
    FormsModule,
    RouterLink,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {}
