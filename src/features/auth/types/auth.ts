export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  bakery_name?: string;
  phone_number?: string;
}

export interface MessageResponse {
  message: string;
}
