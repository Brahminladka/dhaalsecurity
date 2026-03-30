import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Download, Share2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      category: "Corporate Security",
      title: "Standardized Entry Control",
      description: "Precision-led security protocols at Tier-1 commercial headquarters.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqUHJ5Qd3YoDM58zF4VOWI0kCx08cocsEsw7XtTJP5AYGMxegnlsQAu9EV0BWc8c_OERWAICILCWShzGHomZ-MsSAQkj7-EYWbnsbqtq5ACO_yZQcHB9gM1xU14xcWs09BX7JITpUDJ4S9gbNsYvNxTd40M0ACQRdiFFU5zB-oQxwGK2zlSy-dllmH8d54coEv0EbpjbfvSYHCsPwQf1LPdshBqwwSvWQQDIlW60pxJ02TcSaqMtVFIsS5OiSi8V5A-dkg10VaafzN",
      size: "large"
    },
    {
      id: 2,
      category: "Event Security",
      title: "Arena Management",
      description: "Crowd control and perimeter management for high-profile events.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUgP-Y0d-ezkaxjiZumDAoRusPB9XT9NdUWIeuVg-90I6gbyjxFd08T4Mw054VOI8yuJHZZ-9D-cjv2wn2_DB70ZUpM0E3dfiVbgWWXKkjQhRl1nS8snqdp3ExvdgDLeT3btFhqxxlmL6gOAz1H5rzIX05cic-KycPKGjV9UJZMUxeT50YRV80nDvvX1q-1QZmMyE4-NoNTaDqYLbpFMFEI0nWPBbXAXGF9bzv3T8bo-vGI5Lg5H2tCCHyMXwBV2Mpbz2oXS3bMwjg",
      size: "tall"
    },
    {
      id: 3,
      category: "Facility Management",
      title: "Technical Resilience",
      description: "Integrated maintenance and technical oversight for industrial facilities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRa3l1vB7jQYt-WwXMRq9n-dDhzxYeqwWOJP3_-oDcvC5vqQJRpC6-hHOWQ-dzTDbWHx7z-onMj5Xr0kfrh6QqoOmA9FKVCa5tu2W_-dzcmWjTd-9zhhm8EhNB9AgQBwW0lSJEcEzp1umQDZNf4vLBREhAE8UsLiw-dyVlmGNOcP7YYe1MvFdKHRYlJKQM4Nle2vFPFmrwvZEosX_qd_nzqzZ5rp5_KCjXuowHDd-Zr3eUciLM2w3SGjUkXeEQJx-UvxXap1D7GwEW",
      size: "square"
    },
    {
      id: 4,
      category: "Our Personnel",
      title: "Elite Task Force",
      description: "A diverse group of disciplined security professionals in formation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5GBZtrV7elxye83Ondu-iFQf-BmUmskQwiaCVWJ2cYHtWm8Ab_IoebjGmC5FMVT0GndprhRAWazksH_Gp2C_m-EBzU-2LWvmxZDVarHRLqSACxBk-c2nMPowRemzOOdT401b8R0KsGTFxEe1qdtswjsG3ObC4j4GUqeodH56TO6RGTxJboajyMXZyLJAj6EGpas4UP2SlWCnOLHt_skaJaJdGCW7DX4aOuZcx8JGeRcL7KNv_wScgQzuw23OvhYrw5sO3bVUs9D2a",
      size: "square"
    },
    {
      id: 5,
      category: "Intelligence",
      title: "24/7 Command Center",
      description: "Real-time remote monitoring and surveillance from our central hub.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRCFrKzMwM2QbzJUFksygfzkb90E8U7MWX57qB3arYSH7UJ66yOAIEelofQ-2ONd_UzBYVNUeuq0CcF31a2G-Gqwj02SCwT5UUDxtKBF_QvsOmXBkerZw7diEFNfuMYb8lBFUQtlBMnHJFcufzgZuKkcrzlIybeiB6o215bt-48YahpjppatiXbbmKQxOZXF-XqA2RkxfNHnFfr54DVGrv92DRbXL4go2Iunf6zuuTrbO6k4pNubRbIwgJrl6VyPR3N7QuYecgGB59",
      size: "large"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <header className="relative py-24 px-6 md:px-12 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKi_mdBhOs7-0n9I2-RwnNPPvDoPkbqdBDs80HEz8CVcNAK4yfGdwl2Phynp0CMjWe87xJP4oT7Xl2qXh5erVx09kJPiW7WKRKVgwQ_CCwaKL4WW-0Cg8lH_jAHs4w7Gt7DhUYSVkXyt4-7HAcigU68SN7XHPQwmQ5dS91EZHAg3Zv73dQhMy95BpYbGWjsp6umFAnUrls-L2wGOR8a92HaUo458SUzxf9YeM3xOaQm8OX5G5Xo9iv8i2Zxv4XtpqJqr3XPBr2lxAs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-headline font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6">
            Operational Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-6 max-w-4xl leading-[1.1]">
            Our Operational <span className="text-secondary-container">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container font-body max-w-2xl leading-relaxed opacity-90">
            A visual testament to our commitment to security, precision, and architectural discipline across all sectors of operation.
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              className={`relative group overflow-hidden bg-surface-container-high cursor-pointer rounded-xl ${
                item.size === 'large' ? 'md:col-span-8 md:row-span-2' : 
                item.size === 'tall' ? 'md:col-span-4 md:row-span-2' : 
                'md:col-span-4'
              }`}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                src={item.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-secondary-container font-headline font-bold text-xs tracking-widest uppercase mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-headline font-bold">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2 max-w-md">{item.description}</p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12">
          <button 
            className="absolute top-8 right-8 text-white hover:text-secondary-container transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-5xl w-full shadow-2xl relative overflow-hidden rounded-2xl"
          >
            <img 
              className="w-full h-auto max-h-[70vh] object-contain bg-black" 
              src={selectedImage.image}
              referrerPolicy="no-referrer"
            />
            <div className="p-8 bg-primary text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-secondary-container font-headline font-extrabold text-[10px] tracking-widest uppercase">Operational Preview</p>
                  <h4 className="text-2xl font-headline font-bold mt-1">{selectedImage.title}</h4>
                  <p className="text-white/60 mt-2">{selectedImage.description}</p>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
