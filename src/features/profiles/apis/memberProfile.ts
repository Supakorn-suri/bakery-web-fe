import { apiClient } from "@/lib/axios";
import {
  MemberProfileResponse,
  UpdateMemberProfileRequest,
} from "../types/member";
import { MessageResponse } from '@/features/auth/types/auth';

// Get member profile
export const getMemberProfile = async (): Promise<MemberProfileResponse> => {
  const response = await apiClient.get<MemberProfileResponse>(
    "/member/profile"
  );
  return response.data;
};

// Update member profile
export const updateMemberProfile = async (
  payload: UpdateMemberProfileRequest
): Promise<MessageResponse> => {
  const response = await apiClient.put<MessageResponse>(
    "/member/profile",
    payload
  );
  return response.data;
};
