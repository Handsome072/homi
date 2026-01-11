import { useState } from 'react';

export function NotificationsSection() {
  const [notificationsTab, setNotificationsTab] = useState<'offres' | 'compte'>('offres');

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-8 font-semibold text-black">Notifications</h2>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-300">
        <button
          onClick={() => setNotificationsTab('offres')}
          className={`pb-3 text-base ${notificationsTab === 'offres' ? 'border-b-2 border-black font-semibold text-black' : 'font-normal text-black opacity-60 hover:opacity-100'} transition-colors`}
        >
          Offres et mises à jour
        </button>
        <button
          onClick={() => setNotificationsTab('compte')}
          className={`pb-3 text-base ${notificationsTab === 'compte' ? 'border-b-2 border-black font-semibold text-black' : 'font-normal text-black opacity-60 hover:opacity-100'} transition-colors`}
        >
          Compte
        </button>
      </div>

      {/* Tab: Compte */}
      {notificationsTab === 'compte' && (
        <>
          {/* Activité du compte et politiques */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Activité du compte et politiques</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Confirmez votre réservation, vérifiez l'activité de votre compte et découvrez les politiques importantes de HOMIQIO.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Activité du compte</h4>
                <p className="text-sm mb-3 text-black opacity-60">Activé : E-mail</p>
                <button className="text-base underline hover:no-underline font-semibold text-black">Modifier</button>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Politiques pour les voyageurs</h4>
                <p className="text-sm mb-3 text-black opacity-60">Activé : E-mail</p>
                <button className="text-base underline hover:no-underline font-semibold text-black">Modifier</button>
              </div>
            </div>
          </div>

          {/* Rappels */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Rappels</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Recevez des rappels importants sur vos réservations, vos annonces et l'activité de votre compte.
            </p>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-base mb-2 font-semibold text-black">Rappels</h4>
              <p className="text-sm mb-3 text-black opacity-60">Activé : E-mail</p>
              <button className="text-base underline hover:no-underline font-semibold text-black">Modifier</button>
            </div>
          </div>

          {/* Messages entre les hôtes et les voyageurs */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Messages entre les hôtes et les voyageurs</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Restez en contact avec les hôtes et les voyageurs avant, pendant et après votre réservation.
            </p>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-base mb-2 font-semibold text-black">Messages</h4>
              <p className="text-sm mb-3 text-black opacity-60">Activé : E-mail</p>
              <button className="text-base underline hover:no-underline font-semibold text-black">Modifier</button>
            </div>
          </div>
        </>
      )}

      {/* Tab: Offres et mises à jour */}
      {notificationsTab === 'offres' && (
        <>
          {/* Conseils et offres de voyage */}
          <div className="mb-12">
            <h3 className="text-lg mb-4 font-semibold text-black">Conseils et offres de voyage</h3>
            <p className="text-sm text-black opacity-60 mb-8 leading-relaxed">
              Trouvez l'inspiration pour votre prochain voyage en recevant des recommandations personnalisées et des offres spéciales.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Inspiration et offres</h4>
                <p className="text-sm text-black opacity-60 mb-3">Activé : E-mail</p>
                <button className="text-base underline font-semibold text-black">Modifier</button>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Planification du voyage</h4>
                <p className="text-sm text-black opacity-60 mb-3">Activé : E-mail</p>
                <button className="text-base underline font-semibold text-black">Modifier</button>
              </div>
            </div>
          </div>

          {/* Actualités de HOMIQIO */}
          <div className="mb-12">
            <h3 className="text-lg mb-4 font-semibold text-black">Actualités de HOMIQIO</h3>
            <p className="text-sm text-black opacity-60 mb-8 leading-relaxed">
              Recevez les dernières actualités de HOMIQIO et dites-nous comment nous pouvons nous améliorer.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Actualités et programmes</h4>
                <p className="text-sm text-black opacity-60 mb-3">Activé : E-mail</p>
                <button className="text-base underline font-semibold text-black">Modifier</button>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Remarques</h4>
                <p className="text-sm text-black opacity-60 mb-3">Activé : E-mail</p>
                <button className="text-base underline font-semibold text-black">Modifier</button>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-base mb-2 font-semibold text-black">Réglementation en matière de voyage</h4>
                <p className="text-sm text-black opacity-60 mb-3">Activé : E-mail</p>
                <button className="text-base underline font-semibold text-black">Modifier</button>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="unsubscribe"
              className="w-5 h-5 mt-0.5 rounded border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer"
            />
            <label htmlFor="unsubscribe" className="text-base text-black cursor-pointer">
              Je souhaite me désabonner de tous les e-mails marketing
            </label>
          </div>
        </>
      )}
    </div>
  );
}

