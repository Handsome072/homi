import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Globe } from 'lucide-react';
import logo from 'figma:asset/logo.png';

export function CompanyInfo() {
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
        <h1 className="text-3xl font-semibold text-[#222222] mb-4">
          Mentions légales
        </h1>
        <p className="text-[#484848] mb-8">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique (LCEN), il est précisé aux utilisateurs du site HOMIQIO
          l'identité des différents intervenants dans le cadre de sa réalisation et de son exploitation.
        </p>

        {/* Site Editor */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            1. Éditeur du site
          </h2>
          <div className="bg-gradient-to-r from-[#5EC6D8]/10 to-transparent rounded-2xl p-8">
            <img
              src={logo}
              alt="HOMIQIO Logo"
              className="w-[180px] h-auto border-0 mb-6"
            />
            <p className="text-[#484848] leading-relaxed mb-4">
              Le site HOMIQIO est édité et exploité par :
            </p>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="font-semibold text-[#222222]">WANDERLATE SASU</p>
              <p className="text-[#484848]">Société par actions simplifiée unipersonnelle au capital de 250 000 €</p>
              <p className="text-[#484848]">Siège social : Bureau 3, 2 place Jean V, 44000 Nantes, France</p>
              <p className="text-[#484848]">RCS Nantes : 991 607 656</p>
              <p className="text-[#484848]">SIREN : 991 607 656</p>
              <p className="text-[#484848]">TVA intracommunautaire : FR14991607656</p>
            </div>
            <p className="text-[#484848] mt-4 italic">
              HOMIQIO est une marque commerciale exploitée par WANDERLATE SASU.
            </p>
          </div>
        </section>

        {/* Site Hosting */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            2. Hébergement du site
          </h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-[#484848] mb-4">Le site est hébergé par :</p>
            <p className="font-semibold text-[#222222]">o2switch</p>
            <p className="text-[#484848]">Chemin des Pardiaux, 63000 Clermont-Ferrand, France</p>
            <p className="text-[#484848]">Téléphone : 04 44 44 60 40 (assistance technique)</p>
            <p className="text-[#484848]">
              Email : <a href="mailto:support@o2switch.fr" className="text-[#5EC6D8] hover:underline">support@o2switch.fr</a> (support technique)
            </p>
          </div>
        </section>

        {/* Platform Purpose */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            3. Objet de la plateforme
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            HOMIQIO est une plateforme de réservation en ligne permettant la mise en relation
            entre des utilisateurs et des hébergeurs professionnels ou particuliers pour la
            réservation d'hébergements touristiques.
          </p>
          <p className="text-[#484848] leading-relaxed italic">
            HOMIQIO intervient exclusivement en qualité de plateforme intermédiaire de réservation
            et n'est ni propriétaire, ni exploitant des hébergements proposés, sauf mention contraire explicite.
          </p>
        </section>

        {/* Liability */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            4. Responsabilité
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            WANDERLATE SASU, exploitant de la plateforme HOMIQIO, s'efforce d'assurer l'exactitude
            et la mise à jour des informations diffusées sur le site. Toutefois, elle ne saurait être tenue responsable :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>des erreurs, omissions ou inexactitudes des contenus fournis par les hébergeurs,</li>
            <li>des indisponibilités temporaires du site,</li>
            <li>de l'exécution ou de la qualité des prestations fournies par les hébergeurs.</li>
          </ul>
          <p className="text-[#484848] leading-relaxed text-sm">
            La responsabilité de WANDERLATE SASU est strictement limitée à son rôle d'intermédiaire
            technique et commercial.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            5. Propriété intellectuelle
          </h2>
          <p className="text-[#484848] leading-relaxed">
            L'ensemble des éléments constituant le site HOMIQIO (textes, graphismes, logos, marques,
            interfaces, bases de données, structure générale) est protégé par le droit de la propriété
            intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou
            partielle, sans autorisation écrite préalable de WANDERLATE SASU, est strictement interdite.
          </p>
        </section>

        {/* Personal Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            6. Données personnelles
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les données personnelles collectées via la plateforme HOMIQIO sont traitées conformément
            à la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement, de limitation
            et d'opposition concernant leurs données personnelles.
          </p>
          <p className="text-[#484848] leading-relaxed">
            Toute demande peut être adressée via la plateforme ou à l'adresse :
            <a href="mailto:contact@homiqio.com" className="text-[#5EC6D8] hover:underline ml-1">contact@homiqio.com</a>
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            7. Cookies
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Le site HOMIQIO utilise des cookies et technologies similaires afin d'améliorer l'expérience
            utilisateur, mesurer l'audience et sécuriser les services. L'utilisateur peut paramétrer ses
            préférences en matière de cookies à tout moment via les outils mis à disposition sur le site.
          </p>
        </section>

        {/* Applicable Law */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            8. Droit applicable
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. Tout litige relatif à
            l'utilisation du site relève de la compétence exclusive des tribunaux français
            territorialement compétents.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl">
              <MapPin className="w-5 h-5 text-[#5EC6D8] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Siège social</h3>
                <p className="text-[#484848] text-sm">
                  Bureau 3, 2 place Jean V<br />
                  44000 Nantes, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl">
              <Mail className="w-5 h-5 text-[#5EC6D8] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Email</h3>
                <a href="mailto:contact@homiqio.com" className="text-[#5EC6D8] hover:underline text-sm">
                  contact@homiqio.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl">
              <Globe className="w-5 h-5 text-[#5EC6D8] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Site web</h3>
                <a href="https://www.homiqio.com" className="text-[#5EC6D8] hover:underline text-sm">
                  www.homiqio.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

