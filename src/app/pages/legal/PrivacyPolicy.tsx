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
                Politique de Confidentialité
              </h1>

              {/* Section 1 - Identité du responsable */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  1. IDENTITÉ DU RESPONSABLE DU TRAITEMENT
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les données personnelles collectées via la plateforme HOMIQIO sont traitées par :
                </p>
                <div className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <p style={{ fontWeight: 600 }}>WANDERLATE SASU</p>
                  <p>Société par actions simplifiée unipersonnelle au capital de 250 000 €</p>
                  <p>Siège social : Bureau 3, 2 place Jean V, 44000 Nantes, France</p>
                  <p>RCS Nantes : 991 607 656</p>
                  <p>TVA intracommunautaire : FR14991607656</p>
                </div>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  HOMIQIO est une marque commerciale exploitée par WANDERLATE SASU.
                </p>
              </section>

              {/* Section 2 - Données collectées */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  2. DONNÉES PERSONNELLES COLLECTÉES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Dans le cadre de l'utilisation de la plateforme, les données suivantes peuvent être collectées :
                </p>

                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>2.1 Données d'identification</h3>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Nom, prénom</li>
                  <li style={{ listStyleType: 'disc' }}>Date de naissance (si nécessaire)</li>
                  <li style={{ listStyleType: 'disc' }}>Nationalité (le cas échéant)</li>
                </ul>

                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>2.2 Données de contact</h3>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Adresse email</li>
                  <li style={{ listStyleType: 'disc' }}>Numéro de téléphone</li>
                  <li style={{ listStyleType: 'disc' }}>Adresse postale</li>
                </ul>

                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>2.3 Données de réservation</h3>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Numéro de réservation</li>
                  <li style={{ listStyleType: 'disc' }}>Dates de séjour</li>
                  <li style={{ listStyleType: 'disc' }}>Hébergement réservé</li>
                  <li style={{ listStyleType: 'disc' }}>Historique des réservations</li>
                </ul>

                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>2.4 Données financières</h3>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Informations de paiement (traitées via prestataires sécurisés)</li>
                  <li style={{ listStyleType: 'disc' }}>Montants facturés</li>
                  <li style={{ listStyleType: 'disc' }}>Historique de facturation</li>
                </ul>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Aucune donnée bancaire sensible n'est stockée directement par WANDERLATE SASU.
                </p>

                <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>2.5 Données de navigation</h3>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Adresse IP</li>
                  <li style={{ listStyleType: 'disc' }}>Type de navigateur</li>
                  <li style={{ listStyleType: 'disc' }}>Données de connexion</li>
                  <li style={{ listStyleType: 'disc' }}>Cookies et traceurs</li>
                </ul>
              </section>

              {/* Section 3 - Finalités */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  3. FINALITÉS DES TRAITEMENTS
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Gestion des comptes utilisateurs</li>
                  <li style={{ listStyleType: 'disc' }}>Traitement et suivi des réservations</li>
                  <li style={{ listStyleType: 'disc' }}>Facturation et obligations comptables</li>
                  <li style={{ listStyleType: 'disc' }}>Service client et assistance</li>
                  <li style={{ listStyleType: 'disc' }}>Lutte contre la fraude</li>
                  <li style={{ listStyleType: 'disc' }}>Amélioration des services et de l'expérience utilisateur</li>
                  <li style={{ listStyleType: 'disc' }}>Respect des obligations légales et réglementaires</li>
                </ul>
              </section>

              {/* Section 4 - Bases légales */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  4. BASES LÉGALES DES TRAITEMENTS
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les traitements sont fondés sur :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>l'exécution d'un contrat (réservation),</li>
                  <li style={{ listStyleType: 'disc' }}>le respect d'obligations légales,</li>
                  <li style={{ listStyleType: 'disc' }}>l'intérêt légitime de la Société,</li>
                  <li style={{ listStyleType: 'disc' }}>le consentement de l'utilisateur lorsque requis.</li>
                </ul>
              </section>

              {/* Section 5 - Destinataires */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  5. DESTINATAIRES DES DONNÉES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les données personnelles peuvent être transmises :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>aux hébergeurs concernés par la réservation,</li>
                  <li style={{ listStyleType: 'disc' }}>aux prestataires techniques (hébergement, paiement, maintenance),</li>
                  <li style={{ listStyleType: 'disc' }}>aux autorités compétentes lorsque la loi l'exige.</li>
                </ul>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les prestataires agissent en qualité de sous-traitants RGPD et sont contractuellement tenus à la confidentialité et à la sécurité des données.
                </p>
              </section>

              {/* Section 6 - Transferts hors UE */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  6. TRANSFERTS HORS UNION EUROPÉENNE
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Certaines données peuvent être traitées en dehors de l'Union européenne par des prestataires techniques. Dans ce cas, WANDERLATE SASU veille à ce que ces transferts soient encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types, décisions d'adéquation).
                </p>
              </section>

              {/* Section 7 - Durée de conservation */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  7. DURÉE DE CONSERVATION DES DONNÉES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les données sont conservées :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Données de compte : durée de la relation contractuelle</li>
                  <li style={{ listStyleType: 'disc' }}>Données de réservation et facturation : 10 ans (obligations légales)</li>
                  <li style={{ listStyleType: 'disc' }}>Données marketing : 3 ans après le dernier contact</li>
                  <li style={{ listStyleType: 'disc' }}>Données de connexion : 12 mois maximum</li>
                </ul>
              </section>

              {/* Section 8 - Droits des utilisateurs */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  8. DROITS DES UTILISATEURS
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Conformément au RGPD, chaque utilisateur dispose des droits suivants :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>Droit d'accès</li>
                  <li style={{ listStyleType: 'disc' }}>Droit de rectification</li>
                  <li style={{ listStyleType: 'disc' }}>Droit d'effacement</li>
                  <li style={{ listStyleType: 'disc' }}>Droit à la limitation du traitement</li>
                  <li style={{ listStyleType: 'disc' }}>Droit d'opposition</li>
                  <li style={{ listStyleType: 'disc' }}>Droit à la portabilité</li>
                  <li style={{ listStyleType: 'disc' }}>Droit de retirer son consentement à tout moment</li>
                </ul>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les demandes peuvent être adressées via la plateforme ou par email à :{' '}
                  <a href="mailto:contact@homiqio.com" className="underline hover:text-gray-600">contact@homiqio.com</a>
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Une réponse sera apportée dans un délai maximal d'un mois.
                </p>
              </section>

              {/* Section 9 - Sécurité */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  9. SÉCURITÉ DES DONNÉES
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  WANDERLATE SASU met en œuvre des mesures techniques et organisationnelles appropriées afin d'assurer la sécurité, l'intégrité et la confidentialité des données personnelles.
                </p>
              </section>

              {/* Section 10 - Cookies */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  10. COOKIES ET TRACEURS
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La plateforme utilise des cookies et technologies similaires. Les modalités d'utilisation et de paramétrage des cookies sont détaillées dans la Politique Cookies accessible sur le site.
                </p>
              </section>

              {/* Section 11 - Réclamation */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  11. RÉCLAMATION AUPRÈS DE L'AUTORITÉ DE CONTRÔLE
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  En cas de litige non résolu, l'utilisateur peut introduire une réclamation auprès de l'autorité de contrôle compétente : CNIL – Commission Nationale de l'Informatique et des Libertés.
                </p>
              </section>

              {/* Section 12 - Modification */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  12. MODIFICATION DE LA POLITIQUE
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La présente politique de confidentialité peut être modifiée à tout moment. La version applicable est celle publiée sur la plateforme à la date de l'utilisation.
                </p>
              </section>

              {/* Politique Cookies Section */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-[28px] mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
                  Politique Cookies
                </h2>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    1. PRÉSENTATION GÉNÉRALE
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La présente politique a pour objet d'informer les utilisateurs de la plateforme HOMIQIO de l'utilisation de cookies et autres traceurs lors de leur navigation.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme HOMIQIO est exploitée par WANDERLATE SASU.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    2. QU'EST-CE QU'UN COOKIE ?
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Un cookie est un petit fichier texte déposé sur le terminal de l'utilisateur (ordinateur, tablette, smartphone) lors de la consultation d'un site internet.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les cookies permettent notamment :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>d'assurer le bon fonctionnement du site,</li>
                    <li style={{ listStyleType: 'disc' }}>d'améliorer l'expérience utilisateur,</li>
                    <li style={{ listStyleType: 'disc' }}>de mesurer l'audience,</li>
                    <li style={{ listStyleType: 'disc' }}>de proposer des services adaptés.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    3. TYPES DE COOKIES UTILISÉS
                  </h3>

                  <h4 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>3.1 Cookies strictement nécessaires (obligatoires)</h4>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Ces cookies sont indispensables au fonctionnement de la plateforme et ne nécessitent pas le consentement de l'utilisateur. Ils permettent notamment :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>l'accès sécurisé au compte utilisateur,</li>
                    <li style={{ listStyleType: 'disc' }}>la gestion des sessions,</li>
                    <li style={{ listStyleType: 'disc' }}>la sécurisation des paiements,</li>
                    <li style={{ listStyleType: 'disc' }}>la prévention de la fraude.</li>
                  </ul>

                  <h4 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>3.2 Cookies de mesure d'audience</h4>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Ces cookies permettent d'analyser la fréquentation et l'utilisation du site afin d'en améliorer les performances et l'ergonomie. Les données collectées sont agrégées et anonymisées lorsque cela est possible.
                  </p>

                  <h4 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>3.3 Cookies fonctionnels</h4>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Ces cookies permettent de mémoriser les choix effectués par l'utilisateur :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>langue,</li>
                    <li style={{ listStyleType: 'disc' }}>préférences d'affichage,</li>
                    <li style={{ listStyleType: 'disc' }}>paramètres de navigation.</li>
                  </ul>

                  <h4 className="text-base mb-2" style={{ fontWeight: 600, color: '#222222' }}>3.4 Cookies publicitaires et de personnalisation (le cas échéant)</h4>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Ces cookies permettent de proposer des contenus ou offres adaptés aux centres d'intérêt de l'utilisateur. Ils sont déposés uniquement avec le consentement préalable de l'utilisateur.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    4. COOKIES TIERS
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme peut utiliser des cookies déposés par des partenaires tiers (prestataires de paiement, outils d'analyse, services techniques). Ces partenaires agissent conformément à la réglementation en vigueur et sont soumis à leurs propres politiques de confidentialité.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    5. CONSENTEMENT DE L'UTILISATEUR
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Lors de la première visite sur la plateforme, un bandeau d'information informe l'utilisateur de l'utilisation des cookies. L'utilisateur peut :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>accepter l'ensemble des cookies,</li>
                    <li style={{ listStyleType: 'disc' }}>refuser les cookies non essentiels,</li>
                    <li style={{ listStyleType: 'disc' }}>paramétrer ses préférences.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Le consentement peut être retiré à tout moment.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    6. DURÉE DE CONSERVATION DES COOKIES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les cookies sont conservés pour une durée maximale de 13 mois, conformément aux recommandations de la CNIL.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les choix de consentement sont conservés pendant 6 mois.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    7. GESTION DES COOKIES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'utilisateur peut gérer les cookies :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>via l'outil de gestion intégré à la plateforme,</li>
                    <li style={{ listStyleType: 'disc' }}>via les paramètres de son navigateur.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La désactivation de certains cookies peut affecter le bon fonctionnement du site.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    8. DONNÉES PERSONNELLES
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les informations collectées via les cookies peuvent constituer des données personnelles. Leur traitement est détaillé dans la Politique de confidentialité accessible sur la plateforme.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    9. MODIFICATION DE LA POLITIQUE COOKIES
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La présente politique peut être modifiée à tout moment afin de se conformer aux évolutions légales ou techniques. La version applicable est celle publiée sur la plateforme à la date de la navigation.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    10. CONTACT
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Pour toute question relative à la présente politique cookies, l'utilisateur peut contacter :{' '}
                    <a href="mailto:contact@homiqio.com" className="underline hover:text-gray-600">contact@homiqio.com</a>
                  </p>
                </section>
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

