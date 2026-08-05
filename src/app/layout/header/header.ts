import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translateService = inject(TranslateService);

  menuOpen = false;

  openMenu() {
    this.menuOpen = true;
    document.body.classList.add('menu-open');
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }
}
