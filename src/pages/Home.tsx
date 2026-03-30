import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Users, BadgeCheck, Gavel, Medal, GraduationCap, Network } from 'lucide-react';

const Home: React.FC = () => {
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
              Founded on the principles of absolute integrity and tactical precision, Dhaal Security has evolved into India's premier manpower solution.
            </p>
            <button className="bg-secondary-container text-on-secondary-fixed px-8 py-4 rounded-lg font-bold text-lg hover:opacity-80 transition-all duration-300 active:scale-95 shadow-xl">
              Request Assessment
            </button>
          </motion.div>
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
              <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary text-xs font-bold uppercase tracking-widest rounded">The Legacy</div>
              <h2 className="text-primary font-headline text-4xl font-extrabold leading-tight">A Decade of Defending Excellence</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                <p>From our humble beginnings as a specialized consulting firm, Dhaal Security Services recognized a critical gap in the Indian market: the need for disciplined, high-caliber manpower that operates with military precision.</p>
                <p>Today, we stand as a fortress of reliability, integrating human intelligence with advanced surveillance to protect the nation's most critical assets.</p>
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
              <Shield className="text-secondary-container w-12 h-12" />
              <h3 className="text-white font-headline text-3xl font-bold tracking-tight">Mission</h3>
              <p className="text-white/80 text-xl font-body leading-relaxed italic">
                "To engineer the most disciplined, technologically advanced, and reliable manpower solutions in India."
              </p>
            </motion.div>
            {/* Vision Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface-container-high p-12 lg:p-16 space-y-8 group transition-all duration-500 hover:shadow-2xl"
            >
              <Eye className="text-primary w-12 h-12" />
              <h3 className="text-primary font-headline text-3xl font-bold tracking-tight">Vision</h3>
              <p className="text-on-surface-variant text-xl font-body leading-relaxed italic">
                "To be the global benchmark for security excellence, ensuring every partner operates in an environment of absolute safety."
              </p>
            </motion.div>
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
                At Dhaal, we don't just provide guards; we architect safety. Our commitment is to the peace of mind of every client we serve.
              </blockquote>
              <div>
                <div className="font-headline font-extrabold text-xl text-primary">Vikram Singh Rathore</div>
                <div className="text-on-surface-variant uppercase tracking-widest text-xs font-bold mt-1">Managing Director & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
