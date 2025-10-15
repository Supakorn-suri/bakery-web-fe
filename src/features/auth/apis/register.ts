import { apiClient } from "@/lib/axios";
import { RegisterRequest, RegisterResponse } from "../types/auth";

export const register = async (data: RegisterRequest) => {
  const response = await apiClient.post<RegisterResponse>("/auth/register", data);
  return response.data;
};
