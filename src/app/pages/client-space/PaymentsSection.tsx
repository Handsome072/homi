import { useState } from 'react';

export function PaymentsSection() {
  const [paymentsTab, setPaymentsTab] = useState<'paiements' | 'versements'>('paiements');
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-8 font-semibold text-black">Paiements et versements</h2>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-300">
        <button
          onClick={() => setPaymentsTab('paiements')}
          className={`pb-3 text-base ${paymentsTab === 'paiements' ? 'border-b-2 border-black font-semibold text-black' : 'font-normal text-black opacity-60 hover:opacity-100'} transition-colors`}
        >
          Paiements
        </button>
        <button
          onClick={() => setPaymentsTab('versements')}
          className={`pb-3 text-base ${paymentsTab === 'versements' ? 'border-b-2 border-black font-semibold text-black' : 'font-normal text-black opacity-60 hover:opacity-100'} transition-colors`}
        >
          Versements
        </button>
      </div>

      {/* Tab: Paiements */}
      {paymentsTab === 'paiements' && (
        <>
          {/* Vos paiements */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Vos paiements</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Suivez l'ensemble de vos paiements et remboursements.
            </p>
            <button className="text-base underline font-semibold text-black">Gérer les paiements</button>
          </div>

          {/* Modes de paiement */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Modes de paiement</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Ajoutez un mode de paiement en utilisant notre système de paiement sécurisé, puis commencez à planifier votre prochain voyage.
            </p>

            {/* Carte existante */}
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="text-base text-black">Visa ....1234</p>
                  <p className="text-sm text-black opacity-60">Expiration : 12/2025</p>
                </div>
              </div>
              <button className="text-base underline font-semibold text-black">Supprimer</button>
            </div>

            <button
              onClick={() => setShowAddPaymentModal(true)}
              className="mt-6 text-base underline font-semibold text-black"
            >
              Ajouter un mode de paiement
            </button>
          </div>

          {/* Coupons */}
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Coupons</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Ajoutez un coupon et économisez sur votre prochaine réservation.
            </p>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Entrez le code du coupon"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold">
                Ajouter
              </button>
            </div>
          </div>
        </>
      )}

      {/* Tab: Versements */}
      {paymentsTab === 'versements' && (
        <>
          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Vos versements</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Suivez l'ensemble de vos versements en tant qu'hôte.
            </p>
            <button className="text-base underline font-semibold text-black">Gérer les versements</button>
          </div>

          <div className="mb-10">
            <h3 className="text-lg mb-2 font-semibold text-black">Modes de versement</h3>
            <p className="text-sm mb-6 text-black opacity-60">
              Ajoutez un mode de versement pour recevoir vos paiements en tant qu'hôte.
            </p>
            <button className="text-base underline font-semibold text-black">Ajouter un mode de versement</button>
          </div>
        </>
      )}

      {/* Modal: Ajouter un mode de paiement */}
      {showAddPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowAddPaymentModal(false)}
              className="absolute top-4 right-4 text-sm underline font-semibold text-black"
            >
              Fermer
            </button>

            <h3 className="text-2xl mb-6 pr-16 font-semibold text-black">Ajouter un mode de paiement</h3>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Numéro de carte"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="text"
                placeholder="Nom sur la carte"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              onClick={() => setShowAddPaymentModal(false)}
              className="w-full px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold"
            >
              Ajouter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

