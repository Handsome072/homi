/**
 * Types pour les utilisateurs
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  isHost: boolean;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile extends User {
  bio?: string;
  languages: string[];
  responseRate?: number;
  responseTime?: string;
  reviewsCount: number;
  rating: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
  refreshToken?: string;
}

