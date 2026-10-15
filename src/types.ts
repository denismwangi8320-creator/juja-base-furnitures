export type ProductCategory = 'all' | 'desks' | 'chairs' | 'executive' | 'student' | 'conference';

export interface ProductColor {
  name: string;
  hex: string;
  tailwindClass: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'desks' | 'chairs';
  subCategory: 'executive' | 'standing' | 'mesh' | 'leather' | 'student' | 'conference';
  price: number; // In KES
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  tag?: string;
  description: string;
  image: string;
  fallbackGradient: string;
  colors: ProductColor[];
  dimensions: string;
  material: string;
  warranty: string;
  weightCapacity: string;
  suitableFor: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
}

export interface OrderCustomerInfo {
  fullName: string;
  phoneNumber: string;
  locationDepartment: string;
  notes?: string;
  paymentMethod: 'mpesa' | 'cash_on_delivery' | 'bank_lpo';
}
