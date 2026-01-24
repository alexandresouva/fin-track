import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Header } from './components/header/header';
import { Sidenav } from './components/sidenav/sidenav';

@Component({
  selector: 'app-layout',
  imports: [Header, Sidenav, MatSidenavModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
}
