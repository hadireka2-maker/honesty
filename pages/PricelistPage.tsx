import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, ZoomIn } from 'lucide-react';
import { usePortfolio } from '../App';

const PricelistPage: React.FC = () => {
  const { pricelistImages } = usePortfolio();
  const [mounted, setMounted] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeImages = pricelistImages.filter(img => img.active);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openZoom = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-2xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 w-full max-w-4xl mx-auto transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 tracking-wide">
            Daftar Harga
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <Sparkles className="w-4 h-4 animate-pulse" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <p className="text-sm md:text-base text-white/80 font-light tracking-wide">
            Paket Fotografi Honesty Pictures
          </p>
        </div>

        {/* Pricelist Images Display */}
        {activeImages.length > 0 ? (
          <div className="space-y-6 md:space-y-8">
            {/* All Images Displayed Vertically */}
            {activeImages.map((image, index) => (
              <div 
                key={image.id}
                className={`transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 md:p-4 shadow-2xl">
                  <div 
                    className="relative w-full overflow-hidden rounded-lg bg-white cursor-pointer group"
                    onClick={() => openZoom(image.url)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                        <ZoomIn size={24} className="text-stone-900" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 md:mt-4 text-center">
                    <p className="text-sm md:text-base text-white font-medium">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center space-y-4">
            <p className="text-white/80 text-lg">Belum ada daftar harga yang tersedia.</p>
            <p className="text-white/60 text-sm">Silakan hubungi kami untuk informasi harga terbaru.</p>
            <a 
              href="https://wa.me/6285117047064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-700 text-white px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-stone-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105 font-medium mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hubungi Kami
            </a>
          </div>
        )}

        {/* Action Buttons */}
        {activeImages.length > 0 && (
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href="https://wa.me/6285117047064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-stone-100 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hubungi Kami
            </a>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 md:mt-12 text-center space-y-3">
          <p className="text-xs md:text-sm text-white/70 font-light">
            Untuk informasi lebih lanjut atau booking, silakan hubungi kami
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs md:text-sm tracking-wider opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            <span>Kembali ke Beranda</span>
            <Sparkles className="w-3 h-3 animate-pulse" />
          </Link>
        </div>

      </div>

      {/* Zoom Modal/Lightbox */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeZoom}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 z-10"
            onClick={closeZoom}
          >
            <X size={24} className="text-white" />
          </button>

          {/* Zoomed Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={zoomedImage} 
              alt="Zoomed pricelist"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Hint Text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm">
            Klik di luar gambar untuk menutup
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(20px, 20px) rotate(270deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PricelistPage;
