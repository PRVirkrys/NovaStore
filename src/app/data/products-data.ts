import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Bolso Minimal Beige',
    category: 'Accesorios',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop',
    badge: 'Nuevo',
    description: 'Bolso elegante de estilo minimalista para uso diario.',
    stock: 12,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Sneakers Urban White',
    category: 'Calzado',
    price: 79.9,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    badge: 'Top ventas',
    description: 'Zapatillas blancas cómodas para looks casuales y urbanos.',
    stock: 8,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Chaqueta Denim Oversize',
    category: 'Ropa',
    price: 64.5,
    image:
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=800&auto=format&fit=crop',
    badge: 'Oferta',
    description: 'Chaqueta denim oversize ideal para entretiempo.',
    stock: 5,
    isFavorite: true,
  },
  {
    id: 4,
    name: 'Reloj Classic Gold',
    category: 'Accesorios',
    price: 119.99,
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    badge: 'Nuevo',
    description: 'Reloj dorado clásico con diseño elegante.',
    stock: 4,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Sudadera Soft Grey',
    category: 'Ropa',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    description: 'Sudadera gris suave y cómoda para todos los días.',
    stock: 15,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Botines Chelsea Black',
    category: 'Calzado',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    badge: 'Oferta',
    description: 'Botines negros estilo Chelsea con acabado moderno.',
    stock: 6,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'Gafas Retro Brown',
    category: 'Accesorios',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    badge: 'Top ventas',
    description: 'Gafas marrones estilo retro para completar cualquier outfit.',
    stock: 20,
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Camisa Linen White',
    category: 'Ropa',
    price: 45.0,
    image:
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop',
    description: 'Camisa blanca de lino con corte relajado.',
    stock: 9,
    isFavorite: false,
  },
];
