// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Common types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface FormState {
  isLoading: boolean;
  error: string | null;
}
