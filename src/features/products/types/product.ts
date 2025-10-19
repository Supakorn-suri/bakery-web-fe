export interface BakerProductInfo {
  id: number;
  first_name: string;
  last_name: string;
  bakery_name: string;
  email: string;
}

export interface BakerProfileResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  bakery_name: string;
  created_at: string;
  updated_at: string;
}

export interface ProductResponse {
  id: number;
  name: string;
  price: number;
  cook_time?: string;
  rating: number;
  image: string;
  baker_id: number;
  baker?: BakerProductInfo;
  created_at: string;
  updated_at: string;
}

export interface ProductListResponse {
  data: ProductResponse[];
  page: number;
  limit: number;
  total: number;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  cook_time?: string;
  image?: File;
}

export interface UpdateProductRequest {
  name?: string;
  price?: number;
  cook_time?: string;
  image?: File;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface SuccessResponse<T = any> {
  message: string;
  data?: T;
}

export interface ErrorResponse {
  error: string;
  message?: string;
  code: number;
}

export type SuccessProductResponse = SuccessResponse<ProductResponse>;
