'use client';

import { useState, useEffect, MutableRefObject } from 'react';

/**
 * Hook pour gérer l'état de scroll avec hysteresis
 * Empêche le flickering lors du scroll près du seuil
 * @param scrollListenerEnabled - Ref pour activer/désactiver le listener
 */
export function useScrollState(scrollListenerEnabled: MutableRefObject<boolean>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollListenerEnabled.current) return;

      const scrollY = window.scrollY;

      setIsScrolled((prevScrolled) => {
        // Hysteresis: large gap to prevent flickering
        // Switch to compact when scrollY > 120
        // Switch back to normal when scrollY < 60
        // 60px buffer zone (60-120) where state doesn't change
        if (!prevScrolled && scrollY > 120) {
          return true;
        } else if (prevScrolled && scrollY < 60) {
          return false;
        }
        return prevScrolled;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollListenerEnabled]);

  return isScrolled;
}

