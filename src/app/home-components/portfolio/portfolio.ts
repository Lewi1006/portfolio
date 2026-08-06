import { Component } from '@angular/core';
import { Project } from './portfolio.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projectList: Project[] = [
    {
      id: 1,
      titleKey: 'portfolio.projects.project1.title',
      img: 'assets/img/placeholder.jpg',
      skillsKey: 'portfolio.projects.project1.skills',
      descriptionKey:
        'portfolio.projects.project1.description',
      gitHub: 'https://github.com/Lewi1006',
    },
    {
      id: 2,
      titleKey: 'portfolio.projects.project2.title',
      img: 'assets/img/placeholder.jpg',
      skillsKey: 'portfolio.projects.project2.skills',
      descriptionKey:
        'portfolio.projects.project2.description',
      gitHub: 'https://github.com/Lewi1006',
    },
  ];

  formatNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }
}
