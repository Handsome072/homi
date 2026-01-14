'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Calendar, Users, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

// Logo path
const logo = '/logo.png';

interface BookingData {
  title: string;
  image: string;
  rating: number;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  pricePerNight: number;
}

// Tax rate for calculation (10% of subtotal)
const TAX_RATE = 0.10;

/**
 * Page de demande de réservation Next.js
 */
export default function BookingPage() {
  const router = useRouter();
  const [paymentTiming, setPaymentTiming] = useState<'now' | 'later'>('now');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'googlepay'>('card');
  const [message, setMessage] = useState('');

  // Mock booking data
  const bookingData: BookingData = {
    title: 'Appartement moderne avec vue panoramique',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    rating: 4.92,
    location: 'Paris, France',
    checkIn: '15 janv. 2025',
    checkOut: '18 janv. 2025',
    guests: 2,
    nights: 3,
    pricePerNight: 87.56,
  };

  const subtotal = bookingData.nights * bookingData.pricePerNight;
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <img src={logo} alt="HOMIQIO" className="h-8" />
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-8">Demande de réservation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* Dates */}
            <div className="border-b pb-6">
              <h2 className="text-lg font-semibold mb-4">Votre voyage</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Dates</p>
                  <p className="text-gray-600">{bookingData.checkIn} - {bookingData.checkOut}</p>
                </div>
                <button className="text-sm underline">Modifier</button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="font-medium">Voyageurs</p>
                  <p className="text-gray-600">{bookingData.guests} voyageur(s)</p>
                </div>
                <button className="text-sm underline">Modifier</button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border-b pb-6">
              <h2 className="text-lg font-semibold mb-4">Payer avec</h2>
              <div className="space-y-3">
                {(['card', 'paypal', 'googlepay'] as const).map((method) => (
                  <label key={method} className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="w-4 h-4"
                    />
                    <span className="capitalize">{method === 'card' ? 'Carte bancaire' : method === 'paypal' ? 'PayPal' : 'Google Pay'}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Message à l'hôte</h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Présentez-vous et décrivez votre voyage..."
                className="w-full p-4 border rounded-lg resize-none h-32"
              />
            </div>

            <button 
              onClick={() => alert('Réservation confirmée !')}
              className="w-full py-4 bg-[#00A99D] text-white rounded-lg font-semibold hover:bg-[#008B82] transition-colors"
            >
              Confirmer et payer
            </button>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="border rounded-xl p-6">
              <div className="flex gap-4 mb-6">
                <img 
                  src={bookingData.image} 
                  alt={bookingData.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-medium">{bookingData.title}</h3>
                  <p className="text-sm text-gray-600">{bookingData.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{bookingData.rating}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between">
                  <span>{bookingData.pricePerNight.toFixed(2)} € x {bookingData.nights} nuits</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>{taxes.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between font-semibold pt-3 border-t">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

