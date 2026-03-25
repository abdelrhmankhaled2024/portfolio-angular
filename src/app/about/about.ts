import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: 'Angular', label: 'Core Specialization' },
  ];
}
