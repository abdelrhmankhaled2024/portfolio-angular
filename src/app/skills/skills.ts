import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  categories = [
    {
      label: 'Frontend Core',
      icon: '⚡',
      skills: ['Angular 11–20', 'TypeScript', 'JavaScript ES6+', 'RxJS', 'HTML5', 'SCSS/CSS3']
    },
    {
      label: 'UI Libraries',
      icon: '🎨',
      skills: ['Angular Material', 'PrimeNG', 'DevExtreme', 'Bootstrap', 'Gridster']
    },
    {
      label: 'Data & Maps',
      icon: '📊',
      skills: ['Chart.js', 'Leaflet.js', 'RESTful APIs', 'GraphQL', 'Socket.io']
    },
    {
      label: 'Backend Awareness',
      icon: '🛠',
      skills: ['Node.js', 'Express.js', 'NestJS', 'MySQL', 'MongoDB', 'Redis', 'Docker']
    },
    {
      label: 'Testing & Tools',
      icon: '🧪',
      skills: ['Cypress (E2E)', 'Git & GitHub', 'Agile/Scrum', 'JWT Auth', 'Lazy Loading']
    }
  ];
}
