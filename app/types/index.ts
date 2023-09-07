import type { ReactNode } from "react";

interface ImageFormats {
  large: {
    url: string;
  };
  small: {
    url: string;
  };
  medium: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
}

interface ImageURL {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      formats: ImageFormats;
      url: string;
    };
  };
}

export type ListingDetail = {
  id: number;
  attributes: {
    title: string;
    description: string;
    generator: string;
    style: string;
    rating: number;
    isOnSale: boolean;
    price: number;
    vote: number;
    resolution?: string;
    theme: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    imageUrl: ImageURL;
    author: string;
  };
};

export interface ListingType {
  listings: ListingDetail[];
}

export interface LoginSuccessApiResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: string;
    blocked: string;
    createdAt: string;
    updatedAt: string;
    bio?: string;
    followers: null;
  };
}

export interface LoginFormData {
  identifier: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface ErrorResponse {
  status: number;
  name: string;
  message: string;
  details: Record<string, unknown>;
}

export interface NonAuthenticatedUserResponse {
  data: null;
  error: ErrorResponse;
}

export interface AuthenticatedUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  bio: string | null;
  followers: any; // You can replace 'any' with the appropriate type if you know it
}

export interface AuthenticatedUserResponse {
  jwt: string;
  user: AuthenticatedUser;
}

export type LoginValues = {
  identifier: string;
  password: string;
  jwt: string;
};

export interface RegistrationValues {
  username: string;
  email: string;
  password: string;
}

export interface UserProviderProps {
  children: ReactNode;
}

// Define the shape of the user data
interface User {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    // ... other user fields
  };
}

// Define the shape of the context
export interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
}
