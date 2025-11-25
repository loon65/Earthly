export interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}