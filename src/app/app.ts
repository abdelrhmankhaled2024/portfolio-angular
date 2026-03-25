import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <footer class="footer">
      <div class="container">
        <p>Designed & Built by <span>Abdelrhman Khaled</span> · {{ year }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 32px 0;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-muted);
      font-size: 14px;
      span { color: var(--accent); }
    }
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
}
