export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: 'Nuevo' | 'Oferta' | 'Top ventas';
  description: string;
  stock: number;
  isFavorite?: boolean;
}
