import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
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
                    <p className="text-on-surface-variant font-medium">+91 1800 555 9999</p>
                    <p className="text-on-surface-variant/70 text-sm">24/7 Tactical Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-on-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">Operational Inquiries</h4>
                    <p className="text-on-surface-variant font-medium">ops@dhaalsecurity.com</p>
                    <p className="text-on-surface-variant/70 text-sm">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-on-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">Corporate HQ</h4>
                    <p className="text-on-surface-variant font-medium">Dhaal Tower, Sector 62, Noida</p>
                    <p className="text-on-surface-variant/70 text-sm">Uttar Pradesh, India - 201309</p>
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
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-on-secondary-fixed" />
                </div>
                <h3 className="text-primary font-headline text-2xl font-bold">Send a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service Required</label>
                  <select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
                    <option>Corporate Security</option>
                    <option>Event Security</option>
                    <option>Executive Protection</option>
                    <option>Facility Management</option>
                    <option>Intelligence Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your security requirements..."
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
                  <Send className="w-4 h-4" />
                  Submit Tactical Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-surface-container-high relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 text-primary mx-auto opacity-20" />
            <p className="text-on-surface-variant font-headline font-bold uppercase tracking-widest opacity-40">Interactive Map Deployment</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;
