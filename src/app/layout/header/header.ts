import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
