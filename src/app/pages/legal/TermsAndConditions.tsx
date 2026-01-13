import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function TermsAndConditions() {
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

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-semibold text-[#222222] mb-8">
          Conditions générales d'utilisation
        </h1>

        <p className="text-[#222222] mb-6">
          Dernière mise à jour : janvier 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            1. Objet
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les présentes conditions générales régissent l'utilisation de la plateforme HOMIQIO,
            qui met en relation des voyageurs avec des hôtes proposant des hébergements,
            des expériences et des services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            2. Inscription et compte
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Pour utiliser nos services, vous devez créer un compte en fournissant des informations
            exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants
            de connexion et de toutes les activités effectuées sur votre compte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            3. Réservations
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Lorsque vous effectuez une réservation, vous acceptez de payer le prix total indiqué,
            y compris les frais de service. Les conditions d'annulation varient selon les logements
            et sont indiquées avant la confirmation de votre réservation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            4. Responsabilités des utilisateurs
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            En tant qu'utilisateur, vous vous engagez à :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>Respecter les lois et réglementations applicables</li>
            <li>Fournir des informations exactes</li>
            <li>Respecter les autres utilisateurs</li>
            <li>Ne pas utiliser la plateforme à des fins frauduleuses</li>
            <li>Respecter les règles de chaque logement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            5. Responsabilité de HOMIQIO
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO agit en tant qu'intermédiaire et n'est pas partie aux contrats conclus entre
            hôtes et voyageurs. Nous ne garantissons pas la qualité, la sécurité ou la légalité
            des hébergements proposés, bien que nous nous efforcions de maintenir des standards élevés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            6. Propriété intellectuelle
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            L'ensemble du contenu de la plateforme HOMIQIO (textes, images, logos, logiciels)
            est protégé par les droits de propriété intellectuelle et ne peut être reproduit
            sans autorisation préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            7. Résiliation
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO se réserve le droit de suspendre ou de résilier votre compte en cas de
            violation des présentes conditions ou de comportement inapproprié.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            8. Loi applicable
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Les présentes conditions sont régies par le droit français. Tout litige sera soumis
            à la compétence des tribunaux français.
          </p>
        </section>
      </main>
    </div>
  );
}

