'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Heart, Star } from 'lucide-react';
import { Header } from '@/src/app/components/Header';
import { Footer } from '@/src/app/components/Footer';

interface Property {
  id: number;
  images: string[];
  badge?: 'Coup de coeur' | 'Originals' | 'Populaire' | 'Nouveau';
  title: string;
  rating: number;
  reviews: number;
  description: string;
  bedrooms: string;
  beds: string;
  price: number;
}

const properties: Property[] = [
  {
    id: 1,
    images: ['https://images.unsplash.com/photo-1578266848416-c291bc0b2940?w=800'],
    title: 'Appartement moderne',
    rating: 4.92,
    reviews: 36,
    description: 'Chambre confortable',
    bedrooms: '1 chambre',
    beds: '2 lits',
    price: 744,
  },
  {
    id: 2,
    images: ['https://images.unsplash.com/photo-1594904578869-c011783103c7?w=800'],
    badge: 'Populaire',
    title: 'Studio cosy',
    rating: 4.88,
    reviews: 24,
    description: 'Studio lumineux',
    bedrooms: '1 chambre',
    beds: '1 lit',
    price: 520,
  },
  {
    id: 3,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    title: 'Loft industriel',
    rating: 4.95,
    reviews: 48,
    description: 'Loft spacieux',
    bedrooms: '2 chambres',
    beds: '3 lits',
    price: 890,
  },
];

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [favorites, setFavorites] = useState<number[]>([]);

  const destination = searchParams.get('destination') || 'Paris';

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage="logements" 
        onNavigate={(page) => router.push(`/${page === 'logements' ? '' : page}`)} 
        isScrolled={true} 
        onSearch={() => {}} 
      />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-2">
          Logements à {destination}
        </h1>
        <p className="text-gray-600 mb-8">{properties.length} logements disponibles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group cursor-pointer"
              onClick={() => router.push(`/property/${property.id}`)}
            >
              <div className="relative rounded-xl overflow-hidden mb-3">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(property.id); }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                {property.badge && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white rounded-full text-xs font-medium">
                    {property.badge}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.bedrooms} · {property.beds}</p>
                  <p className="mt-1">
                    <span className="font-semibold">{property.price} €</span>
                    <span className="text-gray-600"> / nuit</span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{property.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

/**
 * Page de résultats de recherche Next.js
 */
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Chargement...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}

