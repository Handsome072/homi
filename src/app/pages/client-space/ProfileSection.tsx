import { useState } from 'react';

export function ProfileSection() {
  const [editingOfficialName, setEditingOfficialName] = useState(false);
  const [editingPreferredName, setEditingPreferredName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [addingResidentialAddress, setAddingResidentialAddress] = useState(false);
  const [addingPostalAddress, setAddingPostalAddress] = useState(false);
  const [addingEmergencyContact, setAddingEmergencyContact] = useState(false);
  const [verificationStep, setVerificationStep] = useState<'none' | 'intro' | 'choice' | 'form'>('none');
  const [verificationType, setVerificationType] = useState<'official' | 'id'>('official');

  const isAnyEditing = editingOfficialName || editingPreferredName || editingEmail || addingResidentialAddress || addingPostalAddress || addingEmergencyContact;

  const getFieldDisabledStyle = (isCurrentEditing: boolean) => {
    if (isAnyEditing && !isCurrentEditing) return 'text-black opacity-40';
    return 'text-black';
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-8 font-semibold text-black">Informations personnelles</h2>

      {/* Liste des informations */}
      <div className="space-y-0">
        {/* Nom officiel */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(editingOfficialName)}`}>Nom officiel</h4>
              <p className={`text-sm ${getFieldDisabledStyle(editingOfficialName)}`}>Anderson Rajliona</p>
            </div>
            {!isAnyEditing && (
              <button onClick={() => setEditingOfficialName(true)} className="text-sm underline font-semibold text-black">
                Modifier
              </button>
            )}
            {isAnyEditing && !editingOfficialName && (
              <button className="text-sm underline text-black opacity-40 font-semibold" disabled>
                Modifier
              </button>
            )}
          </div>

          {editingOfficialName && (
            <div className="mt-6">
              <p className="text-sm mb-4 text-black opacity-60">
                Assurez-vous que le nom correspond à celui qui figure sur votre pièce d'identité.
              </p>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Prénom sur la pièce d'identité"
                  defaultValue="Andson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Nom sur la pièce d'identité"
                  defaultValue="Rajsona"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setEditingOfficialName(false)}
                  className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
                >
                  Enregistrer
                </button>
                <button onClick={() => setEditingOfficialName(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Prénom d'usage */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(editingPreferredName)}`}>Prénom d'usage</h4>
              {!editingPreferredName ? (
                <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-[#5EC6D8]'}`}>Information non fournie</p>
              ) : (
                <p className="text-sm text-black opacity-60">
                  Voici comment votre prénom s'affichera pour les hôtes et les voyageurs.{' '}
                  <a href="#" className="underline">En savoir plus</a>
                </p>
              )}
            </div>
            {!isAnyEditing && (
              <button onClick={() => setEditingPreferredName(true)} className="text-sm underline font-semibold text-black">
                Ajouter
              </button>
            )}
            {isAnyEditing && !editingPreferredName && (
              <button className="text-sm underline text-black opacity-40 font-semibold" disabled>
                Ajouter
              </button>
            )}
          </div>

          {editingPreferredName && (
            <div className="mt-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Prénom d'usage (facultatif)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setEditingPreferredName(false)}
                  className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
                >
                  Enregistrer
                </button>
                <button onClick={() => setEditingPreferredName(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Adresse e-mail */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(editingEmail)}`}>Adresse e-mail</h4>
              <p className={`text-sm ${getFieldDisabledStyle(editingEmail)}`}>a***y@gmail.com</p>
            </div>
            {!isAnyEditing && (
              <button onClick={() => setEditingEmail(true)} className="text-sm underline font-semibold text-black">
                Modifier
              </button>
            )}
            {isAnyEditing && !editingEmail && (
              <button className="text-sm underline text-black opacity-40 font-semibold" disabled>
                Modifier
              </button>
            )}
          </div>

          {editingEmail && (
            <div className="mt-6">
              <p className="text-sm mb-4 text-black opacity-60">Utilisez une adresse à laquelle vous aurez toujours accès.</p>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  defaultValue="a***y@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setEditingEmail(false)}
                  className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
                >
                  Enregistrer
                </button>
                <button onClick={() => setEditingEmail(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Numéro de téléphone */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${isAnyEditing ? 'text-black opacity-40' : 'text-black'}`}>Numéro de téléphone</h4>
              <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-black opacity-60'}`}>
                Ajoutez un numéro pour que les voyageurs confirmés et HOMIQIO puissent vous joindre.
              </p>
            </div>
            <button className={`text-sm underline flex-shrink-0 ml-4 font-semibold ${isAnyEditing ? 'text-black opacity-40' : 'text-black'}`} disabled={isAnyEditing}>
              Ajouter
            </button>
          </div>
        </div>

        {/* Vérification d'identité */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${isAnyEditing ? 'text-black opacity-40' : 'text-black'}`}>Vérification d'identité</h4>
              <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-black opacity-60'}`}>Procédure non commencée</p>
            </div>
            {!isAnyEditing && (
              <button
                onClick={() => setVerificationStep('intro')}
                className="text-sm underline flex-shrink-0 ml-4 font-semibold text-black"
              >
                Commencer
              </button>
            )}
            {isAnyEditing && (
              <button className="text-sm underline flex-shrink-0 ml-4 font-semibold text-black opacity-40" disabled>
                Commencer
              </button>
            )}
          </div>
        </div>

        {/* Adresse résidentielle */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(addingResidentialAddress)}`}>Adresse résidentielle</h4>
              <p className={`text-sm ${isAnyEditing && !addingResidentialAddress ? 'text-black opacity-40' : 'text-[#5EC6D8]'}`}>Information non fournie</p>
            </div>
            {!isAnyEditing && (
              <button onClick={() => setAddingResidentialAddress(true)} className="text-sm underline flex-shrink-0 ml-4 font-semibold text-black">
                Ajouter
              </button>
            )}
            {isAnyEditing && !addingResidentialAddress && (
              <button className="text-sm underline flex-shrink-0 ml-4 text-black opacity-40 font-semibold" disabled>
                Ajouter
              </button>
            )}
          </div>

          {addingResidentialAddress && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-black">Adresse résidentielle</h4>
                <button onClick={() => setAddingResidentialAddress(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" defaultValue="Madagascar">
                  <option value="" disabled>Pays/région</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="France">France</option>
                  <option value="USA">États-Unis</option>
                </select>
                <input type="text" placeholder="Numéro et libellé de voie" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Appartement, étage, immeuble (si applicable)" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Commune" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Province/État/territoire (si applicable)" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Code postal (si applicable)" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <button className="px-6 py-3 rounded-lg text-base cursor-not-allowed font-semibold bg-gray-200 text-black opacity-40" disabled>
                Enregistrer
              </button>
            </div>
          )}
        </div>

        {/* Adresse postale */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(addingPostalAddress)}`}>Adresse postale</h4>
              <p className={`text-sm ${isAnyEditing && !addingPostalAddress ? 'text-black opacity-40' : 'text-[#5EC6D8]'}`}>Information non fournie</p>
            </div>
            {!isAnyEditing && (
              <button onClick={() => setAddingPostalAddress(true)} className="text-sm underline flex-shrink-0 ml-4 font-semibold text-black">
                Ajouter
              </button>
            )}
            {isAnyEditing && !addingPostalAddress && (
              <button className="text-sm underline flex-shrink-0 ml-4 text-black opacity-40 font-semibold" disabled>
                Ajouter
              </button>
            )}
          </div>

          {addingPostalAddress && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-black">Adresse postale</h4>
                <button onClick={() => setAddingPostalAddress(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" defaultValue="France">
                  <option value="" disabled>Pays/région</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="France">France</option>
                  <option value="USA">États-Unis</option>
                </select>
                <input type="text" placeholder="Adresse postale" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Appartement, bâtiment (facultatif)" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Code postal" className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="text" placeholder="Ville" className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
              <button className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold" onClick={() => setAddingPostalAddress(false)}>
                Enregistrer
              </button>
            </div>
          )}
        </div>

        {/* Numéros d'urgence */}
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(addingEmergencyContact)}`}>Numéros d'urgence</h4>
              {!addingEmergencyContact ? (
                <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-[#5EC6D8]'}`}>Information non fournie</p>
              ) : (
                <p className="text-sm text-black opacity-60">Un contact de confiance que nous pourrons appeler en cas d'urgence.</p>
              )}
            </div>
            {!isAnyEditing && (
              <button onClick={() => setAddingEmergencyContact(true)} className="text-sm underline flex-shrink-0 ml-4 font-semibold text-black">
                Ajouter
              </button>
            )}
            {isAnyEditing && !addingEmergencyContact && (
              <button className="text-sm underline flex-shrink-0 ml-4 text-black opacity-40 font-semibold" disabled>
                Ajouter
              </button>
            )}
          </div>

          {addingEmergencyContact && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-semibold text-black">Numéros d'urgence</h4>
                <button onClick={() => setAddingEmergencyContact(false)} className="text-base underline font-semibold text-black">
                  Annuler
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <input type="text" placeholder="Nom" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" placeholder="Relation" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black">
                  <option value="" disabled selected>Langue préférée</option>
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="es">Espagnol</option>
                </select>
                <input type="email" placeholder="Adresse e-mail" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black">
                    <option value="" disabled selected>Indicatif téléphonique...</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+261">+261 (Madagascar)</option>
                  </select>
                  <input type="tel" placeholder="Numéro de téléphone" className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
              <button className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold" onClick={() => setAddingEmergencyContact(false)}>
                Enregistrer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Identity Verification Modal */}
      {verificationStep !== 'none' && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
          {/* Header */}
          <header className="border-b border-gray-200 px-6 lg:px-20 py-5 flex items-center justify-between">
            <button
              onClick={() => setVerificationStep('none')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 1.5C11.5 1.5 7.5 4 5.5 7.5C3.5 11 3 15 4.5 19C6 23 9.5 26.5 13 28.5C14 29 15 29.5 16 29.5C17 29.5 18 29 19 28.5C22.5 26.5 26 23 27.5 19C29 15 28.5 11 26.5 7.5C24.5 4 20.5 1.5 16 1.5ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z"
                  fill="#10B981"
                />
              </svg>
              <span className="text-[#10B981] text-xl ml-1 hidden sm:block font-semibold">HOMIQIO</span>
            </button>
          </header>

          {/* Step 1: Introduction */}
          {verificationStep === 'intro' && (
            <div className="max-w-lg mx-auto px-6 py-16">
              <h1 className="text-2xl text-center mb-4 font-semibold text-black">
                Faites vérifier votre identité pour effectuer une réservation ou accueillir des voyageurs
              </h1>
              <p className="text-center text-sm text-gray-600 mb-8">
                Nous demandons aux utilisateurs de faire vérifier leur identité pour assurer la sécurité de la communauté HOMIQIO.
              </p>

              {/* Profile icon */}
              <div className="flex justify-center mb-8">
                <div className="relative bg-gray-100 rounded-2xl p-12 shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        1
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-12 h-3 bg-gray-300 rounded"></div>
                      <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setVerificationStep('choice')}
                className="w-full py-3 bg-gray-900 text-white rounded-lg text-base transition-colors hover:bg-gray-800 mb-4 font-semibold"
              >
                Continuer
              </button>

              <button className="text-sm underline mx-auto block font-semibold text-black">
                Comment fonctionne la vérification d'identité ?
              </button>
            </div>
          )}

          {/* Step 2: Choice */}
          {verificationStep === 'choice' && (
            <div className="max-w-4xl mx-auto px-6 py-16">
              <div className="flex gap-12">
                {/* Left column */}
                <div className="flex-1">
                  <h1 className="text-2xl mb-8 font-semibold text-black">
                    Quel type d'informations souhaitez-vous fournir ?
                  </h1>

                  {/* Option 1: Official name and address */}
                  <div
                    onClick={() => setVerificationType('official')}
                    className="border-2 rounded-xl p-6 mb-4 cursor-pointer transition-colors"
                    style={{ borderColor: verificationType === 'official' ? '#222222' : '#DDDDDD' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-black">
                        Nom officiel et adresse
                      </h3>
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: verificationType === 'official' ? '#222222' : '#DDDDDD' }}>
                        {verificationType === 'official' && (
                          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Vos informations seront vérifiées par nos partenaires de confiance.
                    </p>
                  </div>

                  {/* Option 2: ID */}
                  <div
                    onClick={() => setVerificationType('id')}
                    className="border-2 rounded-xl p-6 mb-6 cursor-pointer transition-colors"
                    style={{ borderColor: verificationType === 'id' ? '#222222' : '#DDDDDD' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-black">
                        Pièce d'identité
                      </h3>
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: verificationType === 'id' ? '#222222' : '#DDDDDD' }}>
                        {verificationType === 'id' && (
                          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Vous prendrez des photos que notre équipe vérifiera.
                    </p>
                    <p className="text-sm text-gray-600">
                      Vos informations sont traitées conformément à notre{' '}
                      <a href="#" className="underline">Politique de confidentialité</a>.{' '}
                      <a href="#" className="underline">En savoir plus sur la vérification d'identité</a>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setVerificationStep('none')}
                      className="text-base underline font-semibold text-black"
                    >
                      Terminer plus tard
                    </button>
                    <button
                      onClick={() => setVerificationStep('form')}
                      className="px-8 py-3 bg-gray-900 text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
                    >
                      Continuer
                    </button>
                  </div>
                </div>

                {/* Right column: Privacy */}
                <div className="w-80 bg-gray-50 rounded-xl p-6 self-start">
                  <h3 className="text-base mb-4 font-semibold text-black">
                    Votre confidentialité
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Nous veillons à assurer la confidentialité et la protection des données que vous nous transmettez dans le cadre de ce processus. Pour en savoir plus, consultez notre{' '}
                    <a href="#" className="underline font-semibold">Politique de confidentialité</a>.
                  </p>
                  <a href="#" className="text-sm underline font-semibold text-black">
                    Découvrir le fonctionnement
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Form */}
          {verificationStep === 'form' && (
            <div className="max-w-xl mx-auto px-6 py-16">
              <h1 className="text-2xl mb-2 font-semibold text-black">
                Fournissez vos informations légales
              </h1>
              <p className="text-sm text-gray-600 mb-8">
                Nous utiliserons ces informations pour vérifier votre identité par l'intermédiaire de nos partenaires de confiance.
              </p>

              <div className="space-y-6">
                {/* Official name */}
                <div>
                  <h3 className="text-base mb-4 font-semibold text-black">
                    Vérifiez votre nom officiel
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Prénom"
                        defaultValue="Andson"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Nom"
                        defaultValue="Rajsona"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Assurez-vous que le nom correspond à celui qui figure sur votre pièce d'identité.
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-base mb-4 font-semibold text-black">
                    Ajoutez votre adresse
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Il s'agit de l'adresse où vous recevez des documents bancaires ou des factures de type électricité ou eau.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white">
                        <option>Pays/région</option>
                        <option>Brésil</option>
                        <option>France</option>
                        <option>Belgique</option>
                        <option>Suisse</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Adresse postale"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. Rua Bossoroca, 1</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Appartement, bâtiment (facultatif)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. apt 50</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Quartier (le cas échéant)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. Vila Madalena</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ville"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. Campinas</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="État"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. SP</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Code postal"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                      <p className="text-xs text-gray-500 mt-1">ex. 4377190</p>
                    </div>
                  </div>
                </div>

                {/* Legal note */}
                <p className="text-xs text-gray-500">
                  Vos informations sont traitées conformément à notre{' '}
                  <a href="#" className="underline">Politique de confidentialité</a>.{' '}
                  <a href="#" className="underline">En savoir plus sur la vérification d'identité</a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setVerificationStep('choice')}
                  className="flex items-center gap-2 text-base font-semibold text-black"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour
                </button>
                <button
                  onClick={() => setVerificationStep('none')}
                  className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg text-base cursor-not-allowed font-semibold"
                  disabled
                >
                  Envoyer
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

