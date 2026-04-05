import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Download, Share2, X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const [isSharing, setIsSharing] = React.useState(false);

  const galleryItems = [
    {
      id: 1,
      category: "Our Personnel",
      title: "Executive Protection",
      description: "Elite personal security detail.",
      image: "gallery/gallery_01.jpg",
      size: "large"
    },
    {
      id: 2,
      category: "Corporate Security",
      title: "Standardized Entry Control",
      description: "Precision-led security protocols at Tier-1 commercial headquarters.",
      image: "gallery/gallery_02.jpeg",
      size: "tall"
    },
    {
      id: 3,
      category: "Event Security",
      title: "Arena Management",
      description: "Crowd control and perimeter management for high-profile events.",
      image: "gallery/gallery_03.jpeg",
      size: "square"
    },
    {
      id: 4,
      category: "Facility Management",
      title: "Technical Resilience",
      description: "Integrated maintenance and technical oversight for industrial facilities.",
      image: "gallery/gallery_04.jpeg",
      size: "square"
    },
    {
      id: 5,
      category: "Intelligence",
      title: "Strategic Asset",
      description: "DSS Operational deployment.",
      image: "gallery/gallery_05.jpeg",
      size: "large"
    },
    {
      id: 6,
      category: "Strategic Protection",
      title: "Facility Deployment",
      description: "Day-time operations and security.",
      image: "gallery/gallery_06.jpeg",
      size: "square"
    },
    {
      id: 7,
      category: "Our Personnel",
      title: "Guard Briefing",
      description: "Daily briefing and strategy alignment.",
      image: "gallery/gallery_07.jpeg",
      size: "large"
    },
    {
      id: 8,
      category: "Event Security",
      title: "VIP Escort",
      description: "Ensuring secure transit for VIP assets.",
      image: "gallery/gallery_08.jpeg",
      size: "tall"
    },
    {
      id: 9,
      category: "Facility Management",
      title: "Safety Drills",
      description: "Preparedness protocols in motion.",
      image: "gallery/gallery_09.jpeg",
      size: "square"
    },
  ];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleDownload = async (imageUrl: string, title: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(imageUrl, '_blank');
    }
  };

  const handleShare = async (image: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${image.title}`,
          text: image.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsSharing(true);
        setTimeout(() => setIsSharing(false), 2000);
      } catch (error) {
        console.error('Clipboard failed:', error);
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <header className="relative py-24 px-6 md:px-12 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            className="w-full h-full object-cover" 
            src="gallery/gallery_02.jpeg"
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
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-8 text-white/30 hover:text-white transition-all hover:scale-110 z-[110] p-4"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button 
              className="absolute right-4 md:right-8 text-white/30 hover:text-white transition-all hover:scale-110 z-[110] p-4"
              onClick={handleNext}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-container-lowest max-w-6xl w-full shadow-2xl relative overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="relative aspect-video md:aspect-auto md:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <motion.img 
                  key={selectedImage.image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain" 
                  src={selectedImage.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-secondary-container" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Verified Operational Asset</span>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-primary text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[9px] font-black uppercase tracking-tighter rounded">
                        {selectedImage.category}
                      </span>
                      <span className="text-white/40 text-[10px] font-mono">ID: DSS-2024-{selectedImage.id.toString().padStart(3, '0')}</span>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-headline font-black tracking-tight">{selectedImage.title}</h4>
                    <p className="text-white/60 mt-3 text-lg font-body leading-relaxed max-w-2xl">{selectedImage.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => handleDownload(selectedImage.image, selectedImage.title)}
                      className="flex-1 md:flex-none px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-xl flex items-center justify-center gap-3 group"
                    >
                      <Download className="w-5 h-5 text-secondary-container group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold uppercase tracking-widest">Download Asset</span>
                    </button>
                    <button 
                      onClick={() => handleShare(selectedImage)}
                      className="flex-1 md:flex-none px-6 py-4 bg-secondary-container text-on-secondary-fixed hover:brightness-110 transition-all rounded-xl flex items-center justify-center gap-3 group"
                    >
                      <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {isSharing ? 'Link Copied' : 'Share Report'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
