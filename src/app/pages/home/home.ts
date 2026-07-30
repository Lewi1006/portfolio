import { Component } from '@angular/core';
import { LandingPage } from '../../home-components/landing-page/landing-page';
import { About } from '../../home-components/about/about';
import { Skills } from '../../home-components/skills/skills';
import { Portfolio } from '../../home-components/portfolio/portfolio';
import { References } from '../../home-components/references/references';

@Component({
  selector: 'app-home',
  imports: [LandingPage, About, Skills, Portfolio, References],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
