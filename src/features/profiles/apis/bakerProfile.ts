import { apiClient } from "@/lib/axios";
import { BakerProfileResponse, UpdateBakerProfileRequest } from '../types/baker';
import { MessageResponse } from '@/features/auth/types/auth';

// Get baker profile
export const getBakerProfile = async (): Promise<BakerProfileResponse> => {
  const response = await apiClient.get<BakerProfileResponse>(
    "/baker/profile"
  );
  return response.data;
};

// Update baker profile
export const updateBakerProfile = async (
  payload: UpdateBakerProfileRequest
): Promise<MessageResponse> => {
  const response = await apiClient.put<MessageResponse>(
    "/baker/profile",
    payload
  );
  return response.data;
};
