import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Users, BadgeCheck, Gavel, Medal, GraduationCap, Network, Star, Quote, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

interface HomeProps {
  onServiceClick?: (serviceId: string) => void;
  onContactClick?: () => void;
  setCurrentPage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onServiceClick, onContactClick, setCurrentPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-hero-pattern-2 overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 backdrop-brightness-75"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-container text-xs font-bold uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              India's Most Trusted Security Partner
            </div>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Elite Protection & <span className="text-secondary-container">Tactical Security</span> Solutions
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-body leading-relaxed max-w-2xl">
              Dhaal Security Services Pvt. Ltd. provides premier guarding, armed personnel, and comprehensive manpower solutions across PAN India. Your safety is our absolute priority.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (onContactClick) onContactClick();
                }}
                className="bg-secondary-container text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 active:scale-95 shadow-xl flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:+919450783665"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/919450783665"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
              <h2 className="text-primary font-headline text-4xl md:text-5xl font-black tracking-tight">Core Security Services</h2>
              <p className="text-on-surface-variant mt-4 text-lg font-body">Tactical protection solutions engineered for India's most critical environments.</p>
            </div>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentPage?.('services');
              }}
              className="group flex items-center gap-2 text-primary font-bold hover:text-secondary-container transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onServiceClick?.(service.id)}
                className="group bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary p-3 rounded-lg text-secondary-container shadow-xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-primary font-headline text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:text-secondary-container transition-colors">
                    Explore Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction & Journey */}
      <section id="about" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <img src="dss-logo.png" alt="DSS Logo" className="w-16 h-16 object-contain" />
                <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest rounded">Welcome to DSS Group</div>
              </div>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                <p>Dhaal Security Services Pvt. Ltd. is a PSARA-licensed premier security agency providing verified and reliable security services across PAN India. With our central command in Patna, we deliver superior safety, risk management, and comprehensive manpower solutions to diverse sectors.</p>
                <p>Established in 2012 with a vision to redefine protection standards, we operate with tactical precision and absolute integrity. Our national presence ensures that we can deploy elite, police-verified personnel wherever your assets need protection.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Our Values</h4>
                  <ul className="text-on-surface-variant text-sm space-y-1">
                    <li>• Ethics</li>
                    <li>• Lawfulness</li>
                    <li>• Honesty</li>
                    <li>• Responsibility</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Our Strength</h4>
                  <ul className="text-on-surface-variant text-sm space-y-1">
                    <li>• 24x7 Rapid Response</li>
                    <li>• Emergency Backup</li>
                    <li>• Police Coordination</li>
                    <li>• Night Patrolling</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Milestones Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,0,60,0.04)] border-b-4 border-secondary-container"
              >
                <div className="text-primary font-headline text-3xl font-black mb-2">2022</div>
                <div className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Founded</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-primary p-8 text-white mt-8"
              >
                <div className="text-secondary-container font-headline text-3xl font-black mb-2">50+</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-xs">Corporate Clients</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-primary p-8 text-white"
              >
                <div className="text-secondary-container font-headline text-3xl font-black mb-2">2025</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-xs">PAN India Expansion</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,0,60,0.04)] border-b-4 border-secondary-container mt-8"
              >
                <div className="text-primary font-headline text-3xl font-black mb-2">2024</div>
                <div className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">15,000+ Personnel</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Strengths */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-secondary-container font-bold uppercase tracking-[0.3em] text-xs block">Why Choose Us</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight">The Dhaal Advantage</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We don't just provide guards; we architect comprehensive safety ecosystems. Our approach combines human vigilance with strategic police liaison and rapid response capabilities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: "24/7 Control Room", desc: "Constant monitoring and coordination from our central hub." },
                  { icon: <Users className="w-6 h-6" />, title: "Rapid Response Team", desc: "Elite mobile units ready to deploy within minutes of an alert." },
                  { icon: <GraduationCap className="w-6 h-6" />, title: "Trained Personnel", desc: "Rigorous physical and tactical training for all staff." },
                  { icon: <Gavel className="w-6 h-6" />, title: "Police Liaison", desc: "Strong coordination with local law enforcement agencies." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-secondary-container">{item.icon}</div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-secondary-container/10 rounded-full absolute inset-0 scale-110 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl">
                    <div className="text-secondary-container text-4xl font-black mb-2">2+</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl">
                    <div className="text-secondary-container text-4xl font-black mb-2">50+</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Corporate Clients</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl">
                    <div className="text-secondary-container text-4xl font-black mb-2">15K+</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Guards Deployed</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl">
                    <div className="text-secondary-container text-4xl font-black mb-2">PAN</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-bold">India Presence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-[500px] aspect-[4/5] flex-shrink-0 bg-primary-container overflow-hidden rounded-2xl shadow-2xl relative group">
              <img 
                alt="Founding Director Niraj V. Tiwari" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="director.png"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
            </div>
            <div className="space-y-8">
              <span className="text-secondary-container text-6xl opacity-30 font-serif">"</span>
              <blockquote className="text-primary font-headline text-3xl md:text-4xl font-bold leading-tight -mt-4">
                At DSS, we don't just provide guards; we architect safety. Our commitment is to the peace of mind of every client we serve.
              </blockquote>
              <div>
                <div className="font-headline font-extrabold text-xl text-primary">Mr. Niraj V. Tiwari</div>
                <div className="text-on-surface-variant uppercase tracking-widest text-xs font-bold mt-1">Founding Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Infinite Marquee */}
      <section id="trusted" className="py-16 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-primary/60 font-black uppercase tracking-[0.5em] text-sm md:text-base block">Global Brands & Corporate Partners</span>
        </div>
        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { name: 'Suzuki', logo: 'https://www.citypng.com/public/uploads/preview/suzuki-black-logo-transparent-png-70175169477316889qlbzgncs.png' },
                  { name: 'GM Modular', logo: 'https://gmmodular.ae/storage/app/media/main-symbols.png' },
                  { name: 'Mankind', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Mankind_Serving_Life.png' },
                  { name: 'Royal Enfield', logo: 'https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.png' },
                  { name: 'TVS', logo: 'https://www.logo.wine/a/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.svg' },
                  { name: 'Manyavar', logo: 'https://images.seeklogo.com/logo-png/30/1/manyavar-logo-png_seeklogo-304330.png' },
                  { name: 'Tata', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg' },
                  { name: 'Apoorv Air Control' },
                  { name: 'Durga Electricals' },
                  { name: 'GM Elektra' },
                  { name: 'New Era School' },
                  { name: 'Hotel Jharokha' }
                ].map((client, idx) => (
                  <div key={idx} className="flex items-center justify-center w-[300px] h-36 shrink-0 px-8 opacity-95 hover:opacity-100 transition-opacity duration-300">
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const span = target.parentElement?.querySelector('span');
                          if (span) span.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span className={`text-lg md:text-xl font-black tracking-tighter text-on-surface-variant font-headline italic uppercase whitespace-nowrap ${client.logo ? 'hidden' : 'block'}`}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary-container font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Trust</span>
            <h2 className="text-white font-headline text-4xl md:text-5xl font-black tracking-tight">Tactical Testimonials</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto font-body">Verified feedback from our operational partners across the nation.</p>
          </div>

          <div className="relative overflow-hidden py-10 -mx-6">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 whitespace-nowrap px-6"
            >
              {[...Array(2)].map((_, pairIdx) => (
                <div key={pairIdx} className="flex gap-8">
                  {[
                    {
                      quote: "The discipline and professionalism of Dhaal's guards are unmatched. They've transformed our factory security protocols completely.",
                      author: "Rajesh Kumar",
                      company: "Suzuki",
                      role: "Operations Manager",
                      rating: 5
                    },
                    {
                      quote: "Their rapid response team is truly elite. We had a perimeter breach attempt that was neutralized within minutes thanks to their vigilance.",
                      author: "Sanjay Mehta",
                      company: "TVS Logistics",
                      role: "Security Head",
                      rating: 5
                    },
                    {
                      quote: "Meticulous attention to detail. From housekeeping to armed guarding, Dhaal provides a seamless manpower solution for our entire school.",
                      author: "Dr. Anjali Sharma",
                      company: "New Era High School",
                      role: "Principal",
                      rating: 5
                    },
                    {
                      quote: "Reliable and efficient. Their facility management services have significantly improved our operational uptime across GM units.",
                      author: "Amit Verma",
                      company: "GM Modular",
                      role: "Facility Director",
                      rating: 5
                    },
                    {
                      quote: "Exceptional service quality. The security personnel at our store are well-trained and highly disciplined.",
                      author: "Vikash Gupta",
                      company: "Manyavar",
                      role: "Outlet Manager",
                      rating: 5
                    },
                    {
                      quote: "Dhaal Security has been our trusted partner for years. Their commitment to safety at our plants is unparalleled.",
                      author: "Rahul Singh",
                      company: "Royal Enfield",
                      role: "Security Coordinator",
                      rating: 5
                    }
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="inline-block w-[400px] shrink-0 bg-white/5 backdrop-blur-sm p-10 border border-white/10 relative group hover:bg-white/10 transition-all duration-500 rounded-xl whitespace-normal"
                    >
                      <div className="flex gap-1 mb-6">
                        {Array(t.rating).fill(null).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary-container text-secondary-container" />
                        ))}
                      </div>
                      <Quote className="text-secondary-container w-8 h-8 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                      <p className="text-white/90 text-lg font-body leading-relaxed mb-8 italic">
                        "{t.quote}"
                      </p>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container font-bold text-xl uppercase">
                          {t.author[0]}
                        </div>
                        <div>
                          <div className="text-secondary-container font-headline font-bold text-lg">{t.author}</div>
                          <div className="text-white/60 text-[10px] uppercase tracking-widest mt-1 font-bold">
                            {t.role}, {t.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-primary font-headline text-4xl md:text-6xl font-black tracking-tight">Ready to Secure Your Assets?</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-body">
              Join 100+ corporate partners who trust Dhaal Security Services for their national protection needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (onContactClick) onContactClick();
                }}
                className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-xl hover:brightness-110 transition-all shadow-2xl flex items-center gap-3 group"
              >
                Get a Custom Proposal
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919450783665"
                className="bg-surface-container text-primary border border-outline-variant px-10 py-5 rounded-xl font-bold text-xl hover:bg-surface-container-high transition-all flex items-center gap-3"
              >
                Speak with an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
