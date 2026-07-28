import { Component } from '@angular/core';
import { LandingPage } from '../../home-components/landing-page/landing-page';
import { About } from '../../home-components/about/about';
@Component({
  selector: 'app-home',
  imports: [LandingPage, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
