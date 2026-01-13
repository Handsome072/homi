import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Calendar, CreditCard, Home, Star, Shield } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-20 py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors border-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity duration-200 border-0"
            >
              <img
                src={logo}
                alt="HOMIQIO Logo"
                className="w-[120px] h-auto border-0"
              />
            </button>
            <div className="w-9" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5EC6D8]/10 to-white py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h1 className="text-4xl font-semibold text-[#222222] mb-4">
            Comment fonctionne HOMIQIO
          </h1>
          <p className="text-lg text-[#484848]">
            Découvrez comment réserver votre prochain logement, vivre des expériences uniques
            ou trouver des services de qualité.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1000px] mx-auto px-6 md:px-10 py-12">
        {/* For Travelers */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-8 text-center">
            Pour les voyageurs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">1. Recherchez</h3>
              <p className="text-[#484848]">
                Explorez notre sélection de logements, expériences et services. Utilisez les filtres
                pour trouver exactement ce que vous cherchez.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">2. Réservez</h3>
              <p className="text-[#484848]">
                Sélectionnez vos dates, le nombre de voyageurs et envoyez votre demande.
                L'hôte confirmera votre réservation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">3. Profitez</h3>
              <p className="text-[#484848]">
                Arrivez à votre logement et profitez de votre séjour. L'hôte vous fournira
                toutes les informations nécessaires.
              </p>
            </div>
          </div>
        </section>

        {/* For Hosts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-8 text-center">
            Pour les hôtes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">1. Créez votre annonce</h3>
              <p className="text-[#484848]">
                Décrivez votre logement, ajoutez des photos attractives et définissez
                vos disponibilités et tarifs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">2. Recevez des réservations</h3>
              <p className="text-[#484848]">
                Acceptez ou refusez les demandes de réservation. Communiquez avec
                vos voyageurs via la messagerie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">3. Soyez payé</h3>
              <p className="text-[#484848]">
                Recevez votre paiement 24h après l'arrivée de vos voyageurs,
                directement sur votre compte bancaire.
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#222222] mb-6 text-center">
            Confiance et sécurité
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-[#5EC6D8] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Protection des paiements</h3>
                <p className="text-sm text-[#484848]">
                  Vos paiements sont sécurisés et ne sont versés aux hôtes qu'après votre arrivée.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-[#5EC6D8] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Avis vérifiés</h3>
                <p className="text-sm text-[#484848]">
                  Seuls les voyageurs ayant effectué un séjour peuvent laisser un avis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

