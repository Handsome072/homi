/**
 * Types pour les services
 */

export interface Service {
  id: string;
  title: string;
  location: string;
  description?: string;
  price: number;
  priceType: 'fixed' | 'hourly' | 'daily';
  currency: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  providerName: string;
  providerAvatar?: string;
  category: ServiceCategory;
  subCategory?: string;
  availability?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export type ServiceCategory = 
  | 'menage'
  | 'conciergerie'
  | 'transport'
  | 'restauration'
  | 'bien-etre'
  | 'activites'
  | 'autre';

export interface ServiceCardData {
  id?: string;
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  category?: string;
}

export interface ServiceCategoryData {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface ServiceSearchParams {
  destination?: string;
  date?: Date;
  category?: ServiceCategory;
  serviceType?: string;
}

