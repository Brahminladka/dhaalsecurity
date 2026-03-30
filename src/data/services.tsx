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
}

export const servicesData: ServiceData[] = [
  {
    id: "security-guards",
    title: "Security Guards",
    description: "Highly trained static and patrolling guards providing a vigilant presence. Our personnel are vetted for discipline and professional conduct at all times.",
    longDescription: "Our Security Guard services are the backbone of Dhaal Security Services. We provide a disciplined force of personnel who are not just guards, but trained safety professionals. Each guard undergoes a rigorous selection process, including background checks and physical fitness assessments. They are trained in surveillance techniques, emergency response, and professional communication to ensure your premises remain secure and welcoming.",
    icon: <Shield className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOZmO1EOT0FC2vA5mwrT8kp9yyuFW36AgkFHW04WhSm85XHR3VSy4or-FH5rmeOqUWWh_N-5imqT4uE6sLPddnbhm2zherF8RKv_TQ9oVe-jUaisMHAmb3wz9FVaRJAY_Gpks4aP9g_6KmXFGfUrZf3kE9CbvCTY0JxJouWyKfAhb5oWDsiGh7wdcpbb6i7v9kT8F7tHbmeESV-MP-_AV-hZ2402hgrI6dSjSDLJZLWgqmT4DpfKaH1iE1ez6JcVvNrrFdFylr8sC",
    caseStudy: {
      title: "Industrial Complex Perimeter Security",
      description: "A large-scale manufacturing unit in Patna was facing repeated unauthorized entries and theft of raw materials.",
      outcome: "After deploying a specialized 24/7 patrolling team and implementing a strict access control log, unauthorized entries were reduced to zero within the first month."
    },
    features: [
      "24/7 Static & Mobile Patrolling",
      "Rigorous Background Verification",
      "Emergency Response Training",
      "Professional Uniform & Conduct",
      "Daily Incident Reporting"
    ]
  },
  {
    id: "armed-guards",
    title: "Armed Guards / Gunman",
    description: "Licensed tactical personnel for high-risk assets and critical infrastructure protection. Professional response teams trained for rapid situational mitigation.",
    longDescription: "For high-value assets and sensitive locations, our Armed Guards provide the ultimate level of protection. All our gunmen are licensed professionals with extensive tactical training. They are selected for their composure under pressure and their ability to assess threats accurately. This service is ideal for banks, jewelry showrooms, and critical infrastructure where a visible, armed deterrent is necessary.",
    icon: <Medal className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlOuMEzaTrxlEDFpUDJshXYv3pXRtxK06AqdcVZcFQTeVxSrdOjIwUaIAdF9M70LKEVGova2YGyQCSQt20TFUvKZQQ6wVSKEmd61-_AQxfmyRCa5YkQLIn4d7MY99Qta_K7aRHMvMU8uhfsKdw1gvkPveSWq2PHwfyUnjesDaor0u6aD05UK4Bu23ZfJMDvKfywq0gwBpyZ8PksL7xj-gdlU9TTjpTvxy0bXUExIW2uGH0aIVKtpPnJPKJuQMnWuHRqtBlKJqJ5miW",
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
    ]
  },
  {
    id: "lady-guards",
    title: "Lady Guards",
    description: "Specialized female security staff for corporate environments, retail, and events requiring gender-sensitive search and surveillance protocols.",
    longDescription: "Our Lady Guards are trained to provide security in environments where female presence is essential for comfort and protocol. From corporate offices to shopping malls and educational institutions, our female security personnel excel in surveillance, frisking, and maintaining order while ensuring a respectful environment. They are trained in self-defense and crisis management specifically for public-facing roles.",
    icon: <User className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsU1Fv-6iVrLZzoUNTLZHHVUjmUvEJF_WT1VXaI4vvjX0hUkDVOsg9M35M98GegdCr8wVIzzNEaN1hPhWsDyO2--TnkaqElC80IbBMjDQCByD4FFc-Z-iCh_xPIXHtblknQXTeZggDeNzjRB0sUPNqgdDT93ot0ZqMrulFLZkJ6KUDUAMr5HquCkkAsxtL-3m0AxVXxjNh6tUoHcknb1BhA_uf35s2BqCMgQS8x-FGeGc85dGPWs18rBg0FCFjmamCLIRd_Ip2X2WG",
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
    ]
  },
  {
    id: "bouncers",
    title: "Bouncers",
    description: "Elite crowd control and executive protection for private events and high-traffic venues. Experts in de-escalation and perimeter management.",
    longDescription: "When it comes to crowd control and event security, our Bouncers are second to none. They are trained in physical intervention techniques, de-escalation, and perimeter protection. Whether it's a high-profile corporate event, a private party, or a high-traffic commercial venue, our bouncers provide a strong physical presence that deters trouble before it starts.",
    icon: <Users className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGGj7s4Nv8i35Dckh38nw2iju5Qa-vRh7nAvfWvY9-I9dzTHgHQz5cBnSt2UfvC8zC6AESoAKq77KslakkG0aXgCg5RuanGCyvbRSYP8P6RkJ6UlaemRVcjICoinTcpMeAOIzkDyHv3wUmm_8xhyQ0ANMuEvs5hWThalNsE1kbf9OLQRk2uFJ-MKwpdlyXBGxiyo8HbDNYOB274uPkRKaxoZl5s6RG-CkNcSSTSgQkOUs5vgHDjfGa5wk1Ofmgr-m8ptwEE9uUytU",
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
    ]
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Integrated operational support for commercial buildings. We ensure seamless building functionality through structured oversight and maintenance.",
    longDescription: "Dhaal Security Services provides comprehensive Facility Management to ensure your commercial or residential property operates at peak efficiency. We handle everything from vendor management and technical maintenance to administrative support. Our goal is to provide a seamless environment so you can focus on your core business while we handle the complexities of building operations.",
    icon: <Building className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH1n02GIG3eQ4P18g5Rx3iNd3sjstvjLSYngA-QM6MlkIgyY9jU0uyoR-delKWrMKJa89Q7tCzb-CFo9KGVzNCPrvwOW1pvbZifiYuBMsMyUMGX_r-ZnG0vKoqG6_LrZebYOQHrq4YNuGSXc0SnnwKFxJawTWwhSuD71dTSySDsowwzpgJ2CQfwznxBFnQ26OK2EdhCtZDbYNtUaAwdKSNDkeScazIqdCptC4rtjqlPEkk1vMukOnq0iAfg8lEFRd6s3aj1I8JDUY",
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
    ]
  },
  {
    id: "industrial-security",
    title: "Industrial Security",
    description: "Specialized security for manufacturing units, factories, and warehouses. We ensure perimeter integrity and asset protection.",
    longDescription: "Industrial security requires a deep understanding of operational risks and perimeter management. Our teams are trained to handle the complexities of large-scale manufacturing environments, ensuring that raw materials, finished goods, and critical machinery are protected 24/7. We implement strict access control, regular patrolling, and emergency response protocols tailored to industrial needs.",
    icon: <Building className="w-8 h-8" />,
    image: "https://picsum.photos/seed/industrial/1920/1080",
    caseStudy: {
      title: "Manufacturing Plant Perimeter Integrity",
      description: "A major industrial hub in Bhagalpur was experiencing inventory shrinkage and unauthorized access.",
      outcome: "By deploying a specialized industrial security team and implementing a digital log system, inventory losses were reduced by 95% within 3 months."
    },
    features: [
      "Perimeter Surveillance & Patrolling",
      "Material Movement Monitoring",
      "Access Control & Visitor Logs",
      "Fire Safety & Emergency Drills",
      "Loss Prevention Strategies"
    ]
  },
  {
    id: "hotel-security",
    title: "Hotel & Club Security",
    description: "Professional security solutions for hospitality venues, ensuring guest safety and asset protection with a focus on service excellence.",
    longDescription: "In the hospitality industry, security must be both effective and discreet. Our Hotel & Club Security teams are trained in guest relations, de-escalation, and emergency management. We provide a safe environment for guests and staff while protecting the property's assets and reputation. Our personnel are groomed for professional conduct and seamless integration with hotel operations.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://picsum.photos/seed/hotel/1920/1080",
    caseStudy: {
      title: "Luxury Hotel Guest Safety",
      description: "A premier hotel in Patna required a security team that could handle high-profile guests and large events without disrupting the guest experience.",
      outcome: "Our team provided a seamless security layer, successfully managing over 50 high-profile events with zero security incidents."
    },
    features: [
      "Guest & Staff Safety Protocols",
      "Event & Crowd Management",
      "CCTV Monitoring & Surveillance",
      "Emergency Evacuation Planning",
      "Professional & Discreet Presence"
    ]
  },
  {
    id: "retail-commercial",
    title: "Retail & Commercial Security",
    description: "Comprehensive security for shopping malls, retail outlets, and commercial complexes. We focus on loss prevention and customer safety.",
    longDescription: "Retail and commercial environments face unique challenges, from shoplifting to crowd management. Our security solutions are designed to mitigate these risks while ensuring a safe and pleasant shopping experience. We provide trained guards for floor patrolling, access control, and loss prevention, using a combination of human vigilance and advanced surveillance technology.",
    icon: <Users className="w-8 h-8" />,
    image: "https://picsum.photos/seed/retail/1920/1080",
    caseStudy: {
      title: "Commercial Complex Access Control",
      description: "A busy commercial complex in Jamshedpur was struggling with unauthorized parking and vendor management.",
      outcome: "Our integrated security and parking management solution improved traffic flow by 50% and eliminated unauthorized vendor entry."
    },
    features: [
      "Loss Prevention & Shoplifting Deterrence",
      "Crowd & Parking Management",
      "Vendor & Visitor Monitoring",
      "Surveillance & CCTV Oversight",
      "Customer Service Oriented Guarding"
    ]
  },
  {
    id: "emergency-services",
    title: "Emergency & Safety Services",
    description: "Specialized services including fire drills, building evacuations, and emergency preparedness to ensure total safety.",
    longDescription: "Beyond manned guarding, we provide critical safety services to ensure your facility is prepared for any emergency. This includes conducting regular fire drills, designing building evacuation plans, and maintaining fire equipment. Our goal is to create a culture of safety and preparedness, ensuring that both personnel and assets are protected in the event of a crisis.",
    icon: <Shield className="w-8 h-8" />,
    image: "https://picsum.photos/seed/emergency/1920/1080",
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
    ]
  }
];
