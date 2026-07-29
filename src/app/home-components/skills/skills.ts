import { Component } from '@angular/core';
import { Skill } from './skills.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillList: Skill[] = [
    {
      id: 1,
      icon: '/assets/icons/angular.svg',
      name: 'Angular',
    },
    {
      id: 2,
      icon: '/assets/icons/typescript.svg',
      name: 'TypeScript',
    },
    {
      id: 3,
      icon: '/assets/icons/javascript.svg',
      name: 'JavaScript',
    },
    {
      id: 4,
      icon: '/assets/icons/html.svg',
      name: 'HTML',
    },
    {
      id: 5,
      icon: '/assets/icons/css.svg',
      name: 'CSS',
    },
    {
      id: 6,
      icon: '/assets/icons/supabase.svg',
      name: 'Supabase',
    },
    {
      id: 7,
      icon: '/assets/icons/git.svg',
      name: 'Git',
    },
    {
      id: 8,
      icon: '/assets/icons/scrum.svg',
      name: 'Scrum',
    },
    {
      id: 9,
      icon: '/assets/icons/api.svg',
      name: 'REST-API',
    },
    {
      id: 10,
      icon: '/assets/icons/design.svg',
      name: 'Material Design',
    },
  ];
}
