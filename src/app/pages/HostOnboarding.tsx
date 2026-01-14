import { useState } from 'react';

type OnboardingStep = 'intro' | 'step1' | 'property-type' | 'space-type' | 'location' | 'confirm-address' | 'pin-location' | 'guest-info' | 'step2-intro' | 'amenities' | 'photos' | 'photo-upload' | 'photo-review' | 'title' | 'highlights' | 'description' | 'step3-intro' | 'reservation-settings' | 'pricing' | 'weekend-pricing' | 'discounts' | 'security' | 'final-details' | 'verification-points';

interface HostOnboardingProps {
  onNavigate: (page: string, data?: Record<string, unknown>) => void;
  initialStep?: OnboardingStep;
  onCompleteOnboarding?: () => void;
}

export function HostOnboarding({ onNavigate, initialStep = 'intro', onCompleteOnboarding }: HostOnboardingProps) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(initialStep);
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
  const [tempPhotos, setTempPhotos] = useState<string[]>([]);
  const [listingTitle, setListingTitle] = useState('');
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([]);
  const [listingDescription, setListingDescription] = useState('');
  const [reservationMode, setReservationMode] = useState<'manual' | 'instant' | null>(null);
  const [basePrice, setBasePrice] = useState(26);
  const [weekendSupplement, setWeekendSupplement] = useState(1);
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);
  const [securityFeatures, setSecurityFeatures] = useState<string[]>([]);
  const [addressCountry, setAddressCountry] = useState('Madagascar');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressApartment, setAddressApartment] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressPostalCode, setAddressPostalCode] = useState('');
  const [legalEntity, setLegalEntity] = useState<'yes' | 'no' | null>(null);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newPhotos: string[] = [];
    let processed = 0;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          newPhotos.push(e.target.result as string);
          processed++;

          if (processed === files.length) {
            setTempPhotos([...tempPhotos, ...newPhotos]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeTempPhoto = (index: number) => {
    setTempPhotos(tempPhotos.filter((_, i) => i !== index));
  };

  const importPhotos = () => {
    setUploadedPhotos([...uploadedPhotos, ...tempPhotos]);
    setTempPhotos([]);
    setShowPhotoUploadModal(false);
    if (uploadedPhotos.length + tempPhotos.length >= 5) {
      setCurrentStep('photo-review');
    }
  };

  const removeUploadedPhoto = (index: number) => {
    setUploadedPhotos(uploadedPhotos.filter((_, i) => i !== index));
  };

  const toggleHighlight = (highlight: string) => {
    if (selectedHighlights.includes(highlight)) {
      setSelectedHighlights(selectedHighlights.filter(h => h !== highlight));
    } else if (selectedHighlights.length < 2) {
      setSelectedHighlights([...selectedHighlights, highlight]);
    }
  };

  const toggleDiscount = (discount: string) => {
    if (selectedDiscounts.includes(discount)) {
      setSelectedDiscounts(selectedDiscounts.filter(d => d !== discount));
    } else {
      setSelectedDiscounts([...selectedDiscounts, discount]);
    }
  };

  const toggleSecurityFeature = (feature: string) => {
    if (securityFeatures.includes(feature)) {
      setSecurityFeatures(securityFeatures.filter(f => f !== feature));
    } else {
      setSecurityFeatures([...securityFeatures, feature]);
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
    // Auto-redirect to photo-review if we have photos
    if (uploadedPhotos.length >= 5) {
      setCurrentStep('photo-review');
      return null;
    }

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
            <label className="w-full h-96 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-gray-400 transition-colors bg-gray-50 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <div className="mb-6">
                <svg className="w-32 h-32 opacity-60" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="px-8 py-3 rounded-lg text-sm border border-gray-900 bg-white hover:bg-gray-50 transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
                Ajoutez des photos
              </div>
            </label>
          </div>

          {/* Uploaded Photos Preview */}
          {uploadedPhotos.length > 0 && (
            <div className="mt-8">
              <p className="text-sm mb-4" style={{ color: '#717171' }}>
                {uploadedPhotos.length} photo{uploadedPhotos.length > 1 ? 's' : ''} ajoutée{uploadedPhotos.length > 1 ? 's' : ''} ({5 - uploadedPhotos.length} restante{5 - uploadedPhotos.length > 1 ? 's' : ''})
              </p>
              <div className="grid grid-cols-5 gap-4">
                {uploadedPhotos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeUploadedPhoto(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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
            onClick={() => uploadedPhotos.length >= 5 && setCurrentStep('photo-review')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              uploadedPhotos.length >= 5 ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: uploadedPhotos.length >= 5 ? '#222222' : '#E5E5E5', color: uploadedPhotos.length >= 5 ? '#FFFFFF' : '#B0B0B0' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Photo Review - "Est voilà ! Est-ce que tout semble en ordre ?"
  if (currentStep === 'photo-review') {
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
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Et voilà ! Est-ce que tout semble en ordre ?
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Faites glisser les photos pour les réorganiser.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-4 mb-24">
            {uploadedPhotos.map((photo, index) => (
              <div key={index} className={`relative rounded-xl overflow-hidden ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                {index === 0 && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm" style={{ fontWeight: 600, color: '#222222' }}>
                    Photo de couverture
                  </div>
                )}
                <button
                  onClick={() => removeUploadedPhoto(index)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('photos')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('title')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Title - "À présent, donnez un titre à votre annonce"
  if (currentStep === 'title') {
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
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            À présent, donnez un titre à votre annonce
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Les titres courts sont généralement les plus efficaces. Ne vous inquiétez pas, vous pourrez toujours le modifier plus tard.
          </p>

          <textarea
            value={listingTitle}
            onChange={(e) => setListingTitle(e.target.value.slice(0, 32))}
            placeholder="Maison hôte calme"
            className="w-full h-40 p-4 border border-gray-300 rounded-xl text-lg resize-none focus:outline-none focus:border-gray-900"
            style={{ fontWeight: 500, color: '#222222' }}
          />
          <p className="text-sm mt-2" style={{ color: '#717171' }}>
            {listingTitle.length}/32
          </p>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('photo-review')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('highlights')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Highlights - "Passons maintenant à la description de votre logement"
  if (currentStep === 'highlights') {
    const highlights = [
      { id: 'peaceful', label: 'Paisible', icon: '🏛️' },
      { id: 'unique', label: 'Unique', icon: '🌟' },
      { id: 'family', label: 'Adapté aux familles', icon: '👨‍👩‍👧‍👦' },
      { id: 'elegant', label: 'Élégant', icon: '🏛️' },
      { id: 'central', label: 'Emplacement central', icon: '📍' },
      { id: 'spacious', label: 'Spacieux', icon: '🏠' },
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
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Passons maintenant à la description de votre logement
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Choisissez jusqu'à 2 points forts pour mettre en valeur ce qui rend votre logement unique.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-24">
            {highlights.map((highlight) => (
              <button
                key={highlight.id}
                onClick={() => toggleHighlight(highlight.id)}
                className={`p-6 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                  selectedHighlights.includes(highlight.id)
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-300 bg-white'
                }`}
              >
                <div className="text-2xl mb-2">{highlight.icon}</div>
                <div className="text-sm" style={{ fontWeight: 600, color: '#222222' }}>
                  {highlight.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('title')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('description')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Description - "Créez votre description"
  if (currentStep === 'description') {
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
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Créez votre description
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Décrivez les points forts de votre logement, le quartier et ce qui le rend unique.
          </p>

          <textarea
            value={listingDescription}
            onChange={(e) => setListingDescription(e.target.value.slice(0, 500))}
            placeholder="Décrivez votre logement..."
            className="w-full h-64 p-4 border border-gray-300 rounded-xl text-base resize-none focus:outline-none focus:border-gray-900"
            style={{ color: '#222222' }}
          />
          <p className="text-sm mt-2" style={{ color: '#717171' }}>
            {listingDescription.length}/500
          </p>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('highlights')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('step3-intro')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Step 3 Intro - "Terminez et publiez"
  if (currentStep === 'step3-intro') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
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
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center px-12 py-16">
            <div className="max-w-lg">
              <p className="text-sm mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Étape 3
              </p>
              <h1 className="text-5xl mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.1' }}>
                Terminez et publiez
              </h1>
              <p className="text-lg" style={{ color: '#222222', lineHeight: '1.6' }}>
                Enfin, vous allez choisir vos paramètres de réservation, définir votre tarification et publier votre annonce.
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-12 py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                alt="Publier"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('description')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('reservation-settings')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Reservation Settings - "Choisissez vos paramètres de réservation"
  if (currentStep === 'reservation-settings') {
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
          <h1 className="text-3xl mb-8" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Choisissez vos paramètres de réservation
          </h1>

          <div className="space-y-4 mb-24">
            <button
              onClick={() => setReservationMode('manual')}
              className={`w-full p-6 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                reservationMode === 'manual' ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                    Approuver ou refuser les demandes
                  </h3>
                  <p className="text-sm" style={{ color: '#717171' }}>
                    Les voyageurs doivent demander à réserver et vous pouvez accepter ou refuser.
                  </p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  reservationMode === 'manual' ? 'border-gray-900' : 'border-gray-300'
                }`}>
                  {reservationMode === 'manual' && <div className="w-3 h-3 rounded-full bg-gray-900" />}
                </div>
              </div>
            </button>

            <button
              onClick={() => setReservationMode('instant')}
              className={`w-full p-6 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                reservationMode === 'instant' ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                    Utiliser la Réservation instantanée
                  </h3>
                  <p className="text-sm" style={{ color: '#717171' }}>
                    Les voyageurs peuvent réserver automatiquement.
                  </p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  reservationMode === 'instant' ? 'border-gray-900' : 'border-gray-300'
                }`}>
                  {reservationMode === 'instant' && <div className="w-3 h-3 rounded-full bg-gray-900" />}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('step3-intro')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={!reservationMode}
            onClick={() => reservationMode && setCurrentStep('pricing')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              reservationMode ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: reservationMode ? '#222222' : '#E5E5E5', color: reservationMode ? '#FFFFFF' : '#B0B0B0' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Pricing - "À présent, définissez un prix de base"
  if (currentStep === 'pricing') {
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
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            À présent, définissez un prix de base
          </h1>
          <p className="text-base mb-12" style={{ color: '#717171' }}>
            Vous pouvez le modifier à tout moment.
          </p>

          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => setBasePrice(Math.max(1, basePrice - 1))}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                <path d="M5 12h14" />
              </svg>
            </button>
            <div className="mx-8 text-center">
              <div className="text-6xl" style={{ fontWeight: 600, color: '#222222' }}>
                €{basePrice}
              </div>
              <p className="text-sm mt-2" style={{ color: '#717171' }}>par nuit</p>
            </div>
            <button
              onClick={() => setBasePrice(basePrice + 1)}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                <path d="M12 5v14m7-7H5" />
              </svg>
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm" style={{ color: '#717171' }}>
              Prix similaires dans votre région : €20 - €35
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('reservation-settings')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('weekend-pricing')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Weekend Pricing - "Fixez un tarif week-end"
  if (currentStep === 'weekend-pricing') {
    const weekendPrice = Math.round(basePrice * (1 + weekendSupplement / 100));

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
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Fixez un tarif week-end
          </h1>
          <p className="text-base mb-12" style={{ color: '#717171' }}>
            Ajoutez un supplément pour les nuits du vendredi et du samedi.
          </p>

          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => setWeekendSupplement(Math.max(0, weekendSupplement - 1))}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                <path d="M5 12h14" />
              </svg>
            </button>
            <div className="mx-8 text-center">
              <div className="text-6xl" style={{ fontWeight: 600, color: '#222222' }}>
                +{weekendSupplement}%
              </div>
              <p className="text-sm mt-2" style={{ color: '#717171' }}>€{weekendPrice} par nuit le week-end</p>
            </div>
            <button
              onClick={() => setWeekendSupplement(weekendSupplement + 1)}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                <path d="M12 5v14m7-7H5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('pricing')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('discounts')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Discounts - "Ajoutez des réductions"
  if (currentStep === 'discounts') {
    const discountOptions = [
      { id: 'new-listing', percentage: '20%', title: 'Promotion Nouvelles annonces', description: 'Proposez une réduction de 20 % sur vos 3 premières réservations' },
      { id: 'last-minute', percentage: '4%', title: 'Réduction pour réservations de dernière minute', description: 'Pour les séjours réservés 14 jours ou moins avant l\'arrivée' },
      { id: 'weekly', percentage: '10%', title: 'Réduction à la semaine', description: 'Pour les séjours de 7 nuits ou plus' },
      { id: 'monthly', percentage: '20%', title: 'Réduction au mois', description: 'Pour les séjours de 28 nuits ou plus' },
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
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Ajoutez des réductions
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Aidez votre annonce à se démarquer et à attirer des voyageurs avec des réductions.
          </p>

          <div className="space-y-4 mb-24">
            {discountOptions.map((discount) => (
              <button
                key={discount.id}
                onClick={() => toggleDiscount(discount.id)}
                className={`w-full p-6 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                  selectedDiscounts.includes(discount.id) ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg" style={{ fontWeight: 600, color: '#222222' }}>{discount.percentage}</span>
                      <h3 className="text-base" style={{ fontWeight: 600, color: '#222222' }}>{discount.title}</h3>
                    </div>
                    <p className="text-sm" style={{ color: '#717171' }}>{discount.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectedDiscounts.includes(discount.id) ? 'border-gray-900 bg-gray-900' : 'border-gray-300'
                  }`}>
                    {selectedDiscounts.includes(discount.id) && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('weekend-pricing')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('security')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Security - "Indiquez les informations liées à la sécurité"
  if (currentStep === 'security') {
    const securityOptions = [
      { id: 'camera-exterior', label: 'Présence d\'une caméra de surveillance à l\'extérieur' },
      { id: 'noise-detector', label: 'Présence d\'un sonomètre' },
      { id: 'weapons', label: 'Présence d\'une ou plusieurs armes dans le logement' },
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
        <div className="max-w-2xl mx-auto px-8 py-16">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
            Indiquez les informations liées à la sécurité
          </h1>
          <p className="text-base mb-8" style={{ color: '#717171' }}>
            Sélectionnez tout ce qui s'applique à votre logement.
          </p>

          <div className="space-y-4 mb-24">
            {securityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleSecurityFeature(option.id)}
                className={`w-full p-6 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                  securityFeatures.includes(option.id) ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base" style={{ fontWeight: 500, color: '#222222' }}>{option.label}</span>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    securityFeatures.includes(option.id) ? 'border-gray-900 bg-gray-900' : 'border-gray-300'
                  }`}>
                    {securityFeatures.includes(option.id) && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('discounts')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            onClick={() => setCurrentStep('final-details')}
            className="px-8 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600, backgroundColor: '#222222' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Final Details - "Ajoutez quelques dernières informations"
  if (currentStep === 'final-details') {
    const isFormValid = addressStreet.trim() !== '' && addressCity.trim() !== '' && legalEntity !== null;

    return (
      <div className="min-h-screen bg-white flex flex-col">
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
        <div className="flex-1 overflow-y-auto px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl mb-8" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
              Ajoutez quelques dernières informations
            </h1>

            {/* Address Section */}
            <div className="mb-8">
              <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Adresse de facturation
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#717171' }}>Pays/région</label>
                  <select
                    value={addressCountry}
                    onChange={(e) => setAddressCountry(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900"
                  >
                    <option value="Madagascar">Madagascar</option>
                    <option value="France">France</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#717171' }}>Adresse</label>
                  <input
                    type="text"
                    value={addressStreet}
                    onChange={(e) => setAddressStreet(e.target.value)}
                    placeholder="Numéro et nom de rue"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={addressApartment}
                    onChange={(e) => setAddressApartment(e.target.value)}
                    placeholder="Appartement, suite, etc. (facultatif)"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                      placeholder="Ville"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={addressPostalCode}
                      onChange={(e) => setAddressPostalCode(e.target.value)}
                      placeholder="Code postal"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Entity Section */}
            <div className="mb-24">
              <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Êtes-vous une entité juridique ?
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => setLegalEntity('yes')}
                  className={`w-full p-4 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                    legalEntity === 'yes' ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base" style={{ fontWeight: 500, color: '#222222' }}>Oui</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      legalEntity === 'yes' ? 'border-gray-900' : 'border-gray-300'
                    }`}>
                      {legalEntity === 'yes' && <div className="w-3 h-3 rounded-full bg-gray-900" />}
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setLegalEntity('no')}
                  className={`w-full p-4 rounded-xl border-2 transition-all hover:border-gray-900 text-left ${
                    legalEntity === 'no' ? 'border-gray-900 bg-gray-50' : 'border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base" style={{ fontWeight: 500, color: '#222222' }}>Non</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      legalEntity === 'no' ? 'border-gray-900' : 'border-gray-300'
                    }`}>
                      {legalEntity === 'no' && <div className="w-3 h-3 rounded-full bg-gray-900" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep('security')}
            className="px-6 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors underline"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Retour
          </button>
          <button
            disabled={!isFormValid}
            onClick={() => isFormValid && setCurrentStep('verification-points')}
            className={`px-8 py-3 text-white rounded-lg text-base transition-opacity ${
              isFormValid ? 'hover:opacity-90' : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600, backgroundColor: isFormValid ? '#222222' : '#E5E5E5', color: isFormValid ? '#FFFFFF' : '#B0B0B0' }}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }

  // Verification Points - "Points importants à vérifier"
  if (currentStep === 'verification-points') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate('logements')} className="hover:opacity-70 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#222222" />
            </svg>
          </button>
          <div className="flex gap-3">
            <button className="text-sm hover:bg-gray-50 rounded-full transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
              Passer en mode voyageur
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
              M
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-12">
          <div className="max-w-4xl mx-auto flex gap-12">
            {/* Left side - Verification items */}
            <div className="flex-1">
              <h1 className="text-3xl mb-8" style={{ fontWeight: 600, color: '#222222' }}>
                Points importants à vérifier
              </h1>

              <div className="space-y-6">
                {/* Item 1 - Identity */}
                <button
                  onClick={() => onNavigate('identity-verification')}
                  className="w-full p-6 border border-gray-300 rounded-xl hover:border-gray-900 transition-all text-left group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                        Procédez à la vérification de votre identité
                      </h3>
                      <p className="text-sm mb-1" style={{ color: '#717171' }}>
                        Nous récupérerons des informations pour vérifier votre identité.
                      </p>
                      <button className="text-sm underline hover:opacity-70" style={{ fontWeight: 600, color: '#222222' }}>
                        Obligatoire
                      </button>
                    </div>
                    <svg className="w-6 h-6 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Item 2 - Phone */}
                <button
                  onClick={() => onNavigate('phone-verification')}
                  className="w-full p-6 border border-gray-300 rounded-xl hover:border-gray-900 transition-all text-left group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                        Confirmez votre numéro de téléphone
                      </h3>
                      <p className="text-sm mb-1" style={{ color: '#717171' }}>
                        Nous vous appellerons ou vous enverrons un SMS pour confirmer votre numéro. Les frais standards s'appliquent.
                      </p>
                      <button className="text-sm underline hover:opacity-70" style={{ fontWeight: 600, color: '#222222' }}>
                        Obligatoire
                      </button>
                    </div>
                    <svg className="w-6 h-6 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Right side - Listing preview */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  {uploadedPhotos.length > 0 ? (
                    <img
                      src={uploadedPhotos[0]}
                      alt={listingTitle || 'Maison hôte calme'}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"
                      alt="Maison hôte calme"
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-base mb-1" style={{ fontWeight: 600, color: '#222222' }}>
                      {listingTitle || 'Maison hôte calme'}
                    </h3>
                    <p className="text-sm" style={{ color: '#717171' }}>
                      {addressCity || 'Votre ville'}, {addressCountry}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}