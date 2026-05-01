import { Component, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CART_ITEMS } from '../../data/cart-data';

@Component({
  selector: 'app-cart-drawer',
  imports: [CartItem],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
})
export class CartDrawer {
  cartItems = CART_ITEMS;
  @Output() closeCartEmitter: EventEmitter<void> = new EventEmitter<void>();

  closeCart() {
    this.closeCartEmitter.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
