import { provideNativeDateAdapter } from '@angular/material/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDateRangeInput,
  MatStartDate,
  MatEndDate,
  MatDatepickerToggle,
  MatDateRangePicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatIcon,
    MatFormField,
    MatDateRangeInput,
    MatStartDate,
    MatEndDate,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatLabel,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaysFormComponent {}
