import { Component } from '@angular/core';
import { LandingPage } from '../../home-components/landing-page/landing-page';
@Component({
  selector: 'app-home',
  imports: [LandingPage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
