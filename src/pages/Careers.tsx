import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users, Search, ClipboardCheck, Dumbbell, UserCheck, GraduationCap, Briefcase, ChevronRight, Medal, CheckCircle2 } from 'lucide-react';

interface CareersProps {
  setCurrentPage?: (page: string) => void;
}

const Careers: React.FC<CareersProps> = ({ setCurrentPage }) => {
  const standards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Unwavering Integrity",
      description: "We uphold the highest ethical standards. Our personnel are vetted for character and reliability, ensuring absolute trust for our clients."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tactical Precision",
      description: "Every action is calculated. We train our staff in advanced tactical maneuvers and situational awareness to handle any security challenge."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Physical Excellence",
      description: "Rigorous physical fitness is a non-negotiable standard. Our team maintains peak physical condition to perform under high-stress environments."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Continuous Training",
      description: "The security landscape evolves, and so do we. Regular drills, technology training, and psychological preparedness are part of our DNA."
    }
  ];

  const recruitmentSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Application & Screening",
      description: "Initial review of qualifications, experience, and basic eligibility criteria."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Physical Endurance Test",
      description: "Candidates must pass a series of physical challenges to prove their fitness levels."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Psychological Assessment",
      description: "Evaluating mental stability, stress management, and decision-making capabilities."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Background Verification",
      description: "Comprehensive check of criminal records, previous employment, and character references."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Final Interview",
      description: "One-on-one interaction with our tactical board to assess cultural fit and professional drive."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Tactical Training",
      description: "Intensive 4-week training program covering combat, surveillance, and first aid."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Deployment",
      description: "Successful candidates are assigned to elite units across India based on their performance."
    }
  ];

  return (
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="gallery/gallery_07.jpeg" 
            alt="Security Training" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6">
              Join the National Force
            </span>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              Careers at <span className="text-secondary-container italic">Dhaal</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl font-body leading-relaxed">
              We don't just recruit; we architect tactical professionals. Join a 2-year legacy of elite protection and contribute to our 2025 PAN India mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-primary font-headline text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                The Dhaal <span className="italic text-secondary-container">Standard</span>
              </h2>
              <p className="text-on-surface-variant text-lg">
                At Dhaal Security, we maintain PSARA-compliant benchmarks that set us apart. Our personnel are the verified face of our commitment to national safety.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] bg-surface-container-low px-6 py-3 rounded-full border border-outline-variant/30">
              <Medal className="w-5 h-5 text-secondary-container" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,60,0.05)] border border-outline-variant/30 group hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-8 p-4 bg-primary text-secondary-container rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-primary font-headline text-xl font-bold mb-4">{standard.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-on-surface mb-6">
              Recruitment <span className="italic text-primary">Process</span>
            </h2>
            <p className="text-on-surface-variant">
              Our selection process is rigorous and transparent, designed to identify individuals who possess the right blend of physical ability and mental fortitude.
            </p>
          </div>

          <div className="relative">
            {/* Process Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
              {recruitmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary-container group-hover:border-primary transition-all duration-300 shadow-xl relative z-20">
                    {step.icon}
                  </div>
                  <div className="px-2 min-h-[60px] flex flex-col justify-start">
                    <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest leading-tight">{step.title}</h3>
                    <p className="text-[10px] text-on-surface-variant leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-primary text-on-primary p-12 md:p-20 relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
              <Shield className="w-[500px] h-[500px]" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-white font-headline text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
                  Ready to Serve <br />With <span className="italic text-secondary-container">Distinction?</span>
                </h2>
                <p className="text-white/80 mb-12 text-xl leading-relaxed">
                  Join our elite force of 50+ corporate partners and scale your career with our 2025 PAN India expansion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:dssplpatna@gmail.com" 
                    className="px-8 py-4 bg-on-primary text-primary font-bold rounded-xl hover:bg-on-primary/90 transition-colors flex items-center gap-2"
                  >
                    Send Resume
                    <Briefcase className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setCurrentPage?.('contact');
                    }}
                    className="px-8 py-4 border border-on-primary/30 text-on-primary font-bold rounded-xl hover:bg-on-primary/10 transition-colors"
                  >
                    View Openings
                  </button>
                </div>
              </div>
              
              <div className="bg-on-primary/5 rounded-2xl p-8 border border-on-primary/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Minimum Requirements
                </h3>
                <ul className="space-y-4">
                  {[
                    "Minimum Height: 170cm (Male) / 155cm (Female)",
                    "Education: Minimum 10th Pass (High School)",
                    "Age: 18 - 45 Years",
                    "Clean Criminal Record (Verified by Police)",
                    "Basic English/Hindi Proficiency",
                    "Physical Fitness Certification"
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-primary/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-on-primary mt-1.5 shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
