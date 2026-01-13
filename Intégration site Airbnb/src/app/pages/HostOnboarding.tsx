import { useState } from 'react';

interface HostOnboardingProps {
  onNavigate: (page: string) => void;
}

export function HostOnboarding({ onNavigate }: HostOnboardingProps) {
  const [currentStep, setCurrentStep] = useState<'intro' | 'step1' | 'property-type' | 'space-type' | 'location' | 'confirm-address' | 'pin-location' | 'guest-info' | 'step2-intro' | 'amenities' | 'photos' | 'photo-upload'>('intro');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSpaceType, setSelectedSpaceType] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Madagascar - MG');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showPreciseLocation, setShowPreciseLocation] = useState(false);
  const [guests, setGuests] = useState(4);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false);

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  // Intro page
  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-white flex">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center px-12">
          <div className="max-w-md">
            <h1 className="text-5xl mb-12" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.1' }}>
              Commencer sur HOMIQIO, c'est facile
            </h1>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-center px-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-lg space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="text-lg mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  1 Parlez-nous de votre logement
                </div>
                <p className="text-base" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Donnez-nous quelques informations de base, par exemple indiquez-nous où il se trouve et combien de voyageurs il peut accueillir.
                </p>
              </div>
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop" 
                  alt="Logement"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="text-lg mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  2 Faites en sorte de vous démarquer
                </div>
                <p className="text-base" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Ajoutez au moins 5 photos, un titre et une description. Nous allons vous aider.
                </p>
              </div>
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop" 
                  alt="Photos"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="text-lg mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  3 Terminez et publiez
                </div>
                <p className="text-base" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Choisissez un prix de départ, vérifiez quelques détails, puis publiez votre annonce.
                </p>
              </div>
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop" 
                  alt="Publier"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#10B981" />
            </svg>
          </button>
          <button 
            onClick={() => onNavigate('logements')}
            className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Quitter
          </button>
        </div>

        {/* Footer button */}
        <div className="absolute bottom-0 right-0 px-8 py-8">
          <button
            onClick={() => setCurrentStep('step1')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#E91E63' }}
          >
            Commencer
          </button>
        </div>
      </div>
    );
  }

  // Step 1: Introduction
  if (currentStep === 'step1') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-[calc(100vh-88px)]">
          {/* Left side */}
          <div className="flex-1 flex items-center justify-center px-12 py-16">
            <div className="max-w-lg">
              <p className="text-sm mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Étape 1
              </p>
              <h1 className="text-5xl mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.1' }}>
                Parlez-nous de votre logement
              </h1>
              <p className="text-lg" style={{ color: '#222222', lineHeight: '1.6' }}>
                Au cours de cette étape, nous allons vous demander quel type de logement vous proposez et si les voyageurs pourront le réserver dans son intégralité ou si vous ne louez qu'une chambre. Nous vous demanderons ensuite d'indiquer son emplacement et sa capacité d'accueil.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex items-center justify-center px-12 py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop" 
                alt="Logement 3D"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('intro')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('property-type')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Property type selection
  if (currentStep === 'property-type') {
    const propertyTypes = [
      { id: 'house', label: 'Maison', icon: '🏠' },
      { id: 'apartment', label: 'Appartement', icon: '🏢' },
      { id: 'barn', label: 'Grange', icon: '🚜' },
      { id: 'bnb', label: "Chambre d'hôtes", icon: '🛏️' },
      { id: 'boat', label: 'Bateau', icon: '⛵' },
      { id: 'cabin', label: 'Cabane', icon: '🏚️' },
      { id: 'rv', label: 'Caravane ou camping-car', icon: '🚐' },
      { id: 'casa', label: 'Casa particular', icon: '🏘️' },
      { id: 'castle', label: 'Château', icon: '🏰' },
      { id: 'cave', label: 'Maison troglodyte', icon: '⛰️' },
      { id: 'container', label: 'Conteneur maritime', icon: '📦' },
      { id: 'cycladic', label: 'Maison cycladique', icon: '🏛️' },
      { id: 'dammuso', label: 'Dammuso', icon: '🏠' },
      { id: 'dome', label: 'Dôme', icon: '⛺' },
      { id: 'earthhouse', label: 'Maison organique', icon: '🌍' },
      { id: 'farm', label: 'Ferme', icon: '🚜' },
      { id: 'guesthouse', label: "Maison d'hôtes", icon: '🏡' },
      { id: 'hotel', label: 'Hôtel', icon: '🏨' },
    ];

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-8 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?
          </h1>

          <div className="grid grid-cols-3 gap-4 mb-24">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-xl border-2 transition-all hover:border-gray-900 ${
                  selectedType === type.id
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-300 bg-white'
                }`}
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <div className="text-sm" style={{ fontWeight: 600, color: '#222222' }}>
                  {type.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('step1')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={!selectedType}
            onClick={() => selectedType && setCurrentStep('space-type')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              selectedType ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Space type selection
  if (currentStep === 'space-type') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Quel type de logement sera à la disposition des voyageurs ?
          </h1>

          <div className="space-y-4 mt-12">
            {/* Un logement entier */}
            <button
              onClick={() => setSelectedSpaceType('entire')}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left flex items-start justify-between ${
                selectedSpaceType === 'entire'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-300 bg-white hover:border-gray-900'
              }`}
            >
              <div className="flex-1">
                <h3 className="text-base mb-1" style={{ fontWeight: 600, color: '#222222' }}>
                  Un logement entier
                </h3>
                <p className="text-sm" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Les voyageurs disposent du logement dans son intégralité.
                </p>
              </div>
              <svg className="w-8 h-8 flex-shrink-0 ml-4" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="12" width="24" height="16" stroke="#222222" strokeWidth="2" fill="none" />
                <path d="M4 12L16 4L28 12" stroke="#222222" strokeWidth="2" fill="none" />
                <rect x="12" y="18" width="8" height="10" fill="#222222" />
              </svg>
            </button>

            {/* Une chambre */}
            <button
              onClick={() => setSelectedSpaceType('room')}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left flex items-start justify-between ${
                selectedSpaceType === 'room'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-300 bg-white hover:border-gray-900'
              }`}
            >
              <div className="flex-1">
                <h3 className="text-base mb-1" style={{ fontWeight: 600, color: '#222222' }}>
                  Une chambre
                </h3>
                <p className="text-sm" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Les voyageurs ont leur propre chambre dans un logement et ont accès à des espaces partagés.
                </p>
              </div>
              <svg className="w-8 h-8 flex-shrink-0 ml-4" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="16" width="24" height="2" fill="#222222" />
                <rect x="6" y="18" width="20" height="8" stroke="#222222" strokeWidth="2" fill="none" />
                <circle cx="24" cy="12" r="2" fill="#222222" />
              </svg>
            </button>

            {/* Une chambre partagée dans une auberge de jeunesse */}
            <button
              onClick={() => setSelectedSpaceType('shared')}
              className={`w-full p-6 rounded-xl border-2 transition-all text-left flex items-start justify-between ${
                selectedSpaceType === 'shared'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-300 bg-white hover:border-gray-900'
              }`}
            >
              <div className="flex-1">
                <h3 className="text-base mb-1" style={{ fontWeight: 600, color: '#222222' }}>
                  Une chambre partagée dans une auberge de jeunesse
                </h3>
                <p className="text-sm" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Les voyageurs dorment dans une chambre partagée dans une auberge de jeunesse gérée par un professionnel, avec du personnel sur place 24h/24, 7j/7.
                </p>
              </div>
              <svg className="w-8 h-8 flex-shrink-0 ml-4" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="12" width="24" height="16" stroke="#222222" strokeWidth="2" fill="none" />
                <path d="M4 12L16 4L28 12" stroke="#222222" strokeWidth="2" fill="none" />
                <line x1="16" y1="12" x2="16" y2="28" stroke="#222222" strokeWidth="2" />
                <circle cx="11" cy="18" r="1.5" fill="#222222" />
                <circle cx="21" cy="18" r="1.5" fill="#222222" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('property-type')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={!selectedSpaceType}
            onClick={() => selectedSpaceType && setCurrentStep('location')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              selectedSpaceType ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Location
  if (currentStep === 'location') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Où est situé votre logement ?
          </h1>
          <p className="text-base text-center mb-8" style={{ color: '#717171' }}>
            Votre adresse est uniquement communiquée aux voyageurs une fois leur réservation effectuée.
          </p>

          {/* Map Container */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6 bg-gray-100">
            {/* Simulated Google Map */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop" 
              alt="Map"
              className="w-full h-full object-cover opacity-70"
            />
            
            {/* Search Bar Overlay */}
            <div className="absolute top-4 left-4 right-4">
              <div className="bg-white rounded-lg shadow-lg flex items-center px-4 py-3">
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="#222222">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Saisissez votre adresse"
                  className="flex-1 text-sm focus:outline-none"
                  style={{ color: '#222222' }}
                />
              </div>
            </div>

            {/* Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#10B981">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('space-type')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={!address}
            onClick={() => address && setCurrentStep('confirm-address')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              address ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Confirm address
  if (currentStep === 'confirm-address') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Confirmez votre adresse
          </h1>
          <p className="text-base text-center mb-8" style={{ color: '#717171' }}>
            Votre adresse est uniquement communiquée aux voyageurs une fois leur réservation effectuée.
          </p>

          {/* Form */}
          <div className="space-y-4 mb-8">
            {/* Country */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Pays/région
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              >
                <option value="Madagascar - MG">Madagascar - MG</option>
              </select>
            </div>

            {/* Street */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Numéro et nom de rue
              </label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Rue Stanislas Paul"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Appartement, étage, immeuble (si applicable)
              </label>
              <input
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Ville
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Antananarivo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Arrondissement/région (si applicable)
              </label>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Analamanga"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-xs mb-1" style={{ color: '#717171' }}>
                Code postal
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="101"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900"
                style={{ color: '#222222' }}
              />
            </div>
          </div>

          {/* Toggle */}
          <div className="flex items-start gap-4 mb-6 p-4 border-t border-gray-200 pt-6">
            <div className="flex-1">
              <h3 className="text-sm mb-1" style={{ fontWeight: 600, color: '#222222' }}>
                Afficher l'emplacement précis de votre logement
              </h3>
              <p className="text-xs" style={{ color: '#717171', lineHeight: '1.5' }}>
                Il aidera probablement les voyageurs à se repérer sur votre logement qui consigné, tandis que leur commune, plus leurs coordonnées approximatives n'est affichée qu'à interaction
                <a href="#" className="underline"> En savoir plus</a>
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setShowPreciseLocation(!showPreciseLocation)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  showPreciseLocation ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  showPreciseLocation ? 'right-1' : 'left-1'
                }`} />
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop" 
              alt="Map"
              className="w-full h-full object-cover opacity-70"
            />
            {/* Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#E91E63">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            {/* Google attribution */}
            <div className="absolute bottom-2 right-2 text-xs bg-white px-2 py-1 rounded" style={{ color: '#717171' }}>
              Google
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('location')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('pin-location')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Pin Location - "Le repère est-il au bon endroit ?"
  if (currentStep === 'pin-location') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Le repère est-il au bon endroit ?
          </h1>
          <p className="text-base text-center mb-8" style={{ color: '#717171' }}>
            Votre adresse est uniquement communiquée aux voyageurs une fois leur réservation effectuée.
          </p>

          {/* Map Container */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
            {/* Simulated Google Map */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop" 
              alt="Map"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Address Card Overlay */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-white rounded-lg shadow-xl px-4 py-3 flex items-center gap-3 min-w-[350px]">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-sm" style={{ color: '#222222' }}>
                  Rue Ranaivo Paul, Antananarivo, Madagascar
                </span>
              </div>
            </div>
            
            {/* Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <svg className="w-14 h-14" viewBox="0 0 24 24" fill="#E91E63">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>

            {/* Map Controls */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
                <span className="text-xl" style={{ color: '#222222' }}>+</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
                <span className="text-xl" style={{ color: '#222222' }}>−</span>
              </button>
            </div>

            {/* Recenter Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <button className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ fontWeight: 600 }}>
                Déplacer la carte pour repositionner le repère
              </button>
            </div>

            {/* Google Map Attribution */}
            <div className="absolute bottom-2 left-2 text-xs bg-white px-2 py-1 rounded flex gap-2" style={{ color: '#717171' }}>
              <span>Raccourci clavier</span>
              <span>Conditions d'utilisation ©2025</span>
            </div>

            {/* Location Finder Icon */}
            <div className="absolute bottom-20 right-4">
              <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#222222" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('confirm-address')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('guest-info')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Guest Info - "Donnez les informations principales"
  if (currentStep === 'guest-info') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Donnez les informations principales concernant votre logement
          </h1>
          <p className="text-base text-center mb-12" style={{ color: '#717171' }}>
            Vous pourrez ajouter d'autres informations plus tard, comme les types de lits.
          </p>

          {/* Counter Items */}
          <div className="space-y-6">
            {/* Voyageurs */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <span className="text-base" style={{ color: '#222222' }}>Voyageurs</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={guests <= 1}
                >
                  <span className="text-lg" style={{ color: '#717171' }}>−</span>
                </button>
                <span className="text-base w-8 text-center" style={{ color: '#222222' }}>{guests}</span>
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                >
                  <span className="text-lg" style={{ color: '#717171' }}>+</span>
                </button>
              </div>
            </div>

            {/* Chambres */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <span className="text-base" style={{ color: '#222222' }}>Chambres</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={bedrooms <= 1}
                >
                  <span className="text-lg" style={{ color: '#717171' }}>−</span>
                </button>
                <span className="text-base w-8 text-center" style={{ color: '#222222' }}>{bedrooms}</span>
                <button
                  onClick={() => setBedrooms(bedrooms + 1)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                >
                  <span className="text-lg" style={{ color: '#717171' }}>+</span>
                </button>
              </div>
            </div>

            {/* Lits */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <span className="text-base" style={{ color: '#222222' }}>Lits</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setBeds(Math.max(1, beds - 1))}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={beds <= 1}
                >
                  <span className="text-lg" style={{ color: '#717171' }}>−</span>
                </button>
                <span className="text-base w-8 text-center" style={{ color: '#222222' }}>{beds}</span>
                <button
                  onClick={() => setBeds(beds + 1)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                >
                  <span className="text-lg" style={{ color: '#717171' }}>+</span>
                </button>
              </div>
            </div>

            {/* Salles de bain */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200">
              <span className="text-base" style={{ color: '#222222' }}>Salles de bain</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={bathrooms <= 1}
                >
                  <span className="text-lg" style={{ color: '#717171' }}>−</span>
                </button>
                <span className="text-base w-8 text-center" style={{ color: '#222222' }}>{bathrooms}</span>
                <button
                  onClick={() => setBathrooms(bathrooms + 1)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
                >
                  <span className="text-lg" style={{ color: '#717171' }}>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('pin-location')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('step2-intro')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Step 2 Intro - "Faites sortir votre annonce du lot"
  if (currentStep === 'step2-intro') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-[calc(100vh-88px)]">
          {/* Left side */}
          <div className="flex-1 flex items-center justify-center px-12 py-16">
            <div className="max-w-lg">
              <p className="text-sm mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Étape 2
              </p>
              <h1 className="text-5xl mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.1' }}>
                Faites sortir votre annonce du lot
              </h1>
              <p className="text-lg" style={{ color: '#222222', lineHeight: '1.6' }}>
                Au cours de cette étape, nous pourrez ajouter certains des équipements proposés dans votre logement et au moins 5 photos. Vous pourrez ensuite ajouter un titre et une description.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex items-center justify-center px-12 py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" 
                alt="3D Apartment"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('guest-info')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('amenities')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Amenities - "Indiquez aux voyageurs quels sont les équipements"
  if (currentStep === 'amenities') {
    const essentialAmenities = [
      { id: 'wifi', label: 'Wifi', icon: '📶' },
      { id: 'tv', label: 'Télévision', icon: '📺' },
      { id: 'kitchen', label: 'Cuisine', icon: '🍳' },
      { id: 'washer', label: 'Lave-linge', icon: '🧺' },
      { id: 'free-parking', label: 'Parking gratuit sur place', icon: '🚗' },
      { id: 'paid-parking', label: 'Parking payant sur place', icon: '🅿️' },
      { id: 'ac', label: 'Climatisation', icon: '❄️' },
      { id: 'workspace', label: 'Espace de travail dédié', icon: '💼' },
    ];

    const standoutAmenities = [
      { id: 'pool', label: 'Piscine', icon: '🏊' },
      { id: 'hot-tub', label: 'Jacuzzi', icon: '🛁' },
      { id: 'patio', label: 'Patio', icon: '🏡' },
    ];

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Indiquez aux voyageurs quels sont les équipements de votre logement
          </h1>
          <p className="text-base mb-12" style={{ color: '#717171' }}>
            Vous pourrez ajouter des équipements une fois votre annonce publiée.
          </p>

          {/* Essential Amenities */}
          <div className="mb-12">
            <h2 className="text-base mb-6" style={{ fontWeight: 600, color: '#222222' }}>
              Qu'en est-il de ces équipements préférés des voyageurs ?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {essentialAmenities.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedAmenities.includes(amenity.id)
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-300 bg-white hover:border-gray-900'
                  }`}
                >
                  <div className="text-2xl mb-2">{amenity.icon}</div>
                  <div className="text-sm" style={{ fontWeight: 400, color: '#222222' }}>
                    {amenity.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Standout Amenities */}
          <div className="mb-24">
            <h2 className="text-base mb-6" style={{ fontWeight: 600, color: '#222222' }}>
              Possédez-vous des équipements hors du commun ?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {standoutAmenities.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedAmenities.includes(amenity.id)
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-300 bg-white hover:border-gray-900'
                  }`}
                >
                  <div className="text-2xl mb-2">{amenity.icon}</div>
                  <div className="text-sm" style={{ fontWeight: 400, color: '#222222' }}>
                    {amenity.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('step2-intro')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('photos')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Photos - "Ajoutez quelques photos"
  if (currentStep === 'photos') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Des questions ?
            </button>
            <button 
              onClick={() => onNavigate('logements')}
              className="px-4 py-2 text-sm hover:bg-gray-50 rounded-full transition-colors border border-gray-300"
              style={{ fontWeight: 600, color: '#222222' }}
            >
              Enregistrer et quitter
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2 text-center" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Ajoutez quelques photos de votre maison
          </h1>
          <p className="text-base text-center mb-12" style={{ color: '#717171' }}>
            Pour commencer, vous aurez besoin de 5 photos. Vous pourrez en ajouter d'autres ou faire des modifications plus tard.
          </p>

          {/* Photo Upload Area */}
          <div className="relative w-full max-w-2xl mx-auto">
            <button
              onClick={() => setShowPhotoUploadModal(true)}
              className="w-full h-96 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-gray-400 transition-colors bg-gray-50"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop" 
                  alt="Camera"
                  className="w-32 h-32 object-contain opacity-60"
                />
              </div>
              <div className="px-8 py-3 rounded-lg text-sm border border-gray-900 bg-white hover:bg-gray-50 transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
                Ajoutez des photos
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('amenities')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={uploadedPhotos.length < 5}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              uploadedPhotos.length >= 5 ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: uploadedPhotos.length >= 5 ? '#222222' : '#E5E5E5', color: uploadedPhotos.length >= 5 ? '#FFFFFF' : '#B0B0B0' }}
          >
            Suivant
          </button>
        </div>

        {/* Photo Upload Modal */}
        {showPhotoUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPhotoUploadModal(false)}>
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setShowPhotoUploadModal(false)} className="hover:opacity-70">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-base" style={{ fontWeight: 600, color: '#222222' }}>
                  Ajoutez des photos
                </h2>
                <button className="hover:opacity-70">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                    <path d="M12 5v14m7-7H5" />
                  </svg>
                </button>
              </div>

              <p className="text-xs text-center mb-6" style={{ color: '#717171' }}>
                Aucune sélection actuelle
              </p>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center bg-gray-50 mb-6">
                <div className="mb-4">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  Glissez-déposez un fichier
                </h3>
                <p className="text-sm mb-4" style={{ color: '#717171' }}>
                  ou recherchez des photos
                </p>
                <button className="px-6 py-3 rounded-lg text-sm bg-black text-white hover:opacity-90 transition-opacity" style={{ fontWeight: 600 }}>
                  Parcourir
                </button>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowPhotoUploadModal(false)}
                  className="text-sm hover:underline"
                  style={{ color: '#222222', fontWeight: 600 }}
                >
                  Terminé
                </button>
                <button
                  disabled
                  className="px-6 py-3 rounded-lg text-sm opacity-40 cursor-not-allowed"
                  style={{ fontWeight: 600, backgroundColor: '#E5E5E5', color: '#B0B0B0' }}
                >
                  Ajouter les
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}