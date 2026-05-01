import { Component } from '@angular/core';
import { NavBar } from './components/nav-bar/nav-bar';
import { ProductList } from './components/product-list/product-list';
import { FavoriteSection } from './components/favorite-section/favorite-section';
import { CartDrawer } from './components/cart-drawer/cart-drawer';

@Component({
  selector: 'app-root',
  imports: [NavBar, ProductList, FavoriteSection, CartDrawer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  cartIsOpen = false;

  openCart() {
    this.cartIsOpen = true;
  }

  closeCart() {
    this.cartIsOpen = false;
  }
}
