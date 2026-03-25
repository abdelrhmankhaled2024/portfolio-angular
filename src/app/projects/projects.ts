import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
  gradient: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  activeIndex = signal(0);
  isAnimating = signal(false);

  projects: Project[] = [
    {
      title: 'Enterprise Telecom Dashboard',
      category: 'Angular · Enterprise',
      desc: 'A mission-critical Angular enterprise app focused on real-time data visualization and dynamic dashboards. Features reusable component architecture, DevExtreme/Leaflet/Charts.js integrations, and Angular 11→20 migration.',
      tags: ['Angular', 'DevExtreme', 'Leaflet.js', 'RxJS', 'Charts.js', 'Gridster','PrimeNG',"Custom Components"],
      featured: true,
      gradient: 'linear-gradient(135deg, #00d4ff22, #7c3aed22)',
      icon: '📡',

    },
    {
      title: 'E-Commerce Platform',
      category: 'Angular · Full-featured',
      desc: 'Full-featured e-commerce frontend with product listing, filtering, cart management, authentication flows, and checkout. Built with Angular, RxJS, Bootstrap, and JWT-based auth with RESTful API integration.',
      tags: ['Angular', 'Bootstrap', 'SCSS', 'RxJS', 'JWT', 'REST API'],
      featured: true,
      gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
      icon: '🛒',
      demo: 'https://ecommerece-app-zeta.vercel.app/',
      github: 'https://github.com/abdelrhmankhaled2024/ecommerce-angular'
    },
    {
      title: 'Bus Reservation System',
      category: 'Angular 17+ · PrimeNG',
      desc: 'Full-stack-style bus booking web app with interactive real-time seat selection, route search with autocomplete, passenger management, and a reservations dashboard with cancel/delete functionality.',
      tags: ['Angular 17+', 'PrimeNG', 'RxJS', 'TypeScript'],
      gradient: 'linear-gradient(135deg, #10b98122, #3b82f622)',
      icon: '🚌',
      demo: 'https://bus-booking-iota.vercel.app/',
      github: 'https://github.com/abdelrhmankhaled2024/bus-booking-system-angular'
    },
    {
      title: 'Interactive Finance Dashboard',
      category: 'Angular 21 · Chart.js',
      desc: 'Angular 21 finance SPA featuring Chart.js visualizations — area, line, bar and radar charts. JSON-driven data binding, reactive filtering, and custom chart configuration with full change detection control.',
      tags: ['Angular 21', 'Chart.js', 'TypeScript', 'SCSS'],
      gradient: 'linear-gradient(135deg, #8b5cf622, #ec489922)',
      icon: '📈',
      demo: 'https://finance-angular-app-deploy.vercel.app/',
      github: 'https://github.com/abdelrhmankhaled2024/finance-angular-app'
    },
    {
      title: 'College Competition Platform',
      category: 'Angular · Auth · Routing',
      desc: 'Frontend Angular application for managing college competitions — authentication, project submissions, and student participation. Features routing, reusable components, and service-based state/API handling.',
      tags: ['Angular', 'TypeScript', 'REST API', 'Auth Guards'],
      gradient: 'linear-gradient(135deg, #f59e0b22, #10b98122)',
      icon: '🏆',
      demo: 'https://github.com/abdelrhmankhaled2024/college-competition-angular',
      github: 'https://github.com/abdelrhmankhaled2024'
    },
    {
      title: 'Notes App (NestJS)',
      category: 'NestJS · Backend',
      desc: 'Secure Notes App built with NestJS featuring JWT authentication, auth guards, and CRUD operations for notes. Demonstrates backend fundamentals with clean module architecture.',
      tags: ['NestJS', 'JWT', 'TypeScript', 'REST API'],
      gradient: 'linear-gradient(135deg, #6366f122, #00d4ff22)',
      icon: '📝',
      github: 'https://github.com/abdelrhmankhaled2024/notes-nest'
    },
    {
  title: 'E-Commerce Platform (Express.js)',
  category: 'Express.js · Backend',
  desc: 'Full-featured e-commerce backend built with Express.js and MySQL featuring RESTful APIs for user authentication, product management, and shopping cart. Implements secure password hashing with bcrypt and JWT-based authentication.',
  tags: ['Express.js', 'MySQL', 'RESTful APIs', 'bcrypt', 'JWT'],
  gradient: 'linear-gradient(135deg, #f9731622, #ef444422)',
  icon: '🛒',
  github: 'https://github.com/abdelrhmankhaled2024/ecommerce-express'
},
{
  title: 'Linked Posts (Express.js)',
  category: 'Express.js · Backend',
  desc: 'Social posts backend API built with Express.js and MySQL featuring CRUD operations for posts, user authentication with bcrypt password hashing, and CORS support. Demonstrates core backend development and database integration skills.',
  tags: ['Express.js', 'MySQL', 'CRUD APIs', 'bcrypt', 'CORS'],
  gradient: 'linear-gradient(135deg, #8b5cf622, #ec489a22)',
  icon: '📱',
  github: 'https://github.com/abdelrhmankhaled2024/linked-posts-express'
},
        {
      title: 'Notes App (NestJS)',
      category: 'NestJS · Backend',
      desc: 'Secure Notes App built with NestJS featuring JWT authentication, auth guards, and CRUD operations for notes. Demonstrates backend fundamentals with clean module architecture.',
      tags: ['NestJS', 'JWT', 'TypeScript', 'REST API'],
      gradient: 'linear-gradient(135deg, #6366f122, #00d4ff22)',
      icon: '📝',
      github: 'https://github.com/abdelrhmankhaled2024/notes-nest'
    }
  ];

  get current(): Project { return this.projects[this.activeIndex()]; }
  get total(): number { return this.projects.length; }

  prev() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.update(i => (i - 1 + this.total) % this.total);
    setTimeout(() => this.isAnimating.set(false), 400);
  }

  next() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.update(i => (i + 1) % this.total);
    setTimeout(() => this.isAnimating.set(false), 400);
  }

  goTo(i: number) {
    if (this.isAnimating() || i === this.activeIndex()) return;
    this.isAnimating.set(true);
    this.activeIndex.set(i);
    setTimeout(() => this.isAnimating.set(false), 400);
  }
}
