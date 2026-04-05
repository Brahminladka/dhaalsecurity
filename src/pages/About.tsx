import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users, ChevronRight, Medal, Quote, ArrowRight, GraduationCap, Gavel } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,125,38,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-container text-xs font-bold uppercase tracking-widest mx-auto">
              <Shield className="w-4 h-4" />
              Operational Command & Heritage
            </div>
            <h1 className="text-white font-headline text-5xl md:text-8xl font-black tracking-tight leading-none group">
              Legacy of <span className="text-secondary-container">Absolute Protection</span>
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto font-body leading-relaxed">
              Established in 2022, Dhaal Security Services Pvt. Ltd. is a PSARA-licensed firm that has evolved into India's most trusted partner for elite guarding and SOP-driven manpower solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src="dss-logo.png" alt="DSS Logo" className="w-16 h-16 object-contain" />
                  <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest rounded">Established 2022</div>
                </div>
                <h2 className="text-primary font-headline text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                  Securing the Nation's <br />Corporate Frontiers
                </h2>
                <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                  <p>Dhaal Security Services Pvt. Ltd. is a premier PSARA-licensed agency providing verified and reliable security services across PAN India. With our central command in Patna and regional hubs in Bhagalpur and Jamshedpur, we deliver superior safety and risk management solutions.</p>
                  <p>Our journey began in 2022 with a vision to redefine protection standards through rigorous Police Verification and SOP-driven discipline. Today, we operate with tactical precision and absolute integrity nationwide.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Target className="w-6 h-6" />
                    <h4 className="font-headline font-bold text-lg">Our Mission</h4>
                  </div>
                  <p className="text-on-surface-variant text-sm border-l-2 border-secondary-container pl-4">
                    To deliver uncompromised security through tactical innovation, ethical deployment, and unwavering vigilance.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Award className="w-6 h-6" />
                    <h4 className="font-headline font-bold text-lg">Our Vision</h4>
                  </div>
                  <p className="text-on-surface-variant text-sm border-l-2 border-secondary-container pl-4">
                    To become the global gold standard for integrated security and facility management solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-all duration-700"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-[0_30px_60px_rgba(0,0,60,0.04)] border-b-4 border-secondary-container"
                  >
                    <div className="text-primary font-headline text-4xl font-black mb-1">2022</div>
                    <div className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">Founded</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-primary p-8 text-white rounded-2xl shadow-xl mt-4"
                  >
                    <div className="text-secondary-container font-headline text-4xl font-black mb-1">50+</div>
                    <div className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Corporate Clients</div>
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-primary p-8 text-white rounded-2xl shadow-xl"
                  >
                    <div className="text-secondary-container font-headline text-4xl font-black mb-1">2025</div>
                    <div className="text-white/60 font-bold uppercase tracking-widest text-[10px]">PAN India Expansion</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-[0_30px_60px_rgba(0,0,60,0.04)] border-b-4 border-secondary-container mt-4"
                  >
                    <div className="text-primary font-headline text-4xl font-black mb-1">2+</div>
                    <div className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px]">Years of Excellence</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-[500px] aspect-[4/5] bg-primary relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="director.png" 
                alt="Founding Director Niraj V. Tiwari" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
                <div className="font-headline text-2xl font-bold text-white">Mr. Niraj V. Tiwari</div>
                <div className="text-secondary-container text-xs font-bold uppercase tracking-[0.2em] mt-1">Founding Director</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-secondary-container font-black uppercase tracking-[0.4em] text-xs">Strategic Vision</span>
                <h2 className="text-primary font-headline text-4xl md:text-5xl font-black tracking-tight leading-none">Message from Command</h2>
              </div>
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-9xl text-primary/5 font-serif pointer-events-none">"</span>
                <blockquote className="text-on-surface-variant text-xl italic font-medium leading-relaxed font-body relative z-10">
                  When I established Dhaal Security in 2022, my singular objective was to build a firm that acts as the backbone of national safety. We don’t just deploy guards; we architect peace of mind through rigorous police verification and SOP-driven discipline. Every client, from multinational corporations to local enterprises, receives our absolute commitment to accountability.
                </blockquote>
              </div>
              <div className="flex gap-16 border-t border-outline-variant/30 pt-10">
                <div>
                  <div className="text-primary text-3xl font-black mb-1">12+</div>
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-primary text-3xl font-black mb-1">PAN</div>
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">India Support</div>
                </div>
                <div>
                  <div className="text-primary text-3xl font-black mb-1">24/7</div>
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Command Link</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Marquee Reused */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-primary/60 font-black uppercase tracking-[0.5em] text-sm md:text-base block">Operational Trusted Partners</span>
        </div>
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="flex items-center gap-0 w-max"
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center gap-0">
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
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-xl md:text-2xl font-black tracking-tighter text-on-surface-variant font-headline italic uppercase whitespace-nowrap">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tactical Testimonials Reused */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,125,38,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-secondary-container font-headline text-4xl md:text-6xl font-black tracking-tight uppercase">Operational Feedback</h2>
            <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto">Verified feedback from our strategic partners across the nation.</p>
          </motion.div>
        </div>
        
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[1, 2].map((group) => (
              <div key={group} className="flex gap-8">
                {[
                  { text: "DSS has been our security partner for over 5 years. Their rapid response capabilities are second to none in the industry.", author: "Operations Lead", company: "Industrial Hub" },
                  { text: "Absolute integrity and professional discipline. Every deployment is handled with tactical precision.", author: "Facility Manager", company: "IT Park" },
                  { text: "The night patrolling and coordination with police provide us with unparalleled peace of mind.", author: "Estate Director", company: "Premium Housing" },
                  { text: "High-caliber personnel who are clearly trained for the highest-stake environments.", author: "Security Head", company: "Aviation Sector" }
                ].map((t, idx) => (
                  <div key={idx} className="w-[450px] bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500">
                    <Quote className="w-10 h-10 text-secondary-container mb-6 opacity-30" />
                    <p className="text-white/90 text-lg italic leading-relaxed mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-secondary-container" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{t.author}</div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 bg-primary rounded-[3rem] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-hero-pattern-1 opacity-10 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-white font-headline text-4xl md:text-6xl font-black tracking-tight leading-none">Form a Strategic Alliance Today</h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto font-body">
                Our national command center is ready to architect your next safety strategy. Deploy the Dhaal advantage to your perimeter.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="bg-secondary-container text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-white transition-all shadow-2xl flex items-center gap-3"
                >
                  Consult an Expert
                  <ArrowRight className="w-6 h-6" />
                </button>
                <a 
                  href="tel:+919450783665"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all flex items-center gap-3"
                >
                  24/7 Hotline
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
