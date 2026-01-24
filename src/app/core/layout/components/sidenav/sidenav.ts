import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuItem } from '@core/layout/models/menu-item';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
  protected readonly menuItems: MenuItem[] = [
    { label: 'Home', route: '/home', icon: 'home' }
  ];
}
