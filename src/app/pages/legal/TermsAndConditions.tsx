import { ChevronRight, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LegalFooter } from '../../components/LegalFooter';
import { LegalHeader } from '../../components/LegalHeader';

export function TermsAndConditions() {
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
            <button className="hover:underline">All Topics</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <button className="hover:underline">Conditions et dispositions juridiques</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <button className="hover:underline">Conditions générales</button>
            <ChevronRight className="w-4 h-4" style={{ color: '#717171' }} />
            <span style={{ color: '#717171' }}>Conditions de Service</span>
          </nav>

          <div className="flex gap-12">
            {/* Main content area */}
            <div className="flex-1 max-w-3xl">
              <p className="text-xs mb-3" style={{ fontWeight: 600, color: '#717171', textTransform: 'uppercase' }}>
                Conditions et dispositions juridiques
              </p>

              <h1 className="text-[32px] mb-8" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
                Conditions Générales d'Utilisation
              </h1>

              {/* CGU - Conditions Générales d'Utilisation */}
              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 1 – IDENTITÉ DE L'EXPLOITANT
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La plateforme HOMIQIO est exploitée par :
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

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 2 – OBJET DES CGU
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités et conditions d'accès, de navigation et d'utilisation de la plateforme HOMIQIO.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Toute utilisation de la plateforme implique l'acceptation pleine, entière et sans réserve des présentes CGU par l'utilisateur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 3 – DÉFINITIONS
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Aux fins des présentes CGU, les termes suivants ont la signification ci-dessous :
                </p>
                <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}><strong>Plateforme :</strong> le site internet, l'application mobile et les services numériques HOMIQIO</li>
                  <li style={{ listStyleType: 'disc' }}><strong>Utilisateur :</strong> toute personne accédant à la plateforme</li>
                  <li style={{ listStyleType: 'disc' }}><strong>Client :</strong> utilisateur effectuant une réservation</li>
                  <li style={{ listStyleType: 'disc' }}><strong>Hébergeur :</strong> professionnel ou particulier proposant un hébergement via la plateforme</li>
                  <li style={{ listStyleType: 'disc' }}><strong>Compte :</strong> espace personnel créé par l'utilisateur</li>
                  <li style={{ listStyleType: 'disc' }}><strong>Société :</strong> WANDERLATE SASU</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 4 – ACCÈS À LA PLATEFORME
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  L'accès à la plateforme est gratuit.
                </p>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Certaines fonctionnalités, notamment la réservation d'hébergements, nécessitent la création d'un compte utilisateur et la fourniture d'informations exactes, à jour et complètes.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société se réserve le droit de refuser l'accès à tout utilisateur ne respectant pas les présentes CGU.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 5 – CRÉATION ET GESTION DU COMPTE
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  L'utilisateur est responsable :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>de l'exactitude des informations fournies,</li>
                  <li style={{ listStyleType: 'disc' }}>de la confidentialité de ses identifiants,</li>
                  <li style={{ listStyleType: 'disc' }}>de toute activité effectuée via son compte.</li>
                </ul>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Toute utilisation frauduleuse ou non autorisée devra être signalée sans délai à la Société.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 6 – DESCRIPTION DES SERVICES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  HOMIQIO est une plateforme de réservation en ligne permettant la mise en relation entre des utilisateurs et des hébergeurs.
                </p>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société agit exclusivement en qualité d'intermédiaire technique et commercial.
                </p>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société :
                </p>
                <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>n'est pas propriétaire des hébergements,</li>
                  <li style={{ listStyleType: 'disc' }}>n'exploite pas les établissements proposés,</li>
                  <li style={{ listStyleType: 'disc' }}>n'intervient pas dans l'exécution matérielle des séjours.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 7 – RÔLE ET LIMITATION DE RESPONSABILITÉ
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La responsabilité de WANDERLATE SASU est strictement limitée à son rôle de plateforme.
                </p>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société ne saurait être tenue responsable :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>de la qualité, conformité ou sécurité des hébergements,</li>
                  <li style={{ listStyleType: 'disc' }}>des annulations, modifications ou litiges imputables aux hébergeurs,</li>
                  <li style={{ listStyleType: 'disc' }}>des dommages directs ou indirects subis lors du séjour.</li>
                </ul>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Tout litige relatif à l'hébergement concerne exclusivement le client et l'hébergeur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 8 – PROCESSUS DE RÉSERVATION
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les modalités de réservation, de paiement, d'annulation et de remboursement sont définies dans les Conditions Générales de Réservation, accessibles sur la plateforme et acceptées lors de la réservation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 9 – COMPORTEMENT DES UTILISATEURS
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  L'utilisateur s'engage à :
                </p>
                <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>utiliser la plateforme de manière loyale et conforme à la loi,</li>
                  <li style={{ listStyleType: 'disc' }}>ne pas porter atteinte aux droits de la Société ou de tiers,</li>
                  <li style={{ listStyleType: 'disc' }}>ne pas utiliser la plateforme à des fins frauduleuses ou illicites.</li>
                </ul>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Tout manquement pourra entraîner la suspension ou la suppression du compte.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 10 – SUSPENSION ET RÉSILIATION DU COMPTE
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société se réserve le droit de suspendre ou résilier un compte utilisateur, sans préavis, en cas :
                </p>
                <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                  <li style={{ listStyleType: 'disc' }}>de violation des CGU,</li>
                  <li style={{ listStyleType: 'disc' }}>de fraude avérée ou suspectée,</li>
                  <li style={{ listStyleType: 'disc' }}>d'atteinte à la sécurité ou à l'image de la plateforme.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 11 – PROPRIÉTÉ INTELLECTUELLE
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  L'ensemble des éléments composant la plateforme HOMIQIO (textes, marques, logos, interfaces, bases de données, architecture, code) est protégé par les lois relatives à la propriété intellectuelle.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Toute reproduction ou exploitation non autorisée est strictement interdite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 12 – DONNÉES PERSONNELLES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les données personnelles sont traitées conformément à la réglementation applicable, notamment le RGPD.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les modalités de collecte, de traitement et d'exercice des droits des utilisateurs sont détaillées dans la Politique de confidentialité accessible sur la plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 13 – COOKIES
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La plateforme utilise des cookies et technologies similaires afin d'améliorer l'expérience utilisateur.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les modalités de gestion des cookies sont précisées dans la Politique cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 14 – DISPONIBILITÉ DE LA PLATEFORME
                </h2>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société s'efforce d'assurer un accès continu à la plateforme, sans garantie d'absence d'interruptions, notamment pour maintenance, mises à jour ou incidents techniques.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 15 – MODIFICATION DES CGU
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  La Société se réserve le droit de modifier à tout moment les présentes CGU.
                </p>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les utilisateurs seront informés de toute modification substantielle.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les CGU applicables sont celles en vigueur au jour de l'utilisation de la plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                  ARTICLE 16 – DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
                </h2>
                <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Les présentes CGU sont soumises au droit français.
                </p>
                <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                  Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux compétents du ressort de Nantes, sauf disposition légale impérative contraire.
                </p>
              </section>

              {/* CGSR - Conditions Générales de Service et de Réservation */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-[28px] mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
                  Conditions Générales de Service et de Réservation
                </h2>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 1 – IDENTITÉ DE L'EXPLOITANT
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme HOMIQIO est exploitée par :
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

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 2 – OBJET ET CHAMP D'APPLICATION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les présentes Conditions Générales de Service et de Réservation (ci-après « CGSR ») régissent :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>l'utilisation des services de réservation proposés par la plateforme HOMIQIO,</li>
                    <li style={{ listStyleType: 'disc' }}>les relations entre les utilisateurs, les hébergeurs et WANDERLATE SASU,</li>
                    <li style={{ listStyleType: 'disc' }}>toute réservation effectuée via la plateforme.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Toute réservation implique l'acceptation pleine et entière des présentes CGSR.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 3 – DÉFINITIONS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Aux fins des présentes CGSR :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}><strong>Plateforme :</strong> les services numériques HOMIQIO</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Utilisateur :</strong> toute personne utilisant la plateforme</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Client :</strong> utilisateur effectuant une réservation</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Hébergeur :</strong> professionnel ou particulier proposant un hébergement</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Réservation :</strong> contrat conclu entre le client et l'hébergeur via la plateforme</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Société :</strong> WANDERLATE SASU</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 4 – RÔLE DE LA PLATEFORME
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    HOMIQIO agit exclusivement en qualité de plateforme d'intermédiation et de réservation.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    WANDERLATE SASU :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>n'est ni propriétaire, ni gestionnaire des hébergements,</li>
                    <li style={{ listStyleType: 'disc' }}>n'intervient pas dans la fourniture matérielle des prestations,</li>
                    <li style={{ listStyleType: 'disc' }}>n'est pas partie au contrat de séjour conclu entre le client et l'hébergeur.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 5 – PROCESSUS DE RÉSERVATION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Le processus de réservation comprend les étapes suivantes :
                  </p>
                  <ol className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'decimal' }}>Sélection de l'hébergement</li>
                    <li style={{ listStyleType: 'decimal' }}>Vérification des dates, conditions et prix</li>
                    <li style={{ listStyleType: 'decimal' }}>Validation de la réservation</li>
                    <li style={{ listStyleType: 'decimal' }}>Paiement en ligne</li>
                    <li style={{ listStyleType: 'decimal' }}>Réception d'une confirmation électronique avec numéro de réservation</li>
                  </ol>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La réservation devient ferme et définitive après confirmation du paiement.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 6 – PRIX ET CONDITIONS FINANCIÈRES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les prix affichés sont indiqués en euros, toutes taxes comprises, sauf mention contraire.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les prix comprennent :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>le prix de l'hébergement fixé par l'hébergeur,</li>
                    <li style={{ listStyleType: 'disc' }}>les frais de service applicables.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les taxes locales (ex. taxe de séjour) peuvent être exigibles directement par l'hébergeur.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 7 – MODALITÉS DE PAIEMENT
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Le paiement est effectué en ligne via des prestataires de paiement sécurisés.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    WANDERLATE SASU intervient en qualité de récepteur de paiement, pour le compte de la plateforme.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les moyens de paiement acceptés peuvent inclure :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>carte bancaire,</li>
                    <li style={{ listStyleType: 'disc' }}>portefeuille électronique,</li>
                    <li style={{ listStyleType: 'disc' }}>virement bancaire.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 8 – FACTURATION ET JUSTIFICATIFS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Après paiement, une facture électronique est générée et mise à disposition dans l'espace client.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme peut également délivrer :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>confirmation de réservation,</li>
                    <li style={{ listStyleType: 'disc' }}>reçu de paiement,</li>
                    <li style={{ listStyleType: 'disc' }}>attestation de réservation à usage administratif (ex. visa).</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 9 – CONDITIONS D'ANNULATION ET DE MODIFICATION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les conditions d'annulation et de modification sont définies par chaque hébergeur et précisées avant la validation de la réservation.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Le client est tenu d'en prendre connaissance avant toute confirmation.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 10 – ANNULATION PAR L'HÉBERGEUR
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    En cas d'annulation par l'hébergeur, le client est informé dans les meilleurs délais.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme ne saurait être tenue responsable des conséquences liées à cette annulation.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 11 – ABSENCE, NON-PRÉSENTATION (NO-SHOW)
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    En cas de non-présentation du client à la date prévue, les conditions d'annulation de l'hébergeur s'appliquent.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Aucun remboursement ne pourra être exigé en dehors des conditions prévues.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 12 – OBLIGATIONS DU CLIENT
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Le client s'engage à :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>fournir des informations exactes,</li>
                    <li style={{ listStyleType: 'disc' }}>respecter les règles de l'hébergement,</li>
                    <li style={{ listStyleType: 'disc' }}>utiliser le logement de manière conforme.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 13 – RESPONSABILITÉ ET LIMITATION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    WANDERLATE SASU ne peut être tenue responsable :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>des dommages survenus lors du séjour,</li>
                    <li style={{ listStyleType: 'disc' }}>des manquements imputables à l'hébergeur,</li>
                    <li style={{ listStyleType: 'disc' }}>des litiges entre client et hébergeur.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La responsabilité de la plateforme est strictement limitée à son rôle d'intermédiaire.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 14 – FORCE MAJEURE
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Aucune des parties ne pourra être tenue responsable en cas de force majeure au sens du droit français.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 15 – SERVICE CLIENT
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Un service client est accessible via la plateforme HOMIQIO pour toute question relative à :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>la réservation,</li>
                    <li style={{ listStyleType: 'disc' }}>la facturation,</li>
                    <li style={{ listStyleType: 'disc' }}>l'utilisation des services.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 16 – DONNÉES PERSONNELLES
                  </h3>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les données personnelles sont traitées conformément à la Politique de confidentialité accessible sur la plateforme.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 17 – MODIFICATION DES CGSR
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La Société se réserve le droit de modifier les présentes CGSR à tout moment.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les CGSR applicables sont celles en vigueur à la date de la réservation.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 18 – DROIT APPLICABLE ET LITIGES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les présentes CGSR sont soumises au droit français.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Tout litige relève de la compétence exclusive des tribunaux compétents du ressort de Nantes, sauf disposition impérative contraire.
                  </p>
                </section>
              </div>

              {/* CSH - Conditions Spécifiques Hébergeurs */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-[28px] mb-6" style={{ fontWeight: 600, color: '#222222', lineHeight: '1.2' }}>
                  Conditions Spécifiques Hébergeurs
                </h2>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 1 – IDENTITÉ DE LA PLATEFORME
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme HOMIQIO est exploitée par :
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

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 2 – OBJET DES CONDITIONS SPÉCIFIQUES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les présentes Conditions Spécifiques Hébergeurs (ci-après « CSH ») ont pour objet de définir les modalités selon lesquelles les hébergeurs peuvent référencer, proposer et commercialiser leurs hébergements via la plateforme HOMIQIO.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Elles complètent :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>les CGU,</li>
                    <li style={{ listStyleType: 'disc' }}>les Conditions Générales de Service / Réservation,</li>
                    <li style={{ listStyleType: 'disc' }}>et, le cas échéant, tout contrat spécifique conclu avec l'hébergeur.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 3 – DÉFINITIONS
                  </h3>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}><strong>Hébergeur :</strong> toute personne physique ou morale proposant un hébergement via la plateforme</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Hébergement :</strong> logement ou établissement touristique proposé à la réservation</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Plateforme :</strong> HOMIQIO</li>
                    <li style={{ listStyleType: 'disc' }}><strong>Société :</strong> WANDERLATE SASU</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 4 – CONDITIONS D'ÉLIGIBILITÉ DES HÉBERGEURS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Pour référencer un hébergement, l'hébergeur déclare et garantit :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>disposer de la pleine capacité juridique,</li>
                    <li style={{ listStyleType: 'disc' }}>être légalement autorisé à proposer l'hébergement à la location,</li>
                    <li style={{ listStyleType: 'disc' }}>être conforme aux réglementations locales (urbanisme, sécurité, hygiène, fiscalité),</li>
                    <li style={{ listStyleType: 'disc' }}>fournir des informations exactes, sincères et à jour.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La Société se réserve le droit de refuser ou suspendre tout hébergement ne répondant pas à ces critères.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 5 – CRÉATION ET GESTION DU COMPTE HÉBERGEUR
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur crée un compte dédié et s'engage à :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>fournir des informations complètes et exactes,</li>
                    <li style={{ listStyleType: 'disc' }}>maintenir ses données à jour,</li>
                    <li style={{ listStyleType: 'disc' }}>préserver la confidentialité de ses identifiants.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Toute utilisation frauduleuse pourra entraîner la suspension immédiate du compte.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 6 – OBLIGATIONS DE L'HÉBERGEUR
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur s'engage notamment à :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>décrire fidèlement l'hébergement (photos, équipements, capacité),</li>
                    <li style={{ listStyleType: 'disc' }}>garantir la disponibilité aux dates proposées,</li>
                    <li style={{ listStyleType: 'disc' }}>respecter les réservations confirmées,</li>
                    <li style={{ listStyleType: 'disc' }}>accueillir les clients dans des conditions conformes aux descriptions,</li>
                    <li style={{ listStyleType: 'disc' }}>respecter les lois et réglementations applicables.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 7 – PRIX, DISPONIBILITÉS ET CONDITIONS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur est seul responsable :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>des prix affichés,</li>
                    <li style={{ listStyleType: 'disc' }}>des conditions d'annulation,</li>
                    <li style={{ listStyleType: 'disc' }}>des règles applicables au séjour.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Toute modification doit être mise à jour sur la plateforme dans les meilleurs délais.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 8 – RÉSERVATIONS ET ANNULATIONS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Toute réservation confirmée via la plateforme engage directement l'hébergeur.
                  </p>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    En cas d'annulation par l'hébergeur hors cas de force majeure, la Société se réserve le droit :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>de suspendre le compte hébergeur,</li>
                    <li style={{ listStyleType: 'disc' }}>d'imposer des pénalités contractuelles,</li>
                    <li style={{ listStyleType: 'disc' }}>d'indemniser le client, le cas échéant.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 9 – PAIEMENT ET COMMISSIONS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Selon les modalités définies par la plateforme :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>les paiements peuvent être encaissés par WANDERLATE SASU ou directement par l'hébergeur,</li>
                    <li style={{ listStyleType: 'disc' }}>une commission ou des frais de service peuvent être appliqués.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les modalités financières sont précisées dans l'interface hébergeur ou dans un accord spécifique.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 10 – OBLIGATIONS FISCALES ET SOCIALES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur est seul responsable :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>de la déclaration de ses revenus,</li>
                    <li style={{ listStyleType: 'disc' }}>du paiement des taxes applicables (TVA, taxe de séjour, impôts locaux).</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La plateforme ne saurait être tenue responsable des obligations fiscales de l'hébergeur.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 11 – RESPONSABILITÉ ET ASSURANCES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur est seul responsable :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>des dommages causés aux clients,</li>
                    <li style={{ listStyleType: 'disc' }}>de la sécurité des personnes et des biens,</li>
                    <li style={{ listStyleType: 'disc' }}>de la conformité des installations.</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Il est recommandé à l'hébergeur de souscrire une assurance responsabilité civile adaptée.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 12 – PROPRIÉTÉ INTELLECTUELLE ET LICENCE
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur concède à WANDERLATE SASU une licence non exclusive lui permettant d'utiliser :
                  </p>
                  <ul className="mb-4 pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>textes,</li>
                    <li style={{ listStyleType: 'disc' }}>photos,</li>
                    <li style={{ listStyleType: 'disc' }}>descriptions,</li>
                  </ul>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    aux seules fins de diffusion et de promotion de l'hébergement sur la plateforme.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 13 – CONFIDENTIALITÉ ET DONNÉES PERSONNELLES
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les données personnelles sont traitées conformément à la Politique de confidentialité.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    L'hébergeur s'engage à respecter le RGPD dans le cadre de l'exécution des réservations.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 14 – SUSPENSION ET RÉSILIATION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La Société peut suspendre ou résilier le compte hébergeur en cas :
                  </p>
                  <ul className="pl-6" style={{ color: '#222222', lineHeight: '1.6' }}>
                    <li style={{ listStyleType: 'disc' }}>de non-respect des présentes CSH,</li>
                    <li style={{ listStyleType: 'disc' }}>de litiges répétés avec les clients,</li>
                    <li style={{ listStyleType: 'disc' }}>d'atteinte à l'image ou à la sécurité de la plateforme.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 15 – MODIFICATION DES CONDITIONS
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    La Société se réserve le droit de modifier les présentes CSH à tout moment.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les conditions applicables sont celles en vigueur à la date d'utilisation de la plateforme par l'hébergeur.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg mb-4" style={{ fontWeight: 600, color: '#222222' }}>
                    ARTICLE 16 – DROIT APPLICABLE ET JURIDICTION
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Les présentes CSH sont soumises au droit français.
                  </p>
                  <p className="text-base" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Tout litige relève de la compétence exclusive des tribunaux compétents du ressort de Nantes, sauf disposition impérative contraire.
                  </p>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl mb-3" style={{ fontWeight: 600, color: '#222222' }}>
                    Besoin de nous joindre ?
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Commençons par quelques questions afin de mieux vous orienter.
                  </p>
                  <button className="w-full px-6 py-3 bg-white border border-gray-900 rounded-lg text-base hover:bg-gray-50 transition-colors" style={{ fontWeight: 600, color: '#222222' }}>
                    Contactez-nous
                  </button>
                  <p className="text-sm mt-4" style={{ color: '#222222', lineHeight: '1.6' }}>
                    Vous pouvez également nous{' '}
                    <a href="#" className="underline hover:text-gray-600">
                      envoyer vos remarques
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LegalFooter activePage="terms" />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-5 py-3 bg-gray-900 text-white rounded-full text-sm shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2 z-50"
          style={{ fontWeight: 600 }}
        >
          <ArrowUp className="w-4 h-4" />
          Retour en haut de la page
        </button>
      )}
    </div>
  );
}

