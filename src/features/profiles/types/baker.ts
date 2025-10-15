import { Product } from "./member";

export interface BakerProfileResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  bakery_name?: string;
  phone_number?: string;
  products?: Product[];
  orders?: any;
}

export interface Order {
  id: number;
  member_id: number;
  baker_id: number;
  status: string;
  total_price: number;
  items?: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product?: Product;
}

export interface UpdateBakerProfileRequest {
  first_name: string;
  last_name: string;
  email: string;
  bakery_name?: string;
  phone_number?: string;
}
