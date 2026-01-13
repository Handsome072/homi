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
              className="flex items-center gap-1 border-0"
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
            HOMIQIO est une plateforme de réservation en ligne permettant la mise en relation
            entre des utilisateurs et des hébergeurs professionnels ou particuliers pour la
            réservation d'hébergements touristiques.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1000px] mx-auto px-6 md:px-10 py-12">
        {/* Platform Role */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#222222] mb-4">
            Rôle de la plateforme
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO agit exclusivement en qualité de plateforme d'intermédiation et de réservation.
            WANDERLATE SASU :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>n'est ni propriétaire, ni gestionnaire des hébergements,</li>
            <li>n'intervient pas dans la fourniture matérielle des prestations,</li>
            <li>n'est pas partie au contrat de séjour conclu entre le client et l'hébergeur.</li>
          </ul>
        </section>

        {/* For Travelers */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-8 text-center">
            Pour les voyageurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                Sélectionnez vos dates et le nombre de voyageurs. La réservation devient ferme
                et définitive après confirmation du paiement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">3. Profitez</h3>
              <p className="text-[#484848]">
                Arrivez à votre logement et profitez de votre séjour. Recevez votre confirmation
                avec numéro de réservation par email.
              </p>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#222222] mb-4">Processus de réservation</h3>
            <ol className="list-decimal list-inside text-[#484848] space-y-2 ml-4">
              <li>Sélection de l'hébergement</li>
              <li>Vérification des dates, conditions et prix</li>
              <li>Validation de la réservation</li>
              <li>Paiement en ligne sécurisé</li>
              <li>Réception d'une confirmation électronique avec numéro de réservation</li>
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-6">
            Prix et conditions financières
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les prix affichés sont indiqués en euros, toutes taxes comprises, sauf mention contraire. Les prix comprennent :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>le prix de l'hébergement fixé par l'hébergeur,</li>
            <li>les frais de service applicables.</li>
          </ul>
          <p className="text-[#484848] leading-relaxed text-sm italic">
            Les taxes locales (ex. taxe de séjour) peuvent être exigibles directement par l'hébergeur.
          </p>
        </section>

        {/* For Hosts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-8 text-center">
            Pour les hôtes
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">1. Créez votre annonce</h3>
              <p className="text-[#484848]">
                Décrivez fidèlement votre hébergement avec photos, équipements et capacité.
                Définissez vos disponibilités et tarifs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">2. Gérez les réservations</h3>
              <p className="text-[#484848]">
                Toute réservation confirmée via la plateforme vous engage. Respectez les
                réservations et accueillez vos clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EC6D8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#5EC6D8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">3. Recevez vos paiements</h3>
              <p className="text-[#484848]">
                Les paiements sont encaissés par la plateforme ou directement par vous selon
                les modalités définies.
              </p>
            </div>
          </div>

          {/* Host Requirements */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-[#222222] mb-4">Conditions d'éligibilité</h3>
            <p className="text-[#484848] mb-3">Pour référencer un hébergement, l'hébergeur doit :</p>
            <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
              <li>disposer de la pleine capacité juridique,</li>
              <li>être légalement autorisé à proposer l'hébergement à la location,</li>
              <li>être conforme aux réglementations locales (urbanisme, sécurité, hygiène, fiscalité),</li>
              <li>fournir des informations exactes, sincères et à jour.</li>
            </ul>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-6 text-center">
            Confiance et sécurité
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-[#5EC6D8] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Paiements sécurisés</h3>
                <p className="text-sm text-[#484848]">
                  Le paiement est effectué en ligne via des prestataires de paiement sécurisés.
                  Carte bancaire, portefeuille électronique ou virement bancaire acceptés.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-[#5EC6D8] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Service client</h3>
                <p className="text-sm text-[#484848]">
                  Un service client est accessible via la plateforme pour toute question
                  relative à la réservation, facturation ou utilisation des services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#222222] mb-6">
            Annulation et modification
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les conditions d'annulation et de modification sont définies par chaque hébergeur et
            précisées avant la validation de la réservation. Le client est tenu d'en prendre
            connaissance avant toute confirmation.
          </p>
          <p className="text-[#484848] leading-relaxed text-sm">
            En cas de non-présentation du client à la date prévue (no-show), les conditions
            d'annulation de l'hébergeur s'appliquent. Aucun remboursement ne pourra être exigé
            en dehors des conditions prévues.
          </p>
        </section>

        {/* Contact */}
        <section className="text-center bg-[#5EC6D8]/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#222222] mb-4">
            Des questions ?
          </h2>
          <p className="text-[#484848] mb-4">
            Notre équipe est là pour vous aider à chaque étape de votre expérience.
          </p>
          <a
            href="mailto:contact@homiqio.com"
            className="inline-block bg-[#5EC6D8] text-white px-6 py-3 rounded-lg hover:bg-[#4db5c7] transition-colors"
          >
            Contactez-nous
          </a>
        </section>
      </main>
    </div>
  );
}

