import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LegalFooter } from '../../components/LegalFooter';
import { LegalHeader } from '../../components/LegalHeader';

export function CompanyInfo() {
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
      <div className="px-6 lg:px-20 py-12">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] mb-10" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.3' }}>
            Mentions légales
          </h1>

          {/* Content sections */}
          <div className="space-y-6 text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
            {/* Section 1 */}
            <section>
              <p className="mb-4" style={{ fontWeight: 600 }}>
                Fournisseur du site web et interlocuteur unique des destinataires du service conformément à l'article 12 du DSA :
              </p>
              <p className="mb-4">HOMIQIO Ireland UC, private unlimited company</p>

              <div className="mb-4">
                <p style={{ fontWeight: 600 }}>Siège social :</p>
                <p>8 Hanover Quay</p>
                <p>Dublin 2, D02 W5P2</p>
                <p>Irlande</p>
              </div>

              <p className="mb-2">
                <strong>Numéro de TVA intracommunautaire :</strong> IE9827384L
              </p>
              <p className="mb-2">
                <strong>Numéro d'immatriculation :</strong> (Registre du commerce irlandais) IE 511825
              </p>
              <p className="mb-2">
                <strong>Capital social :</strong> il n'existe pas d'équivalent à la notion du droit français de « capital social » en droit des sociétés irlandais.
              </p>
              <p className="mb-4">
                <strong>Conseil d'administration :</strong> Killian Pattwell, Andrea Finnegan, Richard Lombard
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <p style={{ fontWeight: 600 }}>Nous contacter :</p>
              <p className="mb-1">
                <strong>Adresse e-mail :</strong>{' '}
                <a href="mailto:terms@homiqio.com" className="text-[#10B981] underline hover:opacity-80">
                  terms@homiqio.com
                </a>
              </p>
              <p className="mb-4">
                <strong>Assistance HOMIQIO :</strong>{' '}
                <a href="https://www.homiqio.fr/help/contact_us" className="text-[#10B981] underline hover:opacity-80">
                  https://www.homiqio.fr/help/contact_us
                </a>
              </p>

              <p className="mb-4">
                HOMIQIO Ireland UC agit en qualité d'intermédiaire technique et n'intervient pas dans le choix des contenus mis en ligne par ses utilisateurs. Plus d'informations dans nos{' '}
                <button onClick={() => navigate('/terms')} className="text-[#10B981] underline hover:opacity-80">
                  Conditions de service
                </button>
              </p>

              <p className="mb-4">
                <strong>Prestataire technique (hébergeur du site web) :</strong> HOMIQIO utilise les services cloud d'Amazon Web Services pour héberger son site web. Le siège social d'Amazon Web Services est situé à l'adresse suivante : Amazon Web Services, Inc, 410 Terry Avenue North Seattle, WA 98109-5210, États-Unis.
              </p>

              <p className="mb-6">
                Veuillez noter qu'HOMIQIO Ireland UC ne s'engage pas à passer par un dispositif alternatif de résolution des litiges avec les consommateurs, et n'est pas tenu de le faire.
              </p>
            </section>

            {/* Section 3 */}
            <section className="pt-6 border-t border-gray-200">
              <p className="mb-4" style={{ fontWeight: 600 }}>
                Partie contractante relative aux services de paiement destinés aux utilisateurs dont le lieu de résidence se trouve au Royaume-Uni, en Suisse ou en Russie :
              </p>
              <div className="mb-4">
                <p>HOMIQIO Payments UK Ltd.</p>
                <p>280 Bishopsgate</p>
                <p>Londres</p>
                <p>EC2M 4AG</p>
                <p>Royaume-Uni</p>
              </div>

              <p className="mb-2">
                <strong>Numéro de l'entreprise :</strong> 09392688
              </p>
              <p className="mb-4">
                <strong>Conseil d'administration :</strong> Quent Rickerby, Bart Rubin, David Coleman
              </p>
              <p className="mb-6">
                HOMIQIO Payments UK Ltd. est autorisé et régulé par l'Autorité de bonne conduite financière (Financial Conduct Authority) en tant qu'établissement de monnaie électronique sous la référence 900596.
              </p>
            </section>

            {/* Section 4 */}
            <section className="pt-6 border-t border-gray-200">
              <p className="mb-4" style={{ fontWeight: 600 }}>
                Partie contractante relative aux services de paiement destinés aux utilisateurs dont le lieu de résidence se trouve dans l'Espace économique européen :
              </p>
              <div className="mb-4">
                <p>HOMIQIO Payments Luxembourg S.A.</p>
                <p>4, rue Henri Schnadt</p>
                <p>L-2530 Luxembourg</p>
                <p>Luxembourg</p>
              </div>

              <p className="mb-2">
                <strong>Numéro de l'entreprise :</strong> B230618
              </p>
              <p className="mb-4">
                <strong>Conseil d'administration :</strong> Thomas Belousek, Marc Hemmerling, Bart Rubin, Amit Singh
              </p>
              <p className="mb-6">
                HOMIQIO Payments Luxembourg S.A. est autorisée et régulée par la Commission de Surveillance du Secteur Financier (« CSSF ») sous le numéro de référence Z21.
              </p>
            </section>

            {/* Section 5 */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                Informations sur l'interlocuteur des autorités de l'UE dans le cadre du règlement sur les services numériques
              </h2>
              <p className="mb-6">
                Interlocuteur unique pour les autorités des États membres, la Commission européenne et le conseil d'administration conformément à l'article 11 du règlement :{' '}
                <a href="mailto:dsa-authorities@homiqio.com" className="text-[#10B981] underline hover:opacity-80">
                  dsa-authorities@homiqio.com
                </a>
                . Veuillez vous assurer que les communications sont faites en anglais ou accompagnées d'une traduction en anglais.
              </p>
            </section>

            {/* Section 6 */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                Informations sur le nombre mensuel moyen de destinataires actifs dans l'Union européenne :
              </h2>
              <p className="mb-4">
                En vertu de l'article 24, paragraphe 2, du règlement sur les services numériques, les plateformes en ligne sont tenues de publier des « informations sur le nombre mensuel moyen de destinataires actifs du service dans l'Union » avant le 17 février 2023, et tous les six mois par la suite.
              </p>
              <p className="mb-4">
                Conformément aux dispositions du règlement, y compris le Considérant 77, nous avons calculé que notre nombre mensuel moyen de destinataires actifs dans l'Union européenne pour la période du 1 févr. – 31 juil. 2025 s'élève à environ 41.7M.
              </p>
              <p>
                Nous continuerons à suivre toute évolution et publierons tous les six mois des informations sur le nombre mensuel moyen de destinataires actifs de notre service dans l'Union européenne, conformément à l'article 24, paragraphe 2, du règlement.
              </p>
            </section>
          </div>
        </div>
      </div>

      <LegalFooter activePage="company-info" />

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

