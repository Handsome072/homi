'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Heart, Share, Star, ChevronRight, X, ChevronDown, Minus, Plus, Calendar } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Footer } from '@/src/app/components/Footer';
import { Header } from '@/src/app/components/Header';
import { ImageGallery } from '@/src/app/components/ImageGallery';

// Tax rate for calculation (10% of subtotal)
const TAX_RATE = 0.10;
// Additional guest fee per night (for guests beyond base occupancy)
const ADDITIONAL_GUEST_FEE = 15.00;
const BASE_GUESTS = 1;

// Helper function to calculate nights between two dates
const calculateNights = (checkInDate: Date, checkOutDate: Date): number => {
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  return Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
};

// Helper function to format date for display (French format)
const formatDateForDisplay = (date: Date): string => {
  const day = date.getDate();
  const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// Helper function to format date for input field display (DD/MM/YYYY)
const formatDateForInputDisplay = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Helper function to format date for HTML date input
const formatDateForInput = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Page de détails de propriété Next.js
 * Wrapper adapté de PropertyDetails pour Next.js App Router
 */
export default function PropertyDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;

  // Import the PropertyDetails component dynamically to avoid SSR issues
  // For now, we'll render a placeholder that redirects to the original component logic
  
  const [activeTab, setActiveTab] = useState('photos');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Property configuration
  const pricePerNight = 87.56;
  const maxGuests = 2;

  // Initialize dates (default: tomorrow to day after tomorrow + 1)
  const getDefaultCheckIn = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const getDefaultCheckOut = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  // Editable state for reservation
  const [checkInDate, setCheckInDate] = useState<Date>(getDefaultCheckIn);
  const [checkOutDate, setCheckOutDate] = useState<Date>(getDefaultCheckOut);
  const [guestCount, setGuestCount] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  // Calculate nights dynamically
  const nights = useMemo(() => calculateNights(checkInDate, checkOutDate), [checkInDate, checkOutDate]);

  // Dynamic price calculation
  const basePrice = useMemo(() => nights * pricePerNight, [nights, pricePerNight]);
  const additionalGuestFee = useMemo(() => {
    const extraGuests = Math.max(0, guestCount - BASE_GUESTS);
    return extraGuests * ADDITIONAL_GUEST_FEE * nights;
  }, [guestCount, nights]);
  const subtotal = useMemo(() => basePrice + additionalGuestFee, [basePrice, additionalGuestFee]);
  const taxes = useMemo(() => subtotal * TAX_RATE, [subtotal]);
  const total = useMemo(() => subtotal + taxes, [subtotal, taxes]);

  // Handle date changes
  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    newDate.setHours(0, 0, 0, 0);
    setCheckInDate(newDate);
    if (newDate >= checkOutDate) {
      const newCheckout = new Date(newDate);
      newCheckout.setDate(newCheckout.getDate() + 1);
      setCheckOutDate(newCheckout);
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    newDate.setHours(0, 0, 0, 0);
    if (newDate > checkInDate) {
      setCheckOutDate(newDate);
    }
  };

  // Navigate functions adapted for Next.js
  const navigate = (path: string) => router.push(path);

  // For now, render a loading/redirect message while we implement the full page
  // This is a placeholder - the full implementation would import the existing component
  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage="logements" 
        onNavigate={(page) => navigate(`/${page === 'logements' ? '' : page}`)} 
        isScrolled={true} 
        onSearch={() => {}} 
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Propriété #{id}</h1>
          <p className="text-gray-600 mb-8">Chargement des détails de la propriété...</p>
          <button 
            onClick={() => router.back()}
            className="px-6 py-3 bg-[#00A99D] text-white rounded-lg hover:bg-[#008B82] transition-colors"
          >
            Retour
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

