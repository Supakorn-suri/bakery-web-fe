export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
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
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  message: string;
}
