import { Component } from '@angular/core';
import { Project } from './portfolio.interface';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projectList: Project[] = [
    {
      id: 1,
      title: 'Join',
      img: '/assets/img/placeholder.jpg',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      gitHub: 'https://github.com/Lewi1006',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      img: '/assets/img/placeholder.jpg',
      skills: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object oriented approach. Help Pepe find coins and salsa bottles to fight against the evil chicken.',
      gitHub: 'https://github.com/Lewi1006',
    },
  ];

  formatNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }
}
