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
            <div className="w-9" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-semibold text-[#222222] mb-8">
          Politique de confidentialité
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            1. Identité du responsable du traitement
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les données personnelles collectées via la plateforme HOMIQIO sont traitées par :
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
            2. Données personnelles collectées
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Dans le cadre de l'utilisation de la plateforme, les données suivantes peuvent être collectées :
          </p>

          <h3 className="text-lg font-semibold text-[#222222] mb-2">2.1 Données d'identification</h3>
          <ul className="list-disc list-inside text-[#484848] space-y-1 ml-4 mb-4">
            <li>Nom, prénom</li>
            <li>Date de naissance (si nécessaire)</li>
            <li>Nationalité (le cas échéant)</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#222222] mb-2">2.2 Données de contact</h3>
          <ul className="list-disc list-inside text-[#484848] space-y-1 ml-4 mb-4">
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#222222] mb-2">2.3 Données de réservation</h3>
          <ul className="list-disc list-inside text-[#484848] space-y-1 ml-4 mb-4">
            <li>Numéro de réservation</li>
            <li>Dates de séjour</li>
            <li>Hébergement réservé</li>
            <li>Historique des réservations</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#222222] mb-2">2.4 Données financières</h3>
          <ul className="list-disc list-inside text-[#484848] space-y-1 ml-4 mb-4">
            <li>Informations de paiement (traitées via prestataires sécurisés)</li>
            <li>Montants facturés</li>
            <li>Historique de facturation</li>
          </ul>
          <p className="text-[#484848] leading-relaxed mb-4 text-sm italic">
            Aucune donnée bancaire sensible n'est stockée directement par WANDERLATE SASU.
          </p>

          <h3 className="text-lg font-semibold text-[#222222] mb-2">2.5 Données de navigation</h3>
          <ul className="list-disc list-inside text-[#484848] space-y-1 ml-4">
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Données de connexion</li>
            <li>Cookies et traceurs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            3. Finalités des traitements
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les données personnelles sont collectées et traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>Gestion des comptes utilisateurs</li>
            <li>Traitement et suivi des réservations</li>
            <li>Facturation et obligations comptables</li>
            <li>Service client et assistance</li>
            <li>Lutte contre la fraude</li>
            <li>Amélioration des services et de l'expérience utilisateur</li>
            <li>Respect des obligations légales et réglementaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            4. Bases légales des traitements
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les traitements sont fondés sur :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li>L'exécution d'un contrat (réservation)</li>
            <li>Le respect d'obligations légales</li>
            <li>L'intérêt légitime de la Société</li>
            <li>Le consentement de l'utilisateur lorsque requis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            5. Destinataires des données
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les données personnelles peuvent être transmises :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>Aux hébergeurs concernés par la réservation</li>
            <li>Aux prestataires techniques (hébergement, paiement, maintenance)</li>
            <li>Aux autorités compétentes lorsque la loi l'exige</li>
          </ul>
          <p className="text-[#484848] leading-relaxed text-sm">
            Les prestataires agissent en qualité de sous-traitants RGPD et sont contractuellement tenus à la confidentialité et à la sécurité des données.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            6. Transferts hors Union Européenne
          </h2>
          <p className="text-[#484848] leading-relaxed">
            Certaines données peuvent être traitées en dehors de l'Union européenne par des prestataires techniques. Dans ce cas, WANDERLATE SASU veille à ce que ces transferts soient encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types, décisions d'adéquation).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            7. Durée de conservation des données
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Les données sont conservées :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4">
            <li><strong>Données de compte :</strong> durée de la relation contractuelle</li>
            <li><strong>Données de réservation et facturation :</strong> 10 ans (obligations légales)</li>
            <li><strong>Données marketing :</strong> 3 ans après le dernier contact</li>
            <li><strong>Données de connexion :</strong> 12 mois maximum</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            8. Droits des utilisateurs
          </h2>
          <p className="text-[#484848] leading-relaxed mb-4">
            Conformément au RGPD, chaque utilisateur dispose des droits suivants :
          </p>
          <ul className="list-disc list-inside text-[#484848] space-y-2 ml-4 mb-4">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit d'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
            <li>Droit de retirer son consentement à tout moment</li>
          </ul>
          <p className="text-[#484848] leading-relaxed">
            Les demandes peuvent être adressées via la plateforme ou par email à : <a href="mailto:contact@homiqio.com" className="text-[#5EC6D8] hover:underline">contact@homiqio.com</a>. Une réponse sera apportée dans un délai maximal d'un mois.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            9. Sécurité des données
          </h2>
          <p className="text-[#484848] leading-relaxed">
            WANDERLATE SASU met en œuvre des mesures techniques et organisationnelles appropriées afin d'assurer la sécurité, l'intégrité et la confidentialité des données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            10. Cookies et traceurs
          </h2>
          <p className="text-[#484848] leading-relaxed">
            La plateforme utilise des cookies et technologies similaires. Les modalités d'utilisation et de paramétrage des cookies sont détaillées dans notre Politique Cookies accessible sur le site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            11. Réclamation auprès de l'autorité de contrôle
          </h2>
          <p className="text-[#484848] leading-relaxed">
            En cas de litige non résolu, l'utilisateur peut introduire une réclamation auprès de l'autorité de contrôle compétente : <strong>CNIL – Commission Nationale de l'Informatique et des Libertés</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#222222] mb-4">
            12. Modification de la politique
          </h2>
          <p className="text-[#484848] leading-relaxed">
            La présente politique de confidentialité peut être modifiée à tout moment. La version applicable est celle publiée sur la plateforme à la date de l'utilisation.
          </p>
        </section>
      </main>
    </div>
  );
}

