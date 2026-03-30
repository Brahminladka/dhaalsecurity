import React from 'react';
import { motion } from 'motion/react';
import { Shield, Medal, User, Users, Building, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Security Guards",
      description: "Highly trained static and patrolling guards providing a vigilant presence. Our personnel are vetted for discipline and professional conduct at all times.",
      icon: <Shield className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOZmO1EOT0FC2vA5mwrT8kp9yyuFW36AgkFHW04WhSm85XHR3VSy4or-FH5rmeOqUWWh_N-5imqT4uE6sLPddnbhm2zherF8RKv_TQ9oVe-jUaisMHAmb3wz9FVaRJAY_Gpks4aP9g_6KmXFGfUrZf3kE9CbvCTY0JxJouWyKfAhb5oWDsiGh7wdcpbb6i7v9kT8F7tHbmeESV-MP-_AV-hZ2402hgrI6dSjSDLJZLWgqmT4DpfKaH1iE1ez6JcVvNrrFdFylr8sC"
    },
    {
      title: "Armed Guards / Gunman",
      description: "Licensed tactical personnel for high-risk assets and critical infrastructure protection. Professional response teams trained for rapid situational mitigation.",
      icon: <Medal className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlOuMEzaTrxlEDFpUDJshXYv3pXRtxK06AqdcVZcFQTeVxSrdOjIwUaIAdF9M70LKEVGova2YGyQCSQt20TFUvKZQQ6wVSKEmd61-_AQxfmyRCa5YkQLIn4d7MY99Qta_K7aRHMvMU8uhfsKdw1gvkPveSWq2PHwfyUnjesDaor0u6aD05UK4Bu23ZfJMDvKfywq0gwBpyZ8PksL7xj-gdlU9TTjpTvxy0bXUExIW2uGH0aIVKtpPnJPKJuQMnWuHRqtBlKJqJ5miW"
    },
    {
      title: "Lady Guards",
      description: "Specialized female security staff for corporate environments, retail, and events requiring gender-sensitive search and surveillance protocols.",
      icon: <User className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsU1Fv-6iVrLZzoUNTLZHHVUjmUvEJF_WT1VXaI4vvjX0hUkDVOsg9M35M98GegdCr8wVIzzNEaN1hPhWsDyO2--TnkaqElC80IbBMjDQCByD4FFc-Z-iCh_xPIXHtblknQXTeZggDeNzjRB0sUPNqgdDT93ot0ZqMrulFLZkJ6KUDUAMr5HquCkkAsxtL-3m0AxVXxjNh6tUoHcknb1BhA_uf35s2BqCMgQS8x-FGeGc85dGPWs18rBg0FCFjmamCLIRd_Ip2X2WG"
    },
    {
      title: "Bouncers",
      description: "Elite crowd control and executive protection for private events and high-traffic venues. Experts in de-escalation and perimeter management.",
      icon: <Users className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGGj7s4Nv8i35Dckh38nw2iju5Qa-vRh7nAvfWvY9-I9dzTHgHQz5cBnSt2UfvC8zC6AESoAKq77KslakkG0aXgCg5RuanGCyvbRSYP8P6RkJ6UlaemRVcjICoinTcpMeAOIzkDyHv3wUmm_8xhyQ0ANMuEvs5hWThalNsE1kbf9OLQRk2uFJ-MKwpdlyXBGxiyo8HbDNYOB274uPkRKaxoZl5s6RG-CkNcSSTSgQkOUs5vgHDjfGa5wk1Ofmgr-m8ptwEE9uUytU"
    },
    {
      title: "Facility Management",
      description: "Integrated operational support for commercial buildings. We ensure seamless building functionality through structured oversight and maintenance.",
      icon: <Building className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMH1n02GIG3eQ4P18g5Rx3iNd3sjstvjLSYngA-QM6MlkIgyY9jU0uyoR-delKWrMKJa89Q7tCzb-CFo9KGVzNCPrvwOW1pvbZifiYuBMsMyUMGX_r-ZnG0vKoqG6_LrZebYOQHrq4YNuGSXc0SnnwKFxJawTWwhSuD71dTSySDsowwzpgJ2CQfwznxBFnQ26OK2EdhCtZDbYNtUaAwdKSNDkeScazIqdCptC4rtjqlPEkk1vMukOnq0iAfg8lEFRd6s3aj1I8JDUY"
    },
    {
      title: "Housekeeping Staff",
      description: "Meticulous cleaning services for corporate and residential complexes. Our staff follows rigorous hygiene and organizational standards.",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDinp4A9FBKWHFgJnq2LStP5mwHkt7ORojCbYVZEqFHBlDNspZJVRpKDgQm_zvHGGd0u0wgMv4lEovzJMpFLq6DLpAK3oiaY4I5vvCdzKie1DK3OtfMd2_T85S2cmHE9RvOQNPN3J30-7c1JUK1XTzN9OESTwIIAut3Fs4Sg1NG_IjnujM7QhHVN8qtJWzRP3B_1jS7xAdv_ZelLJclKhKGado9LfygwKGi1mjn3GDkZqqt3sZm1UvBDruNp0y8i4lORsZDHdd3HGVP"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Professional security" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Poxffv0cAyH_qmo01M2F9VeW-uhQ_24AACUMKZ6qrY2fQW_5GlhWsk3nqOiv-QxMmB7z8LUSM_0hPerzLvCm5iYdRxnx_i7ov0q_D_mOigZSzwX5NEOFsz0YJophysvyhmRWYMdzd5tcGlIo5BLYojvZazV6v-Yd1Ks3TDYF9eLyJesbrRsASTkZ0LNhUg5zbtS57MC0iYCAKLggUeEcMD__gBTrGovhynMe0yw7Yq5AsqcfP1UG1-zpFuZTYbWstpjBcW_9OcUW"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              Strategic Protection
            </span>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Our Elite <span className="text-secondary-container">Services</span>
            </h1>
            <p className="text-surface-container-low text-xl md:text-2xl max-w-2xl leading-relaxed font-body">
              Architecting safety through disciplined personnel and tactical intelligence. We build impenetrable foundations for your enterprise security.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight mb-4 text-center">Core Competencies</h2>
            <div className="h-1.5 w-24 bg-secondary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-surface-container-lowest flex flex-col h-full transition-all duration-500 shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={service.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary p-3 rounded-lg text-secondary-container shadow-xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-primary font-headline text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button className="w-full bg-secondary-container text-on-secondary-fixed py-4 rounded-lg font-headline font-bold uppercase tracking-wider text-sm hover:brightness-105 transition-all active:scale-95">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
