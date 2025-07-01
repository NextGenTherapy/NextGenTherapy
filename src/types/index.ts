// Type definitions for the application

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export type LoadingState = "idle" | "loading" | "success" | "error";
