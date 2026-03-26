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
      skills: ['Angular', 'TypeScript', 'JavaScript ES6+', 'RxJS', 'HTML5', 'SCSS/CSS3']
    },
    {
      label: 'UI Libraries',
      icon: '🎨',
      skills: ['Angular Material', 'PrimeNG', 'DevExtreme', 'Bootstrap', 'Gridster','Chart.js', 'Leaflet.js', 'RESTful APIs',]
    },
    {
      label: 'Backend Awareness',
      icon: '🛠',
      skills: ['Node.js', 'Express.js', 'NestJS', 'MySQL', 'MongoDB', 'Redis', 'Docker','GraphQL', 'Socket.io']
    },
    {
      label: 'Testing & Tools',
      icon: '🧪',
      skills: ['Cypress (E2E)', 'Git & GitHub', 'Agile/Scrum']
    }
  ];
}
