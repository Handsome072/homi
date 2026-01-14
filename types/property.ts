/**
 * Types pour les logements (Properties)
 */

export interface Property {
  id: string;
  title: string;
  location: string;
  description?: string;
  price: number;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  hostType: 'particulier' | 'professionnel';
  hostName?: string;
  hostAvatar?: string;
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  checkInTime?: string;
  checkOutTime?: string;
  houseRules?: string[];
  cancellationPolicy?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface PropertyCardData {
  id?: string;
  image: string;
  title: string;
  location: string;
  date?: string;
  price: string;
  rating: number;
  badge?: 'Coup de coeur' | 'Originals' | 'Populaire' | 'Nouveau';
}

export interface PropertySearchParams {
  destination?: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  guests?: GuestsCount;
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
  propertyType?: string;
}

export interface GuestsCount {
  adults: number;
  children: number;
  babies: number;
  pets: number;
}

