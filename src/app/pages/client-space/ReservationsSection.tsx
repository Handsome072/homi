import { useNavigate } from 'react-router-dom';

export function ReservationsSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-black">Mes réservations</h2>
      </div>

      {/* RÉSERVATION(S) FUTURE(S) */}
      <div className="mb-8">
        <h3 className="text-xs mb-4 font-bold tracking-wide text-[#5EC6D8]">RÉSERVATION(S) FUTURE(S)</h3>

        <div
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex gap-6 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => navigate('/client-space/reservations/res-001')}
        >
          <img
            src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc1MzY5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Appartement"
            className="w-56 h-40 object-cover rounded-xl flex-shrink-0"
          />

          <div className="flex-1">
            <h4 className="text-lg mb-2 font-medium text-[#5EC6D8]">Appartement T2</h4>
            <p className="text-sm text-black mb-4">
              Date d'arrivée : <span className="font-semibold">03/09/2024</span> |{' '}
              <span className="font-semibold">1 occupant</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Croix Verte</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span>1</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2m-16 0h16m-16 0v10a2 2 0 002 2h12a2 2 0 002-2V8m-16 0h16" />
                </svg>
                <span>42m2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>T2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>3 à 4</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="rounded-lg px-6 py-4 flex flex-col items-center min-w-[180px] bg-[#1E3A5F]">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-xs text-white opacity-90">PRIX TOTAL / MOIS</span>
              </div>
              <span className="text-3xl text-white font-bold">700 €</span>
            </div>

            <button className="px-6 py-2.5 border-2 rounded-lg text-sm hover:bg-gray-50 transition-colors bg-white w-full font-semibold text-[#1E3A5F] border-[#1E3A5F]">
              ANNULER
            </button>
          </div>
        </div>
      </div>

      {/* DERNIÈRES RÉSERVATIONS */}
      <div className="mb-8">
        <h3 className="text-xs mb-4 font-bold tracking-wide text-black opacity-60">DERNIÈRES RÉSERVATIONS</h3>

        <div className="space-y-4">
          {[
            'https://images.unsplash.com/photo-1667153653404-11bc88130b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGhvdGVsfGVufDF8fHx8MTc2NzYxNjkyNnww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU5OTA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3NTEwODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          ].map((imageUrl, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex gap-6">
              <img src={imageUrl} alt="Appartement" className="w-56 h-40 object-cover rounded-xl flex-shrink-0" />

              <div className="flex-1">
                <h4 className="text-lg mb-2 font-medium text-black opacity-60">Appartement T2</h4>
                <p className="text-sm text-black opacity-60 mb-4">
                  Date d'arrivée : <span className="font-semibold">03/09/2024</span> |{' '}
                  <span className="font-semibold">1 occupant</span>
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Croix Verte</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <span>2</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2m-16 0h16m-16 0v10a2 2 0 002 2h12a2 2 0 002-2V8" />
                    </svg>
                    <span>42m2</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>T2</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>3 à 4</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end justify-end">
                <div className="rounded-lg px-6 py-4 flex flex-col items-center min-w-[180px] bg-black opacity-60">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <span className="text-xs text-white opacity-90">PRIX TOTAL / MOIS</span>
                  </div>
                  <span className="text-3xl text-white font-bold">700 €</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RÉSERVATIONS ANNULÉES */}
      <div>
        <h3 className="text-xs mb-4 font-bold tracking-wide text-black opacity-60">RÉSERVATIONS ANNULÉES</h3>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex gap-6">
          <img
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzYwMTQyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Appartement"
            className="w-56 h-40 object-cover rounded-xl flex-shrink-0"
          />

          <div className="flex-1">
            <h4 className="text-2xl mb-2 font-medium text-black opacity-60">Appartement T2</h4>
            <p className="text-sm text-black opacity-60 mb-4">
              Date d'arrivée : <span className="font-semibold">03/09/2024</span> |{' '}
              <span className="font-semibold">1 occupant</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Croix Verte</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span>1</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2m-16 0h16m-16 0v10a2 2 0 002 2h12a2 2 0 002-2V8" />
                </svg>
                <span>42m2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>T2</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-black opacity-60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>3 à 4</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <div className="rounded-lg px-6 py-4 flex flex-col items-center min-w-[180px] bg-black opacity-60">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-xs text-white opacity-90">PRIX TOTAL / MOIS</span>
              </div>
              <span className="text-3xl text-white font-bold">700 €</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

