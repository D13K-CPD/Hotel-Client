import { provideNativeDateAdapter } from '@angular/material/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatIcon,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaysFormComponent {}
