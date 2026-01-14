import type { Metadata } from 'next';
// Use the same AuthProvider as the Vite components to share context
import { AuthProvider } from '@/src/app/context/AuthContext';
import './globals.css';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: 'Homiqio',
  description: 'Location de logements, expériences et services',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

