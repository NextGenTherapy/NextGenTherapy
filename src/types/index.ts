// Type definitions for the application

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export type ContactMethod = 'email' | 'phone';
export type EnquiryFor = 'myself' | 'child' | 'other';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  contactMethod: ContactMethod;
  enquiryFor: EnquiryFor;
  message?: string;
  gdprConsent: boolean;
  honeypot?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  enquiryFor?: string;
  message?: string;
  gdprConsent?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
