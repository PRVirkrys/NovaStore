import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  @Output() openCartEmitter: EventEmitter<void> = new EventEmitter<void>();

  openCart() {
    this.openCartEmitter.emit();
  }
}
