import { CartItem } from '../models/cart-item';
import { PRODUCTS } from './products-data';

export const CART_ITEMS: CartItem[] = [
  {
    product: PRODUCTS[0],
    quantity: 1,
  },
  {
    product: PRODUCTS[2],
    quantity: 2,
  },
];
