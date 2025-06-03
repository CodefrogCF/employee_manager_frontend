import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
