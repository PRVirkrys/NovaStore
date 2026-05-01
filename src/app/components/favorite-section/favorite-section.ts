import { Component } from '@angular/core';
import { FAVORITE_PRODUCTS } from '../../data/favorites-data';

@Component({
  selector: 'app-favorite-section',
  imports: [],
  templateUrl: './favorite-section.html',
  styleUrl: './favorite-section.scss',
})
export class FavoriteSection {
  favoriteProducts = FAVORITE_PRODUCTS;
}
