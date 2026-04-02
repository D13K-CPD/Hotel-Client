import { Component, inject, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register-verification',
  imports: [MatAnchor, FormsModule, RouterLink, MatFormField, MatLabel, MatFormFieldModule],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit {
  //activatedRoute: any = inject(ActivatedRoute);
  email: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.activatedRoute.paramMap.subscribe((resp) => {
      this.email = resp.get('email');
    });
  }
}
