'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Hook pour gérer le scroll lors des changements de route
 * Reset le scroll en haut de page à chaque navigation
 */
export function useScrollManagement() {
  const pathname = usePathname();
  const scrollListenerEnabled = useRef(true);

  useEffect(() => {
    // Désactiver temporairement le listener de scroll
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Réactiver après un court délai
    const timer = setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return scrollListenerEnabled;
}

