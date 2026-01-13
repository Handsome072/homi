import { ChevronRight, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LegalFooter } from '../../components/LegalFooter';
import { LegalHeader } from '../../components/LegalHeader';

export function PrivacyPolicy() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LegalHeader />

      {/* Main content */}
      <div className="px-6 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#222222' }}>
            <button onClick={() => navigate('/')} className="hover:underline">
              Accueil
            </button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <button className="hover:underline">All topics</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <button className="hover:underline">Conditions et dispositions juridiques</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <button className="hover:underline">Politique de confidentialité</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <span style={{ color: '#717171' }}>Protection des données sur HOMIQIO</span>
          </nav>

          <div className="flex gap-12">
            {/* Main content area */}
            <div className="flex-1 max-w-3xl">
              <p className="text-xs mb-3" style={{ color: '#717171' }}>
                Conditions et dispositions juridiques
              </p>

              <h1 className="text-[32px] mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
                Protection des données sur HOMIQIO
              </h1>

              <p className="text-base mb-8" style={{ color: '#222222', lineHeight: '1.6' }}>
                La Politique de confidentialité d'HOMIQIO décrit vos droits en matière de protection de la vie privée, le type de données personnelles collectées et la manière dont nous les utilisons et les communiquons.
              </p>

              {/* Politique de confidentialité section */}
              <h2 className="text-base mb-4" style={{ fontWeight: 600, color: '#222222', textDecoration: 'underline' }}>
                Politique de confidentialité
              </h2>

              <p className="text-base mb-8" style={{ color: '#222222', lineHeight: '1.6' }}>
                Veuillez consulter les politiques de confidentialité supplémentaires en suivant les liens fournis dans les documents correspondants, par exemple celles relatives à certains services d'HOMIQIO qui peuvent s'appliquer à votre situation.
              </p>

              {/* Documents complémentaires */}
              <h3 className="text-base mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                Documents complémentaires à la Politique de confidentialité
              </h3>

              <ul className="space-y-2 mb-12" style={{ paddingLeft: '20px' }}>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Supplément En dehors des États-Unis
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Supplément sur la confidentialité pour les États-Unis
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Politique en matière de cookies
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Clients Entreprise et HOMIQIO for Work
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Supplément de confidentialité pour les utilisateurs en Chine
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Supplément sur la confidentialité pour le Brésil
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Complément à la Politique de confidentialité pour les services et les expériences
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Colombie uniquement
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Turquie uniquement
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Avis de confidentialité relatif à la directive DAC7 concernant les non-utilisateurs
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Complément à la Politique de confidentialité pour l'HOMIQIO-friendly Marketplace
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Supplément relatif aux assurances
                  </a>
                </li>
                <li className="text-base" style={{ color: '#222222', listStyleType: 'disc' }}>
                  <a href="#" className="underline hover:text-gray-600">
                    Complément à la Politique de confidentialité pour HOMIQIO Créateurs
                  </a>
                </li>
              </ul>

              <p className="text-base mb-12" style={{ color: '#222222', lineHeight: '1.6' }}>
                <a href="#" className="underline hover:text-gray-600" style={{ fontWeight: 600 }}>
                  HOMIQIO.org
                </a>{' '}
                est une entité distincte et indépendante d'HOMIQIO, Inc. Consultez la{' '}
                <a href="#" className="underline hover:text-gray-600">
                  Politique de confidentialité d'HOMIQIO.org
                </a>
                .
              </p>

              {/* Sur le même sujet */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg mb-6" style={{ fontWeight: 600, color: '#222222' }}>
                  Sur le même sujet
                </h3>

                <div className="space-y-8">
                  {/* Article 0 - Nouveau */}
                  <div className="pb-8 border-b border-gray-200">
                    <p className="text-xs mb-2" style={{ color: '#717171' }}>
                      Conditions et dispositions juridiques
                    </p>
                    <h4 className="text-base mb-2 underline" style={{ fontWeight: 600, color: '#222222' }}>
                      <a href="#" className="hover:text-gray-600">
                        Politique de confidentialité
                      </a>
                    </h4>
                    <p className="text-sm" style={{ color: '#717171', lineHeight: '1.6' }}>
                      Dernière mise à jour : 6 février 2025 HOMIQIO a pour objectif de créer des liens entre les personnes pour un monde plus ouvert et inclusif. A...
                    </p>
                  </div>

                  {/* Article 1 */}
                  <div className="pb-8 border-b border-gray-200">
                    <p className="text-xs mb-2" style={{ color: '#717171' }}>
                      Conditions et dispositions juridiques
                    </p>
                    <h4 className="text-base mb-2 underline" style={{ fontWeight: 600, color: '#222222' }}>
                      <a href="#" className="hover:text-gray-600">
                        Complément en dehors des États-Unis
                      </a>
                    </h4>
                    <p className="text-sm" style={{ color: '#717171', lineHeight: '1.6' }}>
                      La présente sous-rubrique (« Sous-rubrique ») s'applique si vous résidez en dehors des États-Unis, du Brésil ou de la Chine et complète notr...
                    </p>
                  </div>

                  {/* Article 2 */}
                  <div className="pb-8">
                    <p className="text-xs mb-2" style={{ color: '#717171' }}>
                      Politique relative à la communauté HOMIQIO
                    </p>
                    <h4 className="text-base mb-2 underline" style={{ fontWeight: 600, color: '#222222' }}>
                      <a href="#" className="hover:text-gray-600">
                        Protection de votre vie privée
                      </a>
                    </h4>
                    <p className="text-sm" style={{ color: '#717171', lineHeight: '1.6' }}>
                      Afin de créer un environnement propice à la protection de la vie privée, voici quelques règles de base sur ce que nous autorisons et ce que ...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-base mb-3" style={{ fontWeight: 600, color: '#222222' }}>
                    Obtenez de l'aide pour vos réservations, votre compte et plus encore.
                  </h3>
                  <button
                    className="w-full px-6 py-3 text-white rounded-lg text-base hover:opacity-90 transition-opacity"
                    style={{ fontWeight: 600, backgroundColor: '#10B981' }}
                  >
                    Me connecter ou m'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LegalFooter activePage="privacy" />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-5 py-3 bg-gray-900 text-white rounded-lg text-sm shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2 z-50"
          style={{ fontWeight: 600 }}
        >
          <ArrowUp className="w-4 h-4" />
          Retour en haut de la page
        </button>
      )}
    </div>
  );
}

