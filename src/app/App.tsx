import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { Services } from './pages/Services';
import { PropertyDetails } from './pages/PropertyDetails';
import { ExperienceDetails } from './pages/ExperienceDetails';
import { ServiceDetails } from './pages/ServiceDetails';
import { BookingRequest } from './pages/BookingRequest';
import { SearchResults } from './pages/SearchResults';
import { ClientSpace } from './pages/ClientSpace';
import { Messages } from './pages/Messages';
import { AuthProvider } from './context/AuthContext';

// Scroll management hook
function useScrollManagement() {
  const location = useLocation();
  const scrollListenerEnabled = useRef(true);

  useEffect(() => {
    // Scroll to top on route change
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Re-enable after a short delay
    const timer = setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return scrollListenerEnabled;
}

// Scroll state hook
function useScrollState(scrollListenerEnabled: MutableRefObject<boolean>) {
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

// Main App Layout Component
function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const headerRef = useRef<HTMLElement>(null);
  const scrollListenerEnabled = useScrollManagement();
  const isScrolled = useScrollState(scrollListenerEnabled);

  // Determine current page from location
  const getCurrentPage = (): 'logements' | 'experiences' | 'services' => {
    if (location.pathname.startsWith('/experiences')) return 'experiences';
    if (location.pathname.startsWith('/services')) return 'services';
    return 'logements';
  };

  // Check if header should be shown
  const shouldShowHeader = () => {
    const hiddenPaths = [
      '/property/',
      '/experience/',
      '/service/',
      '/booking',
      '/search',
      '/client-space',
      '/messages'
    ];
    return !hiddenPaths.some(path => location.pathname.startsWith(path));
  };

  // Check if footer should be shown
  const shouldShowFooter = shouldShowHeader;

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
    navigate(`/search?${searchQuery.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {shouldShowHeader() && (
        <Header
          ref={headerRef}
          currentPage={getCurrentPage()}
          onNavigate={(page) => navigate(`/${page === 'logements' ? '' : page}`)}
          isScrolled={isScrolled}
          onSearch={handleSearch}
          onClientSpaceClick={() => navigate('/client-space')}
        />
      )}

      <Routes>
        <Route path="/" element={
          <Home
            isScrolled={isScrolled}
            onPropertyClick={(id?: string) => navigate(id ? `/property/${id}` : '/property/1')}
            onSearch={handleSearch}
          />
        } />
        <Route path="/experiences" element={
          <Experiences
            isScrolled={isScrolled}
            onExperienceClick={(id?: string) => navigate(id ? `/experience/${id}` : '/experience/1')}
          />
        } />
        <Route path="/services" element={
          <Services
            isScrolled={isScrolled}
            onServiceClick={(id?: string) => navigate(id ? `/service/${id}` : '/service/1')}
          />
        } />
        <Route path="/property/:id?" element={<PropertyDetails />} />
        <Route path="/experience/:id?" element={<ExperienceDetails />} />
        <Route path="/service/:id?" element={<ServiceDetails />} />
        <Route path="/booking" element={<BookingRequest />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/client-space" element={
          <ClientSpace onNavigate={(page) => navigate(`/${page === 'logements' ? '' : page}`)} />
        } />
        <Route path="/messages" element={
          <Messages onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />
        } />
      </Routes>

      {shouldShowFooter() && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}