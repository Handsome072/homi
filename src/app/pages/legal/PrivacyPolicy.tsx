import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function PrivacyPolicy() {
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
            <div className="w-9" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-semibold text-[#222222] mb-8">
          Politique de confidentialité
        </h1>

        <p className="text-[#222222] mb-6">
          Dernière mise à jour : janvier 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            1. Introduction
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité
            explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles
            lorsque vous utilisez notre plateforme.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            2. Données collectées
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Nous collectons les informations que vous nous fournissez directement, notamment :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>Informations de compte (nom, email, mot de passe)</li>
            <li>Informations de profil (photo, biographie)</li>
            <li>Informations de paiement</li>
            <li>Communications avec les hôtes et voyageurs</li>
            <li>Avis et évaluations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            3. Utilisation des données
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Nous utilisons vos informations pour :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>Fournir et améliorer nos services</li>
            <li>Traiter les réservations et paiements</li>
            <li>Communiquer avec vous</li>
            <li>Personnaliser votre expérience</li>
            <li>Assurer la sécurité de la plateforme</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            4. Partage des données
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Nous pouvons partager vos informations avec :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>D'autres utilisateurs (hôtes ou voyageurs) dans le cadre d'une réservation</li>
            <li>Prestataires de services (paiement, hébergement, support)</li>
            <li>Autorités compétentes si requis par la loi</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            5. Vos droits
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
            <li>Droit de limitation du traitement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            6. Contact
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
            contactez-nous à : <a href="mailto:privacy@homiqio.com" className="text-[#5EC6D8] hover:underline">privacy@homiqio.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}

