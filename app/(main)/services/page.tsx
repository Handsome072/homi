'use client';

import { useRouter } from 'next/navigation';
import { Services } from '@/src/app/pages/Services';
import { useScrollContext } from '@/hooks/ScrollContext';

/**
 * Page Services Next.js
 * Réutilise le composant Services existant pour garantir UI identique
 */
export default function ServicesPage() {
  const router = useRouter();
  const { isScrolled } = useScrollContext();

  // Handle service click
  const handleServiceClick = (id?: string) => {
    router.push(id ? `/service/${id}` : '/service/1');
  };

  return (
    <Services
      isScrolled={isScrolled}
      onServiceClick={handleServiceClick}
    />
  );
}

