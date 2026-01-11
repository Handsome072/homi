import { useState } from 'react';

export function LanguagesSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const languages = [
    { code: 'fr', name: 'Français', region: 'France' },
    { code: 'en', name: 'English', region: 'United States' },
    { code: 'es', name: 'Español', region: 'España' },
    { code: 'de', name: 'Deutsch', region: 'Deutschland' },
    { code: 'it', name: 'Italiano', region: 'Italia' },
    { code: 'pt', name: 'Português', region: 'Portugal' },
    { code: 'nl', name: 'Nederlands', region: 'Nederland' },
    { code: 'pl', name: 'Polski', region: 'Polska' },
  ];

  const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'Dollar américain' },
    { code: 'GBP', symbol: '£', name: 'Livre sterling' },
    { code: 'CHF', symbol: 'CHF', name: 'Franc suisse' },
    { code: 'CAD', symbol: 'CA$', name: 'Dollar canadien' },
    { code: 'AUD', symbol: 'A$', name: 'Dollar australien' },
    { code: 'JPY', symbol: '¥', name: 'Yen japonais' },
    { code: 'CNY', symbol: '¥', name: 'Yuan chinois' },
  ];

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-8 font-semibold text-black">Langues et devise</h2>

      {/* Langue préférée */}
      <div className="mb-12">
        <h3 className="text-lg mb-2 font-semibold text-black">Langue préférée</h3>
        <p className="text-sm mb-6 text-black opacity-60">
          Choisissez la langue dans laquelle vous souhaitez recevoir les communications de HOMIQIO.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`p-4 border rounded-lg text-left transition-colors ${
                selectedLanguage === lang.code
                  ? 'border-black bg-gray-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <p className={`text-base ${selectedLanguage === lang.code ? 'font-semibold' : 'font-normal'} text-black`}>
                {lang.name}
              </p>
              <p className="text-sm text-black opacity-60">{lang.region}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Devise préférée */}
      <div className="mb-12">
        <h3 className="text-lg mb-2 font-semibold text-black">Devise préférée</h3>
        <p className="text-sm mb-6 text-black opacity-60">
          Choisissez la devise dans laquelle vous souhaitez voir les prix.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`p-4 border rounded-lg text-left transition-colors ${
                selectedCurrency === currency.code
                  ? 'border-black bg-gray-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <p className={`text-base ${selectedCurrency === currency.code ? 'font-semibold' : 'font-normal'} text-black`}>
                {currency.symbol} - {currency.code}
              </p>
              <p className="text-sm text-black opacity-60">{currency.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Bouton Enregistrer */}
      <button className="px-6 py-3 bg-black text-white rounded-lg text-base transition-colors hover:bg-gray-800 font-semibold">
        Enregistrer les préférences
      </button>
    </div>
  );
}

