import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Shield, Users, Briefcase, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories: FAQCategory[] = [
    {
      title: "General",
      icon: <Shield className="w-5 h-5" />,
      items: [
        {
          question: "What is Dhaal Security Services (DSS Group)?",
          answer: "Dhaal Security Services is a leading security agency in India, providing comprehensive manpower solutions including security guards, armed personnel, and facility management services with a focus on discipline and tactical excellence."
        },
        {
          question: "Where are your branch offices located?",
          answer: "Our head office is in Patna, Bihar. We have strategic branch offices in Bhagalpur (Bihar) and Jamshedpur (Jharkhand) to serve the regional security needs effectively."
        },
        {
          question: "Is Dhaal Security a licensed agency?",
          answer: "Yes, Dhaal Security Services is a fully licensed and compliant private security agency, adhering to all state and central government regulations, including PSARA guidelines."
        }
      ]
    },
    {
      title: "Services",
      icon: <Briefcase className="w-5 h-5" />,
      items: [
        {
          question: "What types of security personnel do you provide?",
          answer: "We provide a wide range of personnel including static Security Guards, Armed Guards (Gunmen), Lady Guards for sensitive environments, and specialized Bouncers for events and high-traffic venues."
        },
        {
          question: "Do you offer 24/7 security coverage?",
          answer: "Absolutely. We operate a 24-hour Manned 'Rapid-Response' Control Room to handle any security-related matters or emergencies our clients may face at any time of the day or night."
        },
        {
          question: "What is included in your Facility Management services?",
          answer: "Our Facility Management includes integrated operational support for commercial and residential buildings, covering technical maintenance oversight, vendor management, and administrative support."
        }
      ]
    },
    {
      title: "Recruitment & Training",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          question: "What are your recruitment standards for security personnel?",
          answer: "We maintain high standards: Lady Guards (5ft, 45kg, Matriculation), Security Guards (5ft 7in, 55kg, HS), Supervisors (Graduation, 3+ years exp), and Assistant Security Officers (Graduate, 5+ years exp)."
        },
        {
          question: "What is the standard contract duration?",
          answer: "Our standard contract duration is 1 year, renewable upon mutual agreement. We require a 1-month notice period for termination of services."
        },
        {
          question: "How are your guards trained and monitored?",
          answer: "All personnel are rigorously trained, disciplined, and wear uniforms on duty. We maintain a 24x7 rapid response control room, conduct regular day and night patrolling, and provide monthly security reports to clients."
        }
      ]
    }
  ];

  return (
    <div className="pt-20 bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-container rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-container rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              Support Center
            </span>
            <h1 className="text-white font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Frequently Asked <span className="text-secondary-container">Questions</span>
            </h1>
            <p className="text-surface-container-low text-xl max-w-2xl mx-auto font-body">
              Find answers to common queries about our tactical security operations, recruitment standards, and facility management services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Categories */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-primary font-headline text-sm font-bold uppercase tracking-widest mb-6">Categories</h3>
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(idx);
                    setOpenIndex(0);
                  }}
                  className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === idx 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  <span className={`mr-3 ${activeCategory === idx ? 'text-secondary-container' : 'text-primary'}`}>
                    {category.icon}
                  </span>
                  <span className="font-bold text-sm">{category.title}</span>
                </button>
              ))}

              <div className="mt-12 p-6 bg-secondary-container/10 rounded-2xl border border-secondary-container/20">
                <MessageSquare className="w-8 h-8 text-secondary-container mb-4" />
                <h4 className="text-primary font-bold mb-2">Still have questions?</h4>
                <p className="text-on-surface-variant text-sm mb-6">Our tactical team is ready to assist you with any specific requirements.</p>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {categories[activeCategory].items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest transition-colors"
                    >
                      <span className="text-primary font-headline font-bold text-lg pr-8">
                        {item.question}
                      </span>
                      <div className={`p-2 rounded-lg transition-all duration-300 ${openIndex === idx ? 'bg-primary text-white' : 'bg-surface-container text-primary'}`}>
                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed border-t border-outline-variant/10 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 bg-surface-container rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/30">
                <div className="flex items-center">
                  <div className="p-4 bg-primary text-secondary-container rounded-2xl mr-6 shadow-xl">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-primary font-headline text-2xl font-bold">Need a Security Assessment?</h3>
                    <p className="text-on-surface-variant">Request a professional audit of your site's security requirements.</p>
                  </div>
                </div>
                <button className="bg-secondary-container text-on-secondary-fixed px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:brightness-105 transition-all shadow-lg whitespace-nowrap">
                  Request Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
