import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Corporate Security',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Full name is required';
      } else if (value.trim().length < 3) {
        error = 'Name must be at least 3 characters';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Invalid email format';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Message is required';
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters';
      }
    }
    
    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
    return !error;
  };

  const validate = () => {
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);
    return isNameValid && isEmailValid && isMessageValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsConfirmOpen(true);
  };

  const executeSubmit = async () => {
    setIsConfirmOpen(false);
    setStatus('submitting');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Corporate Security', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const shakeVariants = {
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="bg-background text-on-background font-body pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,125,38,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="dss-logo.png" alt="DSS Logo" className="w-20 h-20 object-contain mx-auto mb-6" />
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Command Headquarters
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Our tactical support team is available 24/7 to address your security concerns and provide immediate deployment solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-primary font-headline text-4xl font-extrabold mb-6">Get in Touch</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Whether you require corporate security, event management, or specialized intelligence services, our experts are ready to assist you.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-on-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">Emergency Hotline</h4>
                    <p className="text-on-surface-variant font-medium">9450783665</p>
                    <p className="text-on-surface-variant/70 text-sm">24/7 Support Line</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-on-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">Operational Inquiries</h4>
                    <p className="text-on-surface-variant font-medium">dssplpatna@gmail.com</p>
                    <p className="text-on-surface-variant/70 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-on-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-headline font-bold text-primary text-lg">Corporate Head Office</h4>
                      <p className="text-on-surface-variant font-medium">Near Surya Mandir, 1st Floor,</p>
                      <p className="text-on-surface-variant font-medium">Phulwari Khagaul Road, Anisabad,</p>
                      <p className="text-on-surface-variant font-medium">Patna, Bihar – 800002</p>
                      <p className="text-secondary-container font-bold text-xs uppercase tracking-widest mt-2">Serving PAN India</p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30">
                      <h4 className="font-headline font-bold text-primary mb-1">Bhagalpur Branch</h4>
                      <p className="text-on-surface-variant text-sm">Ward No. 6, Prem Nagar, Sabour</p>
                      <p className="text-on-surface-variant text-sm">Bhagalpur, Bihar – 813210</p>
                      <p className="text-on-surface-variant text-sm font-bold mt-1">Cell: 8252514111</p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30">
                      <h4 className="font-headline font-bold text-primary mb-1">Jamshedpur Branch</h4>
                      <p className="text-on-surface-variant text-sm">Road No. 4, Adityapur-2</p>
                      <p className="text-on-surface-variant text-sm">Saraikela-Kharsawan (Jamshedpur) – 831013</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-on-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">Office Hours</h4>
                    <p className="text-on-surface-variant font-medium">Mon - Sat: 09:00 - 18:00</p>
                    <p className="text-on-surface-variant/70 text-sm">Operations: 24/7/365</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-outline-variant flex gap-8 grayscale opacity-60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">PSARA Licensed</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_30px_60px_rgba(0,0,60,0.08)] border border-primary/5"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-on-secondary-fixed" />
                  </div>
                  <h3 className="text-primary font-headline text-2xl font-bold">Send a Message</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-4 bg-secondary-container/10 border border-secondary-container/30 rounded-lg flex items-center gap-3 text-primary"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-bold">Your inquiry has been sent successfully! Our team will get back to you shortly.</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-bold">There was an issue submitting your request. Please try again or contact us directly via phone.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <motion.div
                      animate={errors.name ? "shake" : "idle"}
                      variants={shakeVariants}
                    >
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-surface-container-low border ${errors.name ? 'border-red-500' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />
                    </motion.div>
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <motion.div
                      animate={errors.email ? "shake" : "idle"}
                      variants={shakeVariants}
                    >
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 bg-surface-container-low border ${errors.email ? 'border-red-500' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />
                    </motion.div>
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service Required</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option>Corporate Security</option>
                      <option>Event Security</option>
                      <option>Executive Protection</option>
                      <option>Facility Management</option>
                      <option>Intelligence Services</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    animate={errors.message ? "shake" : "idle"}
                    variants={shakeVariants}
                  >
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your security requirements..."
                      className={`w-full px-4 py-3 bg-surface-container-low border ${errors.message ? 'border-red-500' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none`}
                    ></textarea>
                  </motion.div>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full ${status === 'submitting' ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'} text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary/20`}
                >
                  {status === 'submitting' ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === 'submitting' ? 'Processing Transmission...' : 'Submit Tactical Request'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] bg-surface-container-high relative overflow-hidden z-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.385412496884!2d85.08051759999999!3d25.5934006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581a00a18413%3A0xf6a7fb2a149b5a8e!2sAnisabad%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Dhaal Security Services Map Location"
        />
      </section>

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {isConfirmOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConfirmOpen(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-primary/10"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-secondary-container/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-8 h-8 text-secondary-container" />
                </div>
                <h3 className="text-primary font-headline text-2xl font-bold text-center mb-4">Confirm Tactical Request</h3>
                <p className="text-on-surface-variant text-center mb-8">
                  Are you sure you want to submit this security inquiry? Our deployment team will be notified immediately.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setIsConfirmOpen(false)}
                    className="px-6 py-3 border border-outline-variant rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-surface-container-low transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={executeSubmit}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low px-8 py-4 border-t border-outline-variant/30 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 text-on-surface-variant/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50">Secure Transmission Protocol</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
