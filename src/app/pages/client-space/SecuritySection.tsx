import { useState } from 'react';

export function SecuritySection() {
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-8 font-semibold text-black">Connexion et sécurité</h2>

      {/* Connexion Section */}
      <div className="mb-12">
        <h3 className="text-lg mb-6 font-semibold text-black">Connexion</h3>

        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base mb-1 font-semibold text-black">Mot de passe</h4>
              {!updatingPassword && (
                <p className="text-sm text-black opacity-60">Dernière mise à jour le il y a 4 heures</p>
              )}
            </div>
            {!updatingPassword && (
              <button onClick={() => setUpdatingPassword(true)} className="text-base underline font-semibold text-black">
                Mettre à jour
              </button>
            )}
            {updatingPassword && (
              <button onClick={() => setUpdatingPassword(false)} className="text-base underline font-semibold text-black">
                Annuler
              </button>
            )}
          </div>

          {/* Formulaire de mise à jour du mot de passe */}
          {updatingPassword && (
            <div className="mt-6">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm mb-2 text-black">Nouveau mot de passe</label>
                  <input
                    type="password"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-black">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
              <button
                className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
                onClick={() => setUpdatingPassword(false)}
              >
                Mettre à jour le mot de passe
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Compte Section */}
      <div className="mb-12">
        <h3 className="text-lg mb-6 font-semibold text-black">Compte</h3>

        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base mb-1 font-semibold text-black">Désactivation de votre compte</h4>
              <p className="text-sm text-black opacity-60">Cette action est définitive</p>
            </div>
            <button onClick={() => setShowDeactivateModal(true)} className="text-base underline font-semibold text-black">
              Désactiver
            </button>
          </div>
        </div>
      </div>

      {/* Modal de désactivation du compte */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            {/* Bouton Quitter */}
            <button
              onClick={() => setShowDeactivateModal(false)}
              className="absolute top-4 right-4 text-sm underline font-semibold text-black"
            >
              Quitter
            </button>

            <h3 className="text-2xl mb-6 pr-16 font-semibold text-black">
              Pourquoi choisissez-vous de désactiver votre compte ?
            </h3>

            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="deactivation-reason" className="w-5 h-5 text-black focus:ring-2 focus:ring-black" />
                <span className="text-base text-black">Je n'utilise plus HOMIQIO.</span>
              </label>

              <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="deactivation-reason" className="w-5 h-5 text-black focus:ring-2 focus:ring-black" />
                <span className="text-base text-black">J'utilise un autre compte HOMIQIO.</span>
              </label>

              <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="deactivation-reason" className="w-5 h-5 text-black focus:ring-2 focus:ring-black" />
                <span className="text-base text-black">Autre</span>
              </label>
            </div>

            <button className="w-full px-6 py-3 rounded-lg text-base cursor-not-allowed font-semibold bg-gray-200 text-black opacity-40" disabled>
              Continuer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

