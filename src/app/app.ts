import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { AlertComp } from './home-components/alert-comp/alert-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, TranslatePipe, AlertComp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['de', 'en']);
  }
}
