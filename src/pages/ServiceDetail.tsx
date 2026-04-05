import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Send, Sparkles, Loader2, Medal, AlertCircle, User, ChevronDown } from 'lucide-react';
import { ServiceData } from '../data/services';
import { GoogleGenAI } from "@google/genai";

interface ServiceDetailProps {
  service: ServiceData;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Gemini State
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const nextTestimonial = () => {
    if (service.testimonials) {
      setCurrentTestimonial((prev) => (prev + 1) % service.testimonials!.length);
    }
  };

  const prevTestimonial = () => {
    if (service.testimonials) {
      setCurrentTestimonial((prev) => (prev - 1 + service.testimonials!.length) % service.testimonials!.length);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAiConsult = async () => {
    if (!aiInput.trim()) return;
    
    setIsAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      
      const prompt = `You are a security expert at DSS. 
      A potential client is asking about our "${service.title}" service.
      Their specific situation is: "${aiInput}"
      
      Provide a professional, tactical, and brief security recommendation (max 150 words). 
      Highlight how our ${service.title} service specifically addresses their concern. 
      Use a professional, authoritative tone.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ parts: [{ text: prompt }] }],
      });
      
      setAiResponse(response.text || "I apologize, but I'm unable to provide a recommendation at this moment.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setAiResponse("I apologize, but I'm unable to provide a recommendation at this moment. Please contact our human experts below for a detailed assessment.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const shakeVariants = {
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="pt-20 bg-surface min-h-screen">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-8">
          <button 
            onClick={onBack}
            className="flex items-center text-secondary-container hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="relative">
              <div className="p-4 bg-secondary-container text-on-secondary-fixed rounded-2xl shadow-lg">
                {service.icon}
              </div>
              <img src="dss-logo.png" alt="DSS Logo" className="absolute -top-2 -right-2 w-8 h-8 object-contain bg-white rounded-full p-1 shadow-md" />
            </div>
            <div>
              <h1 className="text-white font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-surface-container-low text-lg mt-2 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Image & Description */}
            <section>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-10">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-primary font-headline text-3xl font-bold mb-6">Service Overview</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>
            </section>

            {/* Features */}
            <section className="bg-surface-container p-10 rounded-3xl border border-outline-variant/30">
              <h2 className="text-primary font-headline text-2xl font-bold mb-8 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-secondary-container" />
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary-container mt-1 mr-3 shrink-0" />
                    <span className="text-on-surface font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section className="relative overflow-hidden bg-primary text-white p-10 rounded-3xl shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Medal className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                  Success Story
                </span>
                <h2 className="font-headline text-3xl font-bold mb-6">{service.caseStudy.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-secondary-container font-bold uppercase text-xs tracking-widest mb-2">Challenge</h4>
                    <p className="text-surface-container-low leading-relaxed">
                      {service.caseStudy.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-secondary-container font-bold uppercase text-xs tracking-widest mb-2">Outcome</h4>
                    <p className="text-surface-container-low leading-relaxed">
                      {service.caseStudy.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gemini AI Consultant */}
            <section className="bg-white p-10 rounded-3xl border-2 border-secondary-container/20 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-secondary-container/10 rounded-lg mr-4">
                  <Sparkles className="w-6 h-6 text-secondary-container" />
                </div>
                <div>
                  <h2 className="text-primary font-headline text-2xl font-bold">AI Security Consultant</h2>
                  <p className="text-on-surface-variant text-sm">Get an instant tactical recommendation powered by Gemini</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <textarea 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="Describe your specific security concern or site requirements..."
                    className="w-full bg-surface-container-low border-none rounded-2xl p-5 text-on-surface focus:ring-2 focus:ring-secondary-container min-h-[120px] resize-none transition-all"
                  />
                  <button 
                    onClick={handleAiConsult}
                    disabled={isAiLoading || !aiInput.trim()}
                    className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-xl hover:brightness-110 disabled:opacity-50 transition-all shadow-lg"
                  >
                    {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </button>
                </div>

                {aiResponse && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 border-l-4 border-secondary-container p-6 rounded-r-2xl"
                  >
                    <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Tactical Recommendation:</h4>
                    <p className="text-on-surface leading-relaxed italic">
                      "{aiResponse}"
                    </p>
                  </motion.div>
                )}
              </div>
            </section>

            {/* Testimonials Section - Carousel */}
            {service.testimonials && service.testimonials.length > 0 && (
              <section className="py-16 border-t border-outline-variant/30">
                <h2 className="text-primary font-headline text-3xl font-bold mb-10 text-center">Client Testimonials</h2>
                <div className="relative max-w-2xl mx-auto px-4">
                  <div className="overflow-hidden relative min-h-[300px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -50) nextTestimonial();
                          if (info.offset.x > 50) prevTestimonial();
                        }}
                        className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/20 relative cursor-grab active:cursor-grabbing"
                      >
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary-container text-on-secondary-fixed rounded-full flex items-center justify-center text-4xl font-serif shadow-lg">
                          "
                        </div>
                        <p className="text-on-surface-variant italic mb-8 text-xl leading-relaxed">
                          {service.testimonials[currentTestimonial].quote}
                        </p>
                        <div className="flex items-center">
                          <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center mr-4 shadow-inner">
                            <User className="w-7 h-7 text-on-primary" />
                          </div>
                          <div>
                            <h4 className="text-primary font-bold text-lg">{service.testimonials[currentTestimonial].name}</h4>
                            <p className="text-on-surface-variant text-sm font-medium">
                              {service.testimonials[currentTestimonial].role}, {service.testimonials[currentTestimonial].company}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex justify-center items-center gap-6 mt-8">
                    <button 
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-surface-container hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-md group"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    
                    <div className="flex gap-2">
                      {service.testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentTestimonial(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${currentTestimonial === idx ? 'bg-secondary-container w-8' : 'bg-outline-variant hover:bg-outline'}`}
                          aria-label={`Go to testimonial ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-surface-container hover:bg-secondary-container hover:text-on-secondary-fixed transition-all shadow-md group"
                      aria-label="Next testimonial"
                    >
                      <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Service FAQs Section */}
            {service.serviceFaqs && service.serviceFaqs.length > 0 && (
              <section className="py-16 border-t border-outline-variant/30">
                <h2 className="text-primary font-headline text-3xl font-bold mb-10 text-center">Service FAQs</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  {service.serviceFaqs.map((faq, idx) => (
                    <div key={idx} className="border border-outline-variant/30 rounded-2xl overflow-hidden">
                      <button 
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-6 bg-white hover:bg-surface-container-low transition-colors text-left"
                      >
                        <span className="font-bold text-primary">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-secondary-container transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 bg-surface-container-lowest text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/30">
                <div className="bg-primary p-8 text-white">
                  <h3 className="font-headline text-2xl font-bold">Enquire Now</h3>
                  <p className="text-surface-container-low text-sm mt-2">
                    Request a tailored proposal for {service.title}
                  </p>
                </div>
                
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-10"
                      >
                        <div className="w-20 h-20 bg-secondary-container/20 text-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-primary mb-2">Request Received</h4>
                        <p className="text-on-surface-variant">Your inquiry for {service.title} has been sent successfully! Our team will get back to you shortly.</p>
                        <button 
                          onClick={() => setStatus('idle')}
                          className="mt-8 text-primary font-bold hover:underline"
                        >
                          Send another request
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {status === 'error' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 mb-4"
                          >
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-xs font-bold">There was an issue submitting your request. Please try again or contact us directly via phone.</p>
                          </motion.div>
                        )}
                        
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <motion.div animate={errors.name ? "shake" : "idle"} variants={shakeVariants}>
                            <input 
                              type="text" 
                              name="name"
                              className={`w-full bg-surface-container-low border ${errors.name ? 'border-red-500' : 'border-none'} rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-secondary-container transition-all`}
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </motion.div>
                          {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <motion.div animate={errors.email ? "shake" : "idle"} variants={shakeVariants}>
                            <input 
                              type="email" 
                              name="email"
                              className={`w-full bg-surface-container-low border ${errors.email ? 'border-red-500' : 'border-none'} rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-secondary-container transition-all`}
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </motion.div>
                          {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <motion.div animate={errors.phone ? "shake" : "idle"} variants={shakeVariants}>
                            <input 
                              type="tel" 
                              name="phone"
                              className={`w-full bg-surface-container-low border ${errors.phone ? 'border-red-500' : 'border-none'} rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-secondary-container transition-all`}
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </motion.div>
                          {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            Specific Requirements <span className="text-red-500">*</span>
                          </label>
                          <motion.div animate={errors.message ? "shake" : "idle"} variants={shakeVariants}>
                            <textarea 
                              name="message"
                              className={`w-full bg-surface-container-low border ${errors.message ? 'border-red-500' : 'border-none'} rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-secondary-container transition-all min-h-[100px]`}
                              placeholder="Tell us about your site..."
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </motion.div>
                          {errors.message && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.message}</p>}
                        </div>

                        <button 
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full bg-secondary-container text-on-secondary-fixed py-5 rounded-xl font-headline font-bold uppercase tracking-widest hover:brightness-105 transition-all shadow-lg flex items-center justify-center"
                        >
                          {status === 'submitting' ? (
                            <>
                              <Loader2 className="w-6 h-6 animate-spin mr-2" />
                              Processing...
                            </>
                          ) : "Submit Request"}
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-center">
                <ShieldCheck className="w-10 h-10 text-primary mr-4 opacity-40" />
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Guaranteed Response</p>
                  <p className="text-on-surface-variant text-sm">Our 24/7 control room ensures rapid situational response.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
