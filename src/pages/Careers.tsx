import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users, Search, ClipboardCheck, Dumbbell, UserCheck, GraduationCap, Briefcase, ChevronRight, Medal, CheckCircle2 } from 'lucide-react';

const Careers: React.FC = () => {
  const standards = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Unwavering Integrity",
      description: "We uphold the highest ethical standards. Our personnel are vetted for character and reliability, ensuring absolute trust for our clients."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Tactical Precision",
      description: "Every action is calculated. We train our staff in advanced tactical maneuvers and situational awareness to handle any security challenge."
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: "Physical Excellence",
      description: "Rigorous physical fitness is a non-negotiable standard. Our team maintains peak physical condition to perform under high-stress environments."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
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
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/security-training/1920/1080" 
            alt="Security Training" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-highest"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
              Join the Elite
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6 tracking-tight">
              Careers at <span className="text-primary italic">Dhaal</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-body">
              We don't just hire guards; we build tactical professionals. Join a legacy of protection and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-on-surface mb-4">
                Our <span className="italic text-primary">Standards</span>
              </h2>
              <p className="text-on-surface-variant">
                At Dhaal Security, we maintain a standard that sets us apart. Our personnel are the face of our commitment to safety.
              </p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-outline-variant mx-8 mb-4 opacity-30"></div>
            <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-tighter">
              <Medal className="w-5 h-5" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors border border-outline-variant/30 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{standard.title}</h3>
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
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {recruitmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="px-2">
                    <h3 className="text-sm font-bold text-on-surface mb-2 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.description}
                    </p>
                  </div>
                  {index < recruitmentSteps.length - 1 && (
                    <div className="lg:hidden my-4 text-primary/30">
                      <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-primary text-on-primary p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Shield className="w-64 h-64" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Ready to Serve <br />With <span className="italic opacity-80">Distinction?</span>
                </h2>
                <p className="text-on-primary/80 mb-8 text-lg">
                  We are always looking for dedicated individuals to join our ranks. If you have the drive and the discipline, we have a place for you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:careers@dhaalsecurity.com" 
                    className="px-8 py-4 bg-on-primary text-primary font-bold rounded-xl hover:bg-on-primary/90 transition-colors flex items-center gap-2"
                  >
                    Send Resume
                    <Briefcase className="w-5 h-5" />
                  </a>
                  <button className="px-8 py-4 border border-on-primary/30 text-on-primary font-bold rounded-xl hover:bg-on-primary/10 transition-colors">
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
