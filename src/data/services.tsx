import React from 'react';
import { Shield, Medal, User, Users, Building, Sparkles } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  image: string;
  caseStudy: {
    title: string;
    description: string;
    outcome: string;
  };
  features: string[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    quote: string;
  }[];
  serviceFaqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "security-guards",
    title: "Security Guards",
    description: "Highly trained static and patrolling guards providing a vigilant presence. Our personnel are vetted for discipline and professional conduct at all times.",
    longDescription: "Our Security Guard services are the backbone of Dhaal Security Services. We provide a disciplined force of personnel who are not just guards, but trained safety professionals. Each guard undergoes a rigorous selection process, including background checks and physical fitness assessments. They are trained in surveillance techniques, emergency response, and professional communication to ensure your premises remain secure and welcoming.",
    icon: <Shield className="w-8 h-8" />,
    image: "services/guard.png",
    caseStudy: {
      title: "Industrial Complex Perimeter Security",
      description: "A large-scale manufacturing unit was facing repeated unauthorized entries and theft of raw materials.",
      outcome: "After deploying a specialized 24/7 PAN India patrolling team and implementing a strict access control log, unauthorized entries were reduced to zero within the first month."
    },
    features: [
      "24/7 Static & Mobile Patrolling",
      "Rigorous Background Verification",
      "Emergency Response Training",
      "Professional Uniform & Conduct",
      "Daily Incident Reporting"
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "Operations Manager",
        company: "Suzuki Motors",
        quote: "The discipline and professionalism of Dhaal's guards are unmatched. They've transformed our factory security protocols completely."
      },
      {
        name: "Amit Verma",
        role: "Facility Director",
        company: "GM Modular Pvt. Ltd.",
        quote: "Reliable and efficient. Their security personnel are well-trained and highly disciplined."
      }
    ],
    serviceFaqs: [
      {
        question: "What kind of training do your guards receive?",
        answer: "Our guards undergo a comprehensive 2-week induction program covering surveillance, fire safety, first aid, and professional conduct, followed by regular on-site refreshers."
      },
      {
        question: "Are your guards background-verified?",
        answer: "Yes, 100% of our personnel undergo strict police verification and background checks before deployment."
      }
    ]
  },
  {
    id: "armed-guards",
    title: "Armed Guards / Gunman",
    description: "Licensed tactical personnel for high-risk assets and critical infrastructure protection. Professional response teams trained for rapid situational mitigation.",
    longDescription: "For high-value assets and sensitive locations, our Armed Guards provide the ultimate level of protection. All our gunmen are licensed professionals with extensive tactical training. They are selected for their composure under pressure and their ability to assess threats accurately. This service is ideal for banks, jewelry showrooms, and critical infrastructure where a visible, armed deterrent is necessary.",
    icon: <Medal className="w-8 h-8" />,
    image: "services/armed.png",
    caseStudy: {
      title: "Banking Sector Asset Protection",
      description: "A regional bank required secure transit and on-site protection for high-value currency movements.",
      outcome: "DSS provided a team of ex-servicemen gunmen who successfully secured over 500 currency transits without a single security breach."
    },
    features: [
      "Licensed Armed Personnel",
      "Ex-Servicemen & Tactical Experts",
      "High-Value Asset Protection",
      "Rapid Threat Mitigation",
      "Strict Firearm Safety Protocols"
    ],
    testimonials: [
      {
        name: "Sanjay Mehta",
        role: "Security Head",
        company: "TVS Logistics",
        quote: "Their rapid response team is truly elite. We had a perimeter breach attempt that was neutralized within minutes thanks to their vigilance."
      }
    ],
    serviceFaqs: [
      {
        question: "Are your gunmen ex-servicemen?",
        answer: "A significant portion of our armed guard force consists of ex-servicemen from the Indian Army and paramilitary forces, ensuring high tactical proficiency."
      },
      {
        question: "Do you handle firearm licensing?",
        answer: "We ensure all our armed personnel possess valid, up-to-date individual firearm licenses as per state regulations."
      }
    ]
  },
  {
    id: "lady-guards",
    title: "Lady Guards",
    description: "Specialized female security staff for corporate environments, retail, and events requiring gender-sensitive search and surveillance protocols.",
    longDescription: "Our Lady Guards are trained to provide security in environments where female presence is essential for comfort and protocol. From corporate offices to shopping malls and educational institutions, our female security personnel excel in surveillance, frisking, and maintaining order while ensuring a respectful environment. They are trained in self-defense and crisis management specifically for public-facing roles.",
    icon: <User className="w-8 h-8" />,
    image: "services/lady.png",
    caseStudy: {
      title: "Retail Mall Crowd Management",
      description: "A major shopping mall needed a security team that could handle female-only zones and sensitive customer interactions.",
      outcome: "The deployment of our Lady Guards led to a 40% increase in customer satisfaction scores regarding safety and professional conduct."
    },
    features: [
      "Gender-Sensitive Surveillance",
      "Professional Frisking Protocols",
      "Corporate & Retail Specialization",
      "Self-Defense & Crisis Training",
      "Empathetic Yet Vigilant Approach"
    ],
    testimonials: [
      {
        name: "Dr. Anjali Sharma",
        role: "Principal",
        company: "New Era High School",
        quote: "Meticulous attention to detail. Dhaal Security Services provides a seamless, high-trust manpower solution for our entire campus, ensuring our students and staff feel completely safe at all times."
      }
    ],
    serviceFaqs: [
      {
        question: "In what settings are lady guards most effective?",
        answer: "They are ideal for retail malls, educational institutions, corporate front desks, and any event requiring female frisking or gender-sensitive surveillance."
      }
    ]
  },
  {
    id: "bouncers",
    title: "Bouncers",
    description: "Elite crowd control and executive protection for private events and high-traffic venues. Experts in de-escalation and perimeter management.",
    longDescription: "When it comes to crowd control and event security, our Bouncers are second to none. They are trained in physical intervention techniques, de-escalation, and perimeter protection. Whether it's a high-profile corporate event, a private party, or a high-traffic commercial venue, our bouncers provide a strong physical presence that deters trouble before it starts.",
    icon: <Users className="w-8 h-8" />,
    image: "services/bouncers.png",
    caseStudy: {
      title: "Corporate Gala Event Security",
      description: "An international tech firm hosted a gala with over 1,000 attendees, including high-profile executives.",
      outcome: "Our team managed the entire perimeter and VIP access points, ensuring zero unauthorized entries and a smooth flow of guests."
    },
    features: [
      "Elite Crowd Control",
      "Executive Protection",
      "De-escalation Expertise",
      "Perimeter Management",
      "Physical Intervention Training"
    ],
    testimonials: [
      {
        name: "Vikash Gupta",
        role: "Regional Security Lead",
        company: "Mankind Pharma",
        quote: "Exceptional service quality. The bouncers provided for our annual meet were well-trained and highly disciplined."
      }
    ],
    serviceFaqs: [
      {
        question: "Do you provide bouncers for private parties?",
        answer: "Yes, we provide bouncers for private events, corporate functions, and commercial venues, ensuring professional crowd management."
      }
    ]
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Integrated operational support for commercial buildings. We ensure seamless building functionality through structured oversight and maintenance.",
    longDescription: "Dhaal Security Services provides comprehensive Facility Management to ensure your commercial or residential property operates at peak efficiency. We handle everything from vendor management and technical maintenance to administrative support. Our goal is to provide a seamless environment so you can focus on your core business while we handle the complexities of building operations.",
    icon: <Building className="w-8 h-8" />,
    image: "services/facility.png",
    caseStudy: {
      title: "Commercial Hub Operational Efficiency",
      description: "A multi-tenant commercial building was struggling with fragmented maintenance and high operational costs.",
      outcome: "By centralizing facility management under DSS, the building saw a 20% reduction in utility costs and a significant improvement in tenant retention."
    },
    features: [
      "Integrated Building Operations",
      "Vendor & Asset Management",
      "Technical Maintenance Oversight",
      "Administrative Support",
      "Cost Optimization Strategies"
    ],
    testimonials: [
      {
        name: "Rahul Singh",
        role: "Store Manager",
        company: "Royal Enfield",
        quote: "Dhaal Security has been our trusted partner for years. Their commitment to facility management is unparalleled."
      }
    ],
    serviceFaqs: [
      {
        question: "What services are included in facility management?",
        answer: "Our services include technical maintenance, housekeeping, vendor management, utility optimization, and administrative support for commercial properties."
      }
    ]
  },
  {
    id: "industrial-security",
    title: "Industrial Security",
    description: "Specialized security for manufacturing units, factories, and warehouses. We ensure perimeter integrity and asset protection.",
    longDescription: "Industrial security requires a deep understanding of operational risks and perimeter management. Our teams are trained to handle the complexities of large-scale manufacturing environments, ensuring that raw materials, finished goods, and critical machinery are protected 24/7. We implement strict access control, regular patrolling, and emergency response protocols tailored to industrial needs.",
    icon: <Building className="w-8 h-8" />,
    image: "services/industrial.png",
    caseStudy: {
      title: "Manufacturing Plant Perimeter Integrity",
      description: "A major industrial hub was experiencing inventory shrinkage and unauthorized access.",
      outcome: "By deploying a specialized industrial security team and implementing a digital log system across multiple sites, inventory losses were reduced by 95% within 3 months."
    },
    features: [
      "Perimeter Surveillance & Patrolling",
      "Material Movement Monitoring",
      "Access Control & Visitor Logs",
      "Fire Safety & Emergency Drills",
      "Loss Prevention Strategies"
    ],
    testimonials: [],
    serviceFaqs: []
  },
  {
    id: "hotel-security",
    title: "Hotel & Club Security",
    description: "Professional security solutions for hospitality venues, ensuring guest safety and asset protection with a focus on service excellence.",
    longDescription: "In the hospitality industry, security must be both effective and discreet. Our Hotel & Club Security teams are trained in guest relations, de-escalation, and emergency management. We provide a safe environment for guests and staff while protecting the property's assets and reputation. Our personnel are groomed for professional conduct and seamless integration with hotel operations.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      title: "Luxury Hotel Guest Safety",
      description: "A premier hotel required a security team that could handle high-profile guests and large events without disrupting the guest experience.",
      outcome: "Our team provided a seamless security layer for their PAN India locations, successfully managing over 50 high-profile events with zero security incidents."
    },
    features: [
      "Guest & Staff Safety Protocols",
      "Event & Crowd Management",
      "CCTV Monitoring & Surveillance",
      "Emergency Evacuation Planning",
      "Professional & Discreet Presence"
    ],
    testimonials: [],
    serviceFaqs: []
  },
  {
    id: "retail-commercial",
    title: "Retail & Commercial Security",
    description: "Comprehensive security for shopping malls, retail outlets, and commercial complexes. We focus on loss prevention and customer safety.",
    longDescription: "Retail and commercial environments face unique challenges, from shoplifting to crowd management. Our security solutions are designed to mitigate these risks while ensuring a safe and pleasant shopping experience. We provide trained guards for floor patrolling, access control, and loss prevention, using a combination of human vigilance and advanced surveillance technology.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      title: "Commercial Complex Access Control",
      description: "A busy commercial complex was struggling with unauthorized parking and vendor management.",
      outcome: "Our integrated security and parking management solution improved traffic flow by 50% and eliminated unauthorized vendor entry across their national chain."
    },
    features: [
      "Loss Prevention & Shoplifting Deterrence",
      "Crowd & Parking Management",
      "Vendor & Visitor Monitoring",
      "Surveillance & CCTV Oversight",
      "Customer Service Oriented Guarding"
    ],
    testimonials: [],
    serviceFaqs: []
  },
  {
    id: "emergency-services",
    title: "Emergency & Safety Services",
    description: "Specialized services including fire drills, building evacuations, and emergency preparedness to ensure total safety.",
    longDescription: "Beyond manned guarding, we provide critical safety services to ensure your facility is prepared for any emergency. This includes conducting regular fire drills, designing building evacuation plans, and maintaining fire equipment. Our goal is to create a culture of safety and preparedness, ensuring that both personnel and assets are protected in the event of a crisis.",
    icon: <Shield className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1599833719482-603173090d3e?auto=format&fit=crop&q=80&w=800",
    caseStudy: {
      title: "Corporate Office Fire Safety Audit",
      description: "A large corporate office needed to upgrade its emergency preparedness and fire safety protocols.",
      outcome: "We conducted a comprehensive safety drive and implemented a regular fire drill schedule, resulting in a 100% safety compliance rating."
    },
    features: [
      "Fire Drills & Safety Drives",
      "Building Evacuation Planning",
      "Fire Equipment Maintenance",
      "Emergency Preparedness Training",
      "Government Liaisoning for Safety"
    ],
    testimonials: [],
    serviceFaqs: []
  }
];
