import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Users, BadgeCheck, Gavel, Medal, GraduationCap, Network, Star, Quote, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

interface HomeProps {
  onServiceClick?: (serviceId: string) => void;
  onContactClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onServiceClick, onContactClick }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center bg-hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Our Journey of Vigilance
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-body leading-relaxed max-w-xl">
              Founded on the principles of absolute integrity and tactical precision, DSS has evolved into India's premier manpower solution.
            </p>
            <button 
              onClick={onContactClick}
              className="bg-secondary-container text-on-secondary-fixed px-8 py-4 rounded-lg font-bold text-lg hover:opacity-80 transition-all duration-300 active:scale-95 shadow-xl"
            >
              Request Assessment
            </button>
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
              <p className="text-on-surface-variant mt-4 text-lg font-body">Tactical protection solutions engineered for Bihar & Jharkhand's most critical environments.</p>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // This is just a placeholder, App.tsx handles navigation
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
                <img src="/dss-logo.png" alt="DSS Logo" className="w-16 h-16 object-contain" />
                <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest rounded">Welcome to DSS Group</div>
              </div>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                <p>DSS Group is a leading security agency in Bihar, providing verified and reliable security services with superior safety, risk management, and manpower solutions.</p>
                <p>Dhaal Security Services Pvt. Ltd. was established to deliver a complete manpower solution. Our headquarters is located near Surya Mandir, Anisabad, Patna.</p>
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
                <div className="text-primary font-headline text-3xl font-black mb-2">2012</div>
                <div className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Founded</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-primary p-8 text-white mt-8"
              >
                <div className="text-secondary-container font-headline text-3xl font-black mb-2">2015</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-xs">100+ Clients</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-primary p-8 text-white"
              >
                <div className="text-secondary-container font-headline text-3xl font-black mb-2">2018</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-xs">Pan-India Expansion</div>
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

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low opacity-50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-primary p-12 lg:p-16 space-y-8 group transition-all duration-500 hover:shadow-2xl"
            >
              <Network className="text-secondary-container w-12 h-12" />
              <h3 className="text-white font-headline text-3xl font-bold tracking-tight">Mission</h3>
              <ul className="text-white/80 text-lg font-body space-y-2">
                <li>• Build long-term partnerships with clients</li>
                <li>• Provide innovative security solutions</li>
                <li>• Deliver exceptional value for money</li>
                <li>• Ensure absolute peace of mind</li>
              </ul>
            </motion.div>
            {/* Vision Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface-container-high p-12 lg:p-16 space-y-8 group transition-all duration-500 hover:shadow-2xl"
            >
              <Eye className="text-primary w-12 h-12" />
              <h3 className="text-primary font-headline text-3xl font-bold tracking-tight">Vision</h3>
              <p className="text-on-surface-variant text-xl font-body leading-relaxed italic">
                "To become a leading provider of property and facility management services using advanced technology and excellence."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Standards</span>
            <h2 className="text-primary font-headline text-4xl md:text-5xl font-black tracking-tight">Recruitment Process</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Lady Security Guard",
                specs: ["Height: 5 ft", "Weight: 45 kg", "Education: Matriculation"]
              },
              {
                title: "Security Guard",
                specs: ["Height: 5 ft 7 in", "Weight: 55 kg", "Education: Minimum HS"]
              },
              {
                title: "Security Supervisor",
                specs: ["Height: 5 ft 7 in", "Weight: 55 kg", "Education: Graduation", "Exp: 3+ Years"]
              },
              {
                title: "Assistant Security Officer",
                specs: ["Height: 5 ft 7 in", "Weight: 55 kg", "Education: Graduate", "Exp: 5+ Years"]
              }
            ].map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <Users className="w-8 h-8 text-primary mb-6" />
                <h4 className="font-headline font-bold text-lg text-primary mb-4">{role.title}</h4>
                <ul className="space-y-2">
                  {role.specs.map((spec, j) => (
                    <li key={j} className="text-on-surface-variant text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary-container rounded-full"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 bg-primary-container overflow-hidden rounded-lg shadow-2xl relative">
              <img 
                alt="Professional portrait of the Director" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBab6is_uQkLONDfL61U9jPxLbVNCOWdmlgLgnWjNWUAysD-LI_Y7tMS3_31mdnI1QyDbswqKPIbyldoq4LdJHSbrzRXCsDzd3JBg4CjzMvUpIx8M8887_IvSDa58Znlv61V74iAzOrK5Ua4WbUrpcSXEWg3Ar08jMY99mXDd1DZOf2ap8sGuG3PveIGifgwobSlgulqoCbAZTH6wqSeH8E-bj2peZiepqknWeTfX0E8QE7_IPb75Smmy6ZNCxgIpySjeAMdFhTcEBx"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-secondary-container/20 pointer-events-none"></div>
            </div>
            <div className="space-y-8">
              <span className="text-secondary-container text-6xl opacity-30 font-serif">"</span>
              <blockquote className="text-primary font-headline text-3xl md:text-4xl font-bold leading-tight -mt-4">
                At DSS, we don't just provide guards; we architect safety. Our commitment is to the peace of mind of every client we serve.
              </blockquote>
              <div>
                <div className="font-headline font-extrabold text-xl text-primary">Vikram Singh Rathore</div>
                <div className="text-on-surface-variant uppercase tracking-widest text-xs font-bold mt-1">Managing Director & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['TATA', 'RELIANCE', 'ADANI', 'WIPRO', 'INFOSYS'].map((brand) => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-on-surface-variant font-headline italic">{brand}</span>
            ))}
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The discipline and professionalism of Dhaal's guards are unmatched. They've transformed our factory security protocols completely.",
                author: "Rajesh Kumar",
                company: "Suzuki Motors",
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
                quote: "Meticulous attention to detail. From housekeeping to armed guarding, Dhaal provides a seamless manpower solution for our entire campus.",
                author: "Dr. Anjali Sharma",
                company: "New Era High School Patna",
                role: "Principal",
                rating: 5
              },
              {
                quote: "Reliable and efficient. Their facility management services have significantly improved our operational uptime.",
                author: "Amit Verma",
                company: "GM Modular Pvt. Ltd.",
                role: "Facility Director",
                rating: 5
              },
              {
                quote: "Exceptional service quality. The security personnel are well-trained and highly disciplined.",
                author: "Vikash Gupta",
                company: "Mankind Pharma",
                role: "Regional Security Lead",
                rating: 5
              },
              {
                quote: "Dhaal Security has been our trusted partner for years. Their commitment to safety is unparalleled.",
                author: "Rahul Singh",
                company: "Royal Enfield",
                role: "Store Manager",
                rating: 5
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 relative group hover:bg-white/10 transition-all duration-500 rounded-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary-container text-secondary-container" />
                  ))}
                </div>
                <Quote className="text-secondary-container w-8 h-8 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                <p className="text-white/90 text-lg font-body leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container font-bold text-xl">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-secondary-container font-headline font-bold text-lg">{t.author}</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest mt-1 font-bold">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
