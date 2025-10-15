export interface MemberProfileResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  favorites?: Favorite[];
  orders?: any;
}

export interface Favorite {
  id: number;
  member_id: number;
  product_id: number;
  product: Product;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  baker_id: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateMemberProfileRequest {
  first_name: string;
  last_name: string;
  email: string;
}
