import { apiClient } from "@/lib/axios";
import { RegisterRequest, MessageResponse } from "../types/auth";

export const register = async (payload: RegisterRequest) => {
  const response = await apiClient.post<MessageResponse>(
    "/auth/register",
    payload
  );
  return response.data;
};
