import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Globe } from 'lucide-react';
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
          Informations sur l'entreprise
        </h1>

        {/* Company Overview */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#5EC6D8]/10 to-transparent rounded-2xl p-8 mb-8">
            <img
              src={logo}
              alt="HOMIQIO Logo"
              className="w-[180px] h-auto border-0 mb-6"
            />
            <p className="text-lg text-[#484848] leading-relaxed">
              HOMIQIO est une plateforme de mise en relation entre voyageurs et hôtes,
              offrant une large sélection de logements, d'expériences et de services
              pour des séjours uniques et mémorables.
            </p>
          </div>
        </section>

        {/* Legal Information */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            Informations légales
          </h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-[#222222] mb-3">Raison sociale</h3>
              <p className="text-[#484848]">HOMIQIO SAS</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-[#222222] mb-3">Forme juridique</h3>
              <p className="text-[#484848]">Société par Actions Simplifiée (SAS)</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-[#222222] mb-3">Capital social</h3>
              <p className="text-[#484848]">100 000 €</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-[#222222] mb-3">Numéro SIRET</h3>
              <p className="text-[#484848]">XXX XXX XXX XXXXX</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-[#222222] mb-3">Numéro TVA intracommunautaire</h3>
              <p className="text-[#484848]">FR XX XXX XXX XXX</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            Coordonnées
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl">
              <MapPin className="w-5 h-5 text-[#5EC6D8] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Siège social</h3>
                <p className="text-[#484848] text-sm">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
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
              <Phone className="w-5 h-5 text-[#5EC6D8] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#222222] mb-1">Téléphone</h3>
                <p className="text-[#484848] text-sm">+33 1 XX XX XX XX</p>
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

        {/* Hosting */}
        <section>
          <h2 className="text-xl font-semibold text-[#222222] mb-6">
            Hébergement
          </h2>
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-[#484848]">
              Ce site est hébergé par :<br /><br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

