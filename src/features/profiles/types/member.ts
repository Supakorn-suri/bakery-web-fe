import { ProductResponse } from "@/features/products/types/product";

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
  product: ProductResponse;
  created_at: string;
  updated_at: string;
}

export interface UpdateMemberProfileRequest {
  first_name: string;
  last_name: string;
  email: string;
}
