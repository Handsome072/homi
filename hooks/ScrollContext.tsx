'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';
import { useScrollManagement } from './useScrollManagement';
import { useScrollState } from './useScrollState';

interface ScrollContextType {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollListenerEnabled = useScrollManagement();
  const isScrolled = useScrollState(scrollListenerEnabled);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}

