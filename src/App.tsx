import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import About from './pages/About';
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
        return <Home onServiceClick={handleServiceClick} onContactClick={() => setCurrentPage('contact')} setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services onServiceClick={handleServiceClick} onGetQuote={() => setCurrentPage('contact')} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ setCurrentPage={setCurrentPage} />;
      case 'careers':
        return <Careers setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
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
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href="tel:+919450783665" 
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center md:hidden"
          aria-label="Call Now"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
        <a 
          href="https://wa.me/919450783665" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default App;
