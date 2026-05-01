import { Product } from '../models/product';
import { PRODUCTS } from './products-data';

export const FAVORITE_PRODUCTS: Product[] = PRODUCTS.filter((product) => product.isFavorite);
