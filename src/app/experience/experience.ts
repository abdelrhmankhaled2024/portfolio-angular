import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  jobs = [
    {
      company: 'Digis Squared',
      role: 'Frontend Web Developer',
      period: 'June 2024 – Present',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      color: '#00d4ff',
      points: [
        'Developed high-performance, scalable web apps using Angular with enterprise best practices.',
        'Led full project revamp: migrated from Angular 11 to Angular 20 ensuring backward compatibility.',
        'Designed shared reusable component architecture, cutting code duplication significantly.',
        'Integrated DevExtreme, PrimeNG, Leaflet Maps, Charts.js, and Gridster for rich UIs.',
        'Implemented RESTful API integrations, lazy loading, and state management best practices.',
        'Wrote E2E automated tests using Cypress to improve test coverage and reliability.',
        'Collaborated with backend developers and PMs to translate requirements into clean interfaces.',
      ]
    },
    {
      company: 'Freelance',
      role: 'Frontend Web Developer – E-Commerce',
      period: '2024 – 2025',
      location: 'Remote',
      type: 'Freelance',
      color: '#7c3aed',
      points: [
        'Built a full-featured e-commerce frontend with Angular, Bootstrap, and SCSS.',
        'Implemented product listing, filtering, cart management, auth flows, and checkout UI.',
        'Integrated RESTful APIs with RxJS and JWT-based client-side authentication.',
        'Used Reactive Forms with custom validations and modular architecture.',
        'Collaborated with backend teams using ngx-toastr and Owl Carousel integrations.',
      ]
    }
  ];

  education = [
    {
      institution: 'Route Academy',
      degree: 'Full Stack Web Development Diploma',
      period: '2024',
      desc: 'HTML, CSS, JS, Angular, Node.js, NestJS, MySQL, MongoDB, Docker, GraphQL, Socket.io, Redis.'
    },
    {
      institution: 'Helwan University',
      degree: 'Bachelor of Engineering',
      period: '2020',
      desc: 'Engineering foundations with strong analytical and problem-solving skills.'
    }
  ];
}
