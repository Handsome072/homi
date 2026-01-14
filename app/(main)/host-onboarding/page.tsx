'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Building, Tent, Castle, Ship, TreePine, Check } from 'lucide-react';

/**
 * Page Host Onboarding Next.js
 */
export default function HostOnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<'intro' | 'step1' | 'property-type'>('intro');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const propertyTypes = [
    { id: 'house', icon: Home, label: 'Maison' },
    { id: 'apartment', icon: Building, label: 'Appartement' },
    { id: 'cabin', icon: TreePine, label: 'Cabane' },
    { id: 'tent', icon: Tent, label: 'Tente' },
    { id: 'castle', icon: Castle, label: 'Château' },
    { id: 'boat', icon: Ship, label: 'Bateau' },
  ];

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
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="text-lg mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  2 Faites sortir votre annonce du lot
                </div>
                <p className="text-base" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Ajoutez au moins 5 photos et un titre, puis rédigez une description. Nous vous aiderons à atteindre ces objectifs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="text-lg mb-2" style={{ fontWeight: 600, color: '#222222' }}>
                  3 Finalisez et publiez
                </div>
                <p className="text-base" style={{ color: '#717171', lineHeight: '1.5' }}>
                  Définissez un prix de départ, vérifiez quelques paramètres, puis publiez votre annonce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-12 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              Quitter
            </button>
            <button 
              onClick={() => setCurrentStep('step1')}
              className="px-8 py-3 bg-[#00A99D] text-white rounded-lg font-medium hover:bg-[#008B82] transition-colors flex items-center gap-2"
            >
              C'est parti !
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1 - Property Type
  if (currentStep === 'step1' || currentStep === 'property-type') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => setCurrentStep('intro')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500">Étape 1 sur 3</span>
            <button 
              onClick={() => router.push('/')}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Enregistrer et quitter
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-semibold mb-4">
            Quel type de logement proposez-vous ?
          </h1>
          <p className="text-gray-600 mb-8">
            Choisissez l'option qui décrit le mieux votre logement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 border-2 rounded-xl text-left transition-all ${
                  selectedType === type.id 
                    ? 'border-[#00A99D] bg-teal-50' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <type.icon className={`w-8 h-8 mb-3 ${selectedType === type.id ? 'text-[#00A99D]' : 'text-gray-700'}`} />
                <span className="font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </main>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-4">
          <div className="max-w-3xl mx-auto flex justify-between">
            <button 
              onClick={() => setCurrentStep('intro')}
              className="px-6 py-3 text-gray-600 hover:text-gray-900 underline"
            >
              Retour
            </button>
            <button 
              disabled={!selectedType}
              className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                selectedType 
                  ? 'bg-[#00A99D] text-white hover:bg-[#008B82]' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

