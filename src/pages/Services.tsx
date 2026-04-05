import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
  onGetQuote?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick, onGetQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Professional security" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Poxffv0cAyH_qmo01M2F9VeW-uhQ_24AACUMKZ6qrY2fQW_5GlhWsk3nqOiv-QxMmB7z8LUSM_0hPerzLvCm5iYdRxnx_i7ov0q_D_mOigZSzwX5NEOFsz0YJophysvyhmRWYMdzd5tcGlIo5BLYojvZazV6v-Yd1Ks3TDYF9eLyJesbrRsASTkZ0LNhUg5zbtS57MC0iYCAKLggUeEcMD__gBTrGovhynMe0yw7Yq5AsqcfP1UG1-zpFuZTYbWstpjBcW_9OcUW"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <img src="dss-logo.png" alt="DSS Logo" className="w-12 h-12 object-contain" />
              <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-widest uppercase rounded-sm">
                Strategic Protection
              </span>
            </div>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Our Elite <span className="text-secondary-container">Services</span>
            </h1>
            <p className="text-surface-container-low text-xl md:text-2xl max-w-2xl leading-relaxed font-body mb-10">
              Architecting safety through disciplined personnel and tactical intelligence. We build impenetrable foundations for your enterprise security.
            </p>
            <button 
              onClick={onGetQuote}
              className="bg-secondary-container text-on-secondary-fixed px-10 py-5 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:brightness-105 transition-all shadow-2xl active:scale-95"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight mb-4 text-center">Core Competencies</h2>
            <div className="h-1.5 w-24 bg-secondary-container mx-auto mb-12"></div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body text-on-surface"
              />
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredServices.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  onClick={() => onServiceClick?.(service.id)}
                  className="group bg-surface-container-lowest flex flex-col h-full transition-all duration-500 shadow-lg cursor-pointer rounded-xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      src={service.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary p-3 rounded-lg text-secondary-container shadow-xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-primary font-headline text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-on-surface-variant font-body leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onServiceClick?.(service.id);
                      }}
                      className="w-full bg-secondary-container text-on-secondary-fixed py-4 rounded-lg font-headline font-bold uppercase tracking-wider text-sm hover:brightness-105 transition-all active:scale-95 shadow-md group-hover:shadow-lg"
                    >
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-on-surface-variant text-xl font-body">No services found matching your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
