import { apiClient } from "@/lib/axios";

import {
  CreateProductRequest,
  UpdateProductRequest,
  ProductListResponse,
  ProductResponse,
  SuccessResponse,
  PaginationParams,
  SuccessProductResponse,
} from "../types/product";

export const getProducts = async (
  params?: PaginationParams & {
    search?: string;
    baker?: string;
    sort?:
      | "price_asc"
      | "price_desc"
      | "rating_asc"
      | "rating_desc"
      | "name_asc"
      | "name_desc"
      | "newest";
  }
): Promise<ProductListResponse> => {
  const res = await apiClient.get<ProductListResponse>("/api/products", {
    params,
  });
  return res.data;
};

export const getProductById = async (id: number): Promise<ProductResponse> => {
  const res = await apiClient.get<ProductResponse>(`/api/products/${id}`);
  return res.data;
};

export const createProduct = async (
  payload: CreateProductRequest
): Promise<SuccessProductResponse> => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("price", String(payload.price));

  if (payload.cook_time) {
    formData.append("cook_time", payload.cook_time);
  }

  if (payload.image) {
    formData.append("image", payload.image);
  }

  const res = await apiClient.post<SuccessProductResponse>(
    "/baker/products",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

export const getProductsByBaker = async (
  params?: PaginationParams & {
    search?: string;
    sort?:
      | "price_asc"
      | "price_desc"
      | "rating_asc"
      | "rating_desc"
      | "name_asc"
      | "name_desc"
      | "newest";
  }
): Promise<ProductListResponse> => {
  const res = await apiClient.get<ProductListResponse>("/baker/products", {
    params,
  });
  return res.data;
};

export const updateProduct = async (
  id: number,
  payload: UpdateProductRequest
): Promise<SuccessProductResponse> => {
  const formData = new FormData();

  if (payload.name) {
    formData.append("name", payload.name);
  }
  if (payload.price !== undefined) {
    formData.append("price", String(payload.price));
  }
  if (payload.cook_time) {
    formData.append("cook_time", payload.cook_time);
  }
  if (payload.image) {
    formData.append("image", payload.image);
  }

  const res = await apiClient.put<SuccessProductResponse>(
    `/baker/products/${id}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

export const deleteProduct = async (id: number): Promise<SuccessResponse> => {
  const res = await apiClient.delete<SuccessResponse>(`/baker/products/${id}`);
  return res.data;
};
