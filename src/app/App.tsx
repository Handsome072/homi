import { useState, useEffect, useRef } from 'react';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'logements' | 'experiences' | 'services' | 'property-details' | 'experience-details' | 'service-details' | 'booking-request' | 'search-results' | 'client-space' | 'messages'>('logements');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [bookingData, setBookingData] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<any>(null);
  const scrollListenerEnabled = useRef(true);

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
  }, []);

  const handleNavigate = (page: 'logements' | 'experiences' | 'services' | 'property-details' | 'experience-details' | 'service-details' | 'booking-request' | 'search-results' | 'client-space' | 'messages', data?: any) => {
    setCurrentPage(page);
    if (data) {
      setBookingData(data);
    }
    
    // Disable scroll listener during navigation
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
    
    // Re-enable after a short delay
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  const handleBackToHome = () => {
    setCurrentPage('logements');
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  const handleBackToExperiences = () => {
    setCurrentPage('experiences');
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  const handleBackToPropertyDetails = () => {
    setCurrentPage('property-details');
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  const handleSearch = (params: any) => {
    setSearchParams(params);
    setCurrentPage('search-results');
    scrollListenerEnabled.current = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsScrolled(false);
    setTimeout(() => {
      scrollListenerEnabled.current = true;
    }, 100);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        {currentPage !== 'property-details' && currentPage !== 'experience-details' && currentPage !== 'service-details' && currentPage !== 'booking-request' && currentPage !== 'search-results' && currentPage !== 'client-space' && currentPage !== 'messages' && (
          <Header 
            ref={headerRef} 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
            isScrolled={isScrolled} 
            onSearch={handleSearch}
            onClientSpaceClick={() => handleNavigate('client-space')}
          />
        )}
        
        {currentPage === 'logements' && <Home isScrolled={isScrolled} onPropertyClick={() => handleNavigate('property-details')} onSearch={handleSearch} />}
        {currentPage === 'experiences' && <Experiences isScrolled={isScrolled} onExperienceClick={() => handleNavigate('experience-details')} />}
        {currentPage === 'services' && <Services isScrolled={isScrolled} onServiceClick={() => handleNavigate('service-details')} />}
        {currentPage === 'property-details' && <PropertyDetails onBack={handleBackToHome} onBook={(data) => handleNavigate('booking-request', data)} />}
        {currentPage === 'experience-details' && <ExperienceDetails onBack={handleBackToExperiences} />}
        {currentPage === 'service-details' && <ServiceDetails onBack={handleBackToServices} />}
        {currentPage === 'booking-request' && <BookingRequest onBack={handleBackToPropertyDetails} bookingData={bookingData} />}
        {currentPage === 'search-results' && searchParams && <SearchResults onBack={handleBackToHome} onNavigate={handleNavigate} searchParams={searchParams} />}
        {currentPage === 'client-space' && <ClientSpace onNavigate={handleNavigate} />}
        {currentPage === 'messages' && <Messages onNavigate={handleNavigate} />}
        
        {currentPage !== 'property-details' && currentPage !== 'experience-details' && currentPage !== 'service-details' && currentPage !== 'booking-request' && currentPage !== 'search-results' && currentPage !== 'client-space' && currentPage !== 'messages' && <Footer />}
      </div>
    </AuthProvider>
  );
}