import { Component } from '@angular/core';
import { LandingPage } from '../../home-components/landing-page/landing-page';
import { About } from '../../home-components/about/about';
import { Skills } from '../../home-components/skills/skills';
@Component({
  selector: 'app-home',
  imports: [LandingPage, About, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
