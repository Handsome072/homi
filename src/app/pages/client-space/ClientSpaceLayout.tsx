import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { HeaderRightMenu } from '../../components/HeaderRightMenu';
import { LanguageModal } from '../../components/LanguageModal';
import { BecomeHostModal } from '../../components/BecomeHostModal';
import { AuthModal } from '../../components/AuthModal';
import logo from 'figma:asset/logo.png';

interface ClientSpaceLayoutProps {
  onNavigate?: (page: 'logements' | 'messages' | 'client-space') => void;
}

export function ClientSpaceLayout({ onNavigate }: ClientSpaceLayoutProps = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Header dropdown states
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showBecomeHostModal, setShowBecomeHostModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Determine active section from URL
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.includes('/client-space/security')) return 'security';
    if (path.includes('/client-space/profile')) return 'profile';
    if (path.includes('/client-space/notifications')) return 'notifications';
    if (path.includes('/client-space/payments')) return 'payments';
    if (path.includes('/client-space/languages')) return 'languages';
    return 'reservations';
  };

  const activeSection = getActiveSection();

  const menuItems = [
    { key: 'profile', label: 'Informations personnelles', path: '/client-space/profile', icon: 'user' },
    { key: 'security', label: 'Connexion et sécurité', path: '/client-space/security', icon: 'lock' },
    { key: 'reservations', label: 'Mes réservations', path: '/client-space/reservations', icon: 'clipboard' },
    { key: 'notifications', label: 'Notifications', path: '/client-space/notifications', icon: 'bell' },
    { key: 'payments', label: 'Paiements', path: '/client-space/payments', icon: 'card' },
    { key: 'languages', label: 'Langues et devise', path: '/client-space/languages', icon: 'globe' },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'user':
        return (
          <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-base flex-shrink-0 font-semibold">
            {user?.name.charAt(0).toUpperCase() || 'A'}
          </div>
        );
      case 'lock':
        return (
          <svg className="w-9 h-9 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'clipboard':
        return (
          <svg className="w-9 h-9 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'bell':
        return (
          <svg className="w-9 h-9 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
      case 'card':
        return (
          <svg className="w-9 h-9 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-9 h-9 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate?.('logements')}
            className="flex items-center gap-1 flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src={logo}
              alt="HOMIQIO Logo"
              className="w-[150px] h-auto"
            />
          </button>

          {/* Right Menu */}
          <HeaderRightMenu
            showMenuDropdown={showMenuDropdown}
            setShowMenuDropdown={setShowMenuDropdown}
            setShowLanguageModal={setShowLanguageModal}
            setShowBecomeHostModal={setShowBecomeHostModal}
            setShowAuthModal={setShowAuthModal}
            onClientSpaceClick={() => {}}
            onMessagesClick={() => onNavigate?.('messages')}
          />
        </header>

        {/* Main content area with fixed sidebar and scrollable content */}
        <div className="flex pt-[73px] flex-1">
          {/* Fixed Sidebar */}
          <aside className="fixed left-0 top-[73px] w-[360px] h-[calc(100vh-73px)] border-r border-gray-200 px-16 py-12 overflow-y-auto bg-white">
            <h1 className="text-2xl mb-10 font-semibold text-black">Espace client</h1>

            <nav className="space-y-5">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-4 text-left transition-colors ${
                    activeSection === item.key ? '' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {renderIcon(item.icon)}
                  <span className={`text-base text-black ${activeSection === item.key ? 'font-semibold' : 'font-normal'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Scrollable Main Content */}
          <main className="flex-1 ml-[360px] px-16 py-12 bg-white overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Modals */}
      {showLanguageModal && <LanguageModal isOpen={showLanguageModal} onClose={() => setShowLanguageModal(false)} />}
      {showBecomeHostModal && <BecomeHostModal isOpen={showBecomeHostModal} onClose={() => setShowBecomeHostModal(false)} />}
      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
    </>
  );
}

