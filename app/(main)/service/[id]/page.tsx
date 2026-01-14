'use client';

import { useParams, useRouter } from 'next/navigation';
import { Share, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/src/app/components/Header';
import { Footer } from '@/src/app/components/Footer';

// Host image path
const hostImage = '/host-image.png';

/**
 * Page de détails de service Next.js
 * Wrapper adapté de ServiceDetails pour Next.js App Router
 */
export default function ServiceDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [isFavorite, setIsFavorite] = useState(false);

  const serviceOptions = [
    {
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
      title: 'Expérience autour de la cuisine romaine',
      price: '35 €',
      description: 'Vous souhaitez profiter de l\'expérience d\'un chef privé à domicile sans dépenser beaucoup ?'
    },
    {
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
      title: 'Menu de base : saveurs de Rome',
      price: '65 €',
      description: 'Chef privé romain qui apporte les saveurs traditionnelles dans les maisons et les BnB de Rome.'
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
      title: 'Pâtes et dessert faits maison',
      price: '65 €',
      description: 'Apprenez l\'art des pâtes fraîches et d\'un dessert traditionnel fait maison.'
    },
  ];

  // Navigate functions adapted for Next.js
  const navigate = (path: string) => router.push(path);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage="services" 
        onNavigate={(page) => navigate(`/${page === 'logements' ? '' : page}`)} 
        isScrolled={true} 
        onSearch={() => {}} 
      />
      
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-20 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-12">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={hostImage}
                  alt="Service"
                  className="w-full h-full object-cover"
                />
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
              
              <div className="mt-6">
                <h1 className="text-2xl font-semibold mb-2">Repas romain authentique</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 fill-current text-yellow-500" />
                  <span className="font-medium">5.0</span>
                  <span>· Rome, Italie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Options */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold mb-6">Choisissez une option</h2>
            <div className="space-y-4">
              {serviceOptions.map((option, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push('/booking')}
                >
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <p className="font-semibold text-[#00A99D]">{option.price} par personne</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

