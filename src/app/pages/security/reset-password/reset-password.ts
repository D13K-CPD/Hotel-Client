import { Component, inject, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reset-password',
  imports: [
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    FormsModule,
    MatAnchor,
    RouterLink,
    MatInputModule,
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {}
