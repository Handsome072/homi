import { LegalHeader } from '@/components/layout/LegalHeader';
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <LegalHeader />
      {children}
      <ScrollToTopButton />
    </div>
  );
}

