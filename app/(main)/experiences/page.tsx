'use client';

import { useRouter } from 'next/navigation';
import { Experiences } from '@/src/app/pages/Experiences';
import { useScrollContext } from '@/hooks/ScrollContext';

/**
 * Page Expériences Next.js
 * Réutilise le composant Experiences existant pour garantir UI identique
 */
export default function ExperiencesPage() {
  const router = useRouter();
  const { isScrolled } = useScrollContext();

  // Handle experience click
  const handleExperienceClick = (id?: string) => {
    router.push(id ? `/experience/${id}` : '/experience/1');
  };

  return (
    <Experiences
      isScrolled={isScrolled}
      onExperienceClick={handleExperienceClick}
    />
  );
}

