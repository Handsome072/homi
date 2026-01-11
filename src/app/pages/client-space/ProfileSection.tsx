import { useState } from 'react';

export function ProfileSection() {
  const [editingOfficialName, setEditingOfficialName] = useState(false);
  const [editingPreferredName, setEditingPreferredName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [addingResidentialAddress, setAddingResidentialAddress] = useState(false);
  const [addingPostalAddress, setAddingPostalAddress] = useState(false);
  const [addingEmergencyContact, setAddingEmergencyContact] = useState(false);

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
                <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-[#10B981]'}`}>Information non fournie</p>
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
            <button className={`text-sm underline flex-shrink-0 ml-4 font-semibold ${isAnyEditing ? 'text-black opacity-40' : 'text-black'}`} disabled={isAnyEditing}>
              Commencer
            </button>
          </div>
        </div>

        {/* Adresse résidentielle */}
        <div className="border-b border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`text-base mb-1 font-semibold ${getFieldDisabledStyle(addingResidentialAddress)}`}>Adresse résidentielle</h4>
              <p className={`text-sm ${isAnyEditing && !addingResidentialAddress ? 'text-black opacity-40' : 'text-[#10B981]'}`}>Information non fournie</p>
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
              <p className={`text-sm ${isAnyEditing && !addingPostalAddress ? 'text-black opacity-40' : 'text-[#10B981]'}`}>Information non fournie</p>
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
                <p className={`text-sm ${isAnyEditing ? 'text-black opacity-40' : 'text-[#10B981]'}`}>Information non fournie</p>
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
    </div>
  );
}

