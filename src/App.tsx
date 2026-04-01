import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import ServiceDetail from './pages/ServiceDetail';
import { servicesData } from './data/services';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedServiceId]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
  };

  const renderPage = () => {
    if (currentPage === 'service-detail' && selectedServiceId) {
      const service = servicesData.find(s => s.id === selectedServiceId);
      if (service) {
        return <ServiceDetail service={service} onBack={() => setCurrentPage('services')} />;
      }
    }

    switch (currentPage) {
      case 'home':
        return <Home onServiceClick={handleServiceClick} onContactClick={() => setCurrentPage('contact')} />;
      case 'services':
        return <Services onServiceClick={handleServiceClick} onGetQuote={() => setCurrentPage('contact')} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      case 'careers':
        return <Careers />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
