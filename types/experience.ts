/**
 * Types pour les expériences
 */

export interface Experience {
  id: string;
  title: string;
  location: string;
  description?: string;
  price: number;
  currency: string;
  duration: string; // ex: "2 heures"
  rating: number;
  reviewsCount: number;
  images: string[];
  hostName: string;
  hostAvatar?: string;
  category: string;
  maxParticipants: number;
  includes: string[];
  languages: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  availability?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ExperienceCardData {
  id?: string;
  image: string;
  title: string;
  location: string;
  date?: string;
  price: string;
  rating: number;
  badge?: 'Coup de coeur' | 'Originals' | 'Populaire' | 'Nouveau';
  duration?: string;
}

export interface ExperienceSearchParams {
  destination?: string;
  date?: Date;
  guests?: number;
  category?: string;
}

