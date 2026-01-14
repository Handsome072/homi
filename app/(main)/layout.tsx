'use client';

import { useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Header } from '@/src/app/components/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProvider, useScrollContext } from '@/hooks/ScrollContext';

/**
 * Layout interne avec Header et Footer
 * Utilise le contexte de scroll partagé
 */
function MainLayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { isScrolled } = useScrollContext();

  // Determine current page from pathname
  const getCurrentPage = (): 'logements' | 'experiences' | 'services' => {
    if (pathname?.startsWith('/experiences')) return 'experiences';
    if (pathname?.startsWith('/services')) return 'services';
    return 'logements';
  };

  // Handle navigation
  const handleNavigate = (page: 'logements' | 'experiences' | 'services' | 'messages' | 'host-onboarding') => {
    switch (page) {
      case 'logements':
        router.push('/');
        break;
      case 'experiences':
        router.push('/experiences');
        break;
      case 'services':
        router.push('/services');
        break;
      case 'messages':
        router.push('/messages');
        break;
      case 'host-onboarding':
        router.push('/host-onboarding');
        break;
    }
  };

  // Handle search
  const handleSearch = (params: any) => {
    const searchQuery = new URLSearchParams({
      destination: params.destination || '',
      checkIn: params.checkInDate?.toISOString() || '',
      checkOut: params.checkOutDate?.toISOString() || '',
      adults: params.guestsCount?.adults?.toString() || '0',
      children: params.guestsCount?.children?.toString() || '0',
      babies: params.guestsCount?.babies?.toString() || '0',
      pets: params.guestsCount?.pets?.toString() || '0',
    });
    router.push(`/search?${searchQuery.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        ref={headerRef}
        currentPage={getCurrentPage()}
        onNavigate={handleNavigate}
        isScrolled={isScrolled}
        onSearch={handleSearch}
        onClientSpaceClick={() => router.push('/client-space')}
      />
      {children}
      <Footer />
    </div>
  );
}

/**
 * Layout principal avec ScrollProvider
 * Fournit le contexte de scroll à tous les composants enfants
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </ScrollProvider>
  );
}

