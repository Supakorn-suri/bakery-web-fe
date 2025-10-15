import { apiClient } from "@/lib/axios";
import { LoginRequest, LoginResponse } from "../types/auth";

export const login = async (data: LoginRequest) => {
  const response = await apiClient.post<LoginResponse>("/auth/login", data);
  return response.data;
};
