import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);
  menuOpen = false;

  get currentLanguage(): string | null {
    return this.translate.currentLang();
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  openMenu() {
    this.menuOpen = true;
    document.body.classList.add('menu-open');
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }
}
