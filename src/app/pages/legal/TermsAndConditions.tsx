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

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-semibold text-[#222222] mb-8">
          Conditions générales d'utilisation
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 1 – Identité de l'exploitant
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            La plateforme HOMIQIO est exploitée par :
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-[#484848] text-sm mb-4">
            <p className="font-semibold">WANDERLATE SASU</p>
            <p>Société par actions simplifiée unipersonnelle au capital de 250 000 €</p>
            <p>Siège social : Bureau 3, 2 place Jean V, 44000 Nantes, France</p>
            <p>RCS Nantes : 991 607 656</p>
            <p>TVA intracommunautaire : FR14991607656</p>
          </div>
          <p className="text-[#484848] leading-relaxed">
            HOMIQIO est une marque commerciale exploitée par WANDERLATE SASU.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 2 – Objet des CGU
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités et conditions d'accès, de navigation et d'utilisation de la plateforme HOMIQIO.
          </p>
          <p className="text-[#484848] leading-relaxed">
            Toute utilisation de la plateforme implique l'acceptation pleine, entière et sans réserve des présentes CGU par l'utilisateur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 3 – Définitions
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Aux fins des présentes CGU, les termes suivants ont la signification ci-dessous :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li><strong>Plateforme :</strong> le site internet, l'application mobile et les services numériques HOMIQIO</li>
            <li><strong>Utilisateur :</strong> toute personne accédant à la plateforme</li>
            <li><strong>Client :</strong> utilisateur effectuant une réservation</li>
            <li><strong>Hébergeur :</strong> professionnel ou particulier proposant un hébergement via la plateforme</li>
            <li><strong>Compte :</strong> espace personnel créé par l'utilisateur</li>
            <li><strong>Société :</strong> WANDERLATE SASU</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 4 – Accès à la plateforme
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            L'accès à la plateforme est gratuit. Certaines fonctionnalités, notamment la réservation d'hébergements, nécessitent la création d'un compte utilisateur et la fourniture d'informations exactes, à jour et complètes.
          </p>
          <p className="text-[#484848] leading-relaxed">
            La Société se réserve le droit de refuser l'accès à tout utilisateur ne respectant pas les présentes CGU.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 5 – Création et gestion du compte
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            L'utilisateur est responsable :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>de l'exactitude des informations fournies,</li>
            <li>de la confidentialité de ses identifiants,</li>
            <li>de toute activité effectuée via son compte.</li>
          </ul>
          <p className="text-[#484848] leading-relaxed">
            Toute utilisation frauduleuse ou non autorisée devra être signalée sans délai à la Société.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 6 – Description des services
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO est une plateforme de réservation en ligne permettant la mise en relation entre des utilisateurs et des hébergeurs. La Société agit exclusivement en qualité d'intermédiaire technique et commercial.
          </p>
          <p className="text-[#484848] leading-relaxed mb-4">
            La Société :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>n'est pas propriétaire des hébergements,</li>
            <li>n'exploite pas les établissements proposés,</li>
            <li>n'intervient pas dans l'exécution matérielle des séjours.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 7 – Rôle et limitation de responsabilité
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            La responsabilité de WANDERLATE SASU est strictement limitée à son rôle de plateforme. La Société ne saurait être tenue responsable :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>de la qualité, conformité ou sécurité des hébergements,</li>
            <li>des annulations, modifications ou litiges imputables aux hébergeurs,</li>
            <li>des dommages directs ou indirects subis lors du séjour.</li>
          </ul>
          <p className="text-[#484848] leading-relaxed">
            Tout litige relatif à l'hébergement concerne exclusivement le client et l'hébergeur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 8 – Processus de réservation
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Les modalités de réservation, de paiement, d'annulation et de remboursement sont définies dans les Conditions Générales de Réservation, accessibles sur la plateforme et acceptées lors de la réservation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 9 – Comportement des utilisateurs
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            L'utilisateur s'engage à :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>utiliser la plateforme de manière loyale et conforme à la loi,</li>
            <li>ne pas porter atteinte aux droits de la Société ou de tiers,</li>
            <li>ne pas utiliser la plateforme à des fins frauduleuses ou illicites.</li>
          </ul>
          <p className="text-[#484848] leading-relaxed">
            Tout manquement pourra entraîner la suspension ou la suppression du compte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 10 – Suspension et résiliation du compte
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            La Société se réserve le droit de suspendre ou résilier un compte utilisateur, sans préavis, en cas :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>de violation des CGU,</li>
            <li>de fraude avérée ou suspectée,</li>
            <li>d'atteinte à la sécurité ou à l'image de la plateforme.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 11 – Propriété intellectuelle
          </h2>
          <p className="text-[#484848] leading-relaxed">
            L'ensemble des éléments composant la plateforme HOMIQIO (textes, marques, logos, interfaces, bases de données, architecture, code) est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction ou exploitation non autorisée est strictement interdite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 12 – Données personnelles
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Les données personnelles sont traitées conformément à la réglementation applicable, notamment le RGPD. Les modalités de collecte, de traitement et d'exercice des droits des utilisateurs sont détaillées dans la Politique de confidentialité accessible sur la plateforme.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 13 – Cookies
          </h2>
          <p className="text-[#484848] leading-relaxed">
            La plateforme utilise des cookies et technologies similaires afin d'améliorer l'expérience utilisateur. Les modalités de gestion des cookies sont précisées dans la Politique cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 14 – Disponibilité de la plateforme
          </h2>
          <p className="text-[#484848] leading-relaxed">
            La Société s'efforce d'assurer un accès continu à la plateforme, sans garantie d'absence d'interruptions, notamment pour maintenance, mises à jour ou incidents techniques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 15 – Modification des CGU
          </h2>
          <p className="text-[#484848] leading-relaxed">
            La Société se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs seront informés de toute modification substantielle. Les CGU applicables sont celles en vigueur au jour de l'utilisation de la plateforme.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            Article 16 – Droit applicable et juridiction compétente
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux compétents du ressort de Nantes, sauf disposition légale impérative contraire.
          </p>
        </section>
      </main>
    </div>
  );
}

