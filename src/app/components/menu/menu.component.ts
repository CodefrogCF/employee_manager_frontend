import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
