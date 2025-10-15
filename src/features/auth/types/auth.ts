export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  role: string;
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
