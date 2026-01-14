'use client';

import { useParams, useRouter } from 'next/navigation';
import { Heart, Share, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/src/app/components/Header';
import { Footer } from '@/src/app/components/Footer';

/**
 * Page de détails d'expérience Next.js
 * Wrapper adapté de ExperienceDetails pour Next.js App Router
 */
export default function ExperienceDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1705535541638-8805ba0f64aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbHltcGljJTIwYXRobGV0ZSUyMHRyYWluaW5nJTIwc25vd3xlbnwxfHx8fDE3Njc3NzYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3MTcyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1620188500179-32ac33c60848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwZ3ltJTIwd29ya291dCUyMHRyYWluaW5nfGVufDF8fHx8MTc2Nzc3NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763643425378-fecc79d33159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0cmFpbmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc3MjM1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  // Navigate functions adapted for Next.js
  const navigate = (path: string) => router.push(path);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage="experiences" 
        onNavigate={(page) => navigate(`/${page === 'logements' ? '' : page}`)} 
        isScrolled={true} 
        onSearch={() => {}} 
      />
      
      {/* Hero Section with Images */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-1 h-[400px]">
          <div className="col-span-2 row-span-2">
            <img src={images[0]} alt="Experience" className="w-full h-full object-cover" />
          </div>
          {images.slice(1, 4).map((img, idx) => (
            <div key={idx} className="col-span-1">
              <img src={img} alt={`Experience ${idx + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Share className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold mb-4">
              Récupérez comme un athlète olympique
            </h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Star className="w-5 h-5 fill-current text-yellow-500" />
              <span className="font-medium">5.0</span>
              <span>· 24 avis</span>
              <span>· Paris, France</span>
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">À propos de cette expérience</h2>
              <p className="text-gray-700 leading-relaxed">
                Découvrez les secrets d'entraînement et de récupération d'un athlète paralympique. 
                Cette expérience unique vous permettra de comprendre comment les athlètes de haut niveau 
                optimisent leurs performances et leur récupération.
              </p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-semibold mb-2">
                À partir de 94 € <span className="text-base font-normal text-gray-600">par personne</span>
              </div>
              <div className="flex items-center gap-1 mb-6">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span className="font-medium">5.0</span>
                <span className="text-gray-500">(24 avis)</span>
              </div>
              
              <button 
                onClick={() => router.push('/booking')}
                className="w-full py-3 bg-[#00A99D] text-white rounded-lg font-medium hover:bg-[#008B82] transition-colors"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

