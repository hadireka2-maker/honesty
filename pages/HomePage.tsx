import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';
import { usePortfolio } from '../App';

const HomePage: React.FC = () => {
  const { projects } = usePortfolio();
  const [currentSlide, setCurrentSlide] = useState(0);

  const HERO_SLIDES = [
    {
      id: 1,
      image: "/rsc/images/Photo-262-1b8cce7c.jpeg",
      position: "center"
    },
    {
      id: 2,
      image: "/rsc/images/Photo-97-f2b2bc2c.jpeg",
      position: "center"
    },
    {
      id: 3,
      image: "/rsc/images/Foto-95_copy-c2243c57.jpg",
      position: "center"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <section className="relative h-screen w-full overflow-hidden bg-stone-900">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: slide.position
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/20 z-20" /> 
        
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 lg:px-8 z-30 pointer-events-none">
           <button onClick={prevSlide} className="pointer-events-auto p-2 md:p-4 text-white/50 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none">
             <ArrowLeft size={20} strokeWidth={1} className="md:w-8 md:h-8" />
           </button>
           <button onClick={nextSlide} className="pointer-events-auto p-2 md:p-4 text-white/50 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none">
             <ArrowRight size={20} strokeWidth={1} className="md:w-8 md:h-8" />
           </button>
        </div>

        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center z-30 pointer-events-none">
           <div className="flex items-center space-x-4 md:space-x-6 text-white tracking-[0.2em] font-serif text-[10px] md:text-xs">
             <span className={`transition-opacity duration-300 ${currentSlide === 0 ? 'opacity-100' : 'opacity-40'}`}>01</span>
             <span className={`transition-opacity duration-300 ${currentSlide === 1 ? 'opacity-100' : 'opacity-40'}`}>02</span>
             <span className={`transition-opacity duration-300 ${currentSlide === 2 ? 'opacity-100' : 'opacity-40'}`}>03</span>
           </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="px-4 md:px-6 lg:px-12 py-10 md:py-20 lg:py-32 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16 fade-in-up">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-stone-800 mb-3 md:mb-6">Karya Terbaru</h2>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-6">
              <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-400"></div>
              <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
            </div>
            <p className="text-stone-600 text-xs md:text-base max-w-2xl mx-auto px-2">Jelajahi proyek fotografi terbaru dan momen yang telah kami abadikan</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
            {projects.slice(0, 6).map((project, index) => (
              <Link key={project.id} to={`/project/${project.id}`} className="group cursor-pointer block fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative overflow-hidden aspect-square bg-stone-200 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-3 md:p-5">
                    <span className="font-serif text-base md:text-2xl lg:text-3xl mb-2 md:mb-3 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{project.category}</span>
                    <div className="w-8 md:w-12 h-px bg-white/50 mb-2 md:mb-3 group-hover:w-16 md:group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] opacity-90 drop-shadow-md font-medium">{project.couple}</span>
                    <ArrowRight className="mt-2 md:mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-16">
            <Link to="/portfolio" className="inline-block bg-stone-900 text-white px-8 py-3 md:px-14 md:py-5 text-[10px] md:text-sm tracking-[0.25em] uppercase hover:bg-stone-800 transition-all duration-500 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 px-6 md:px-12 bg-gradient-to-b from-stone-50 via-white to-stone-50">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10 fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-stone-800 leading-tight">Hai, Anda telah menemukan kami!</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
            <div className="w-2 h-2 rounded-full bg-stone-400"></div>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
          </div>
          <p className="text-stone-600 text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Melalui luasnya ruang dan perjalanan waktu, jalan kita bertemu di momen ini. Kami sangat senang karya kami telah menarik perhatian Anda.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 md:py-20 lg:py-32 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16 lg:mb-20 fade-in-up">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-stone-800 mb-3 md:mb-6">Layanan Kami</h2>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-6">
              <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-400"></div>
              <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
            </div>
            <p className="text-stone-600 text-xs md:text-base max-w-2xl mx-auto px-2">Kami menawarkan layanan fotografi lengkap untuk mengabadikan momen spesial Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            <div className="group bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-stone-800 to-stone-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-serif text-stone-800 mb-2 md:mb-4">Pernikahan</h3>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed">Mengabadikan keajaiban hari istimewa Anda dengan keanggunan abadi dan emosi yang autentik.</p>
            </div>

            <div className="group bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-stone-800 to-stone-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-serif text-stone-800 mb-2 md:mb-4">Lamaran</h3>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed">Mendokumentasikan awal perjalanan Anda bersama dengan momen intim dan penuh makna.</p>
            </div>

            <div className="group bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-stone-800 to-stone-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-serif text-stone-800 mb-2 md:mb-4">Sesi Pasangan</h3>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed">Menciptakan kenangan indah dari kisah cinta Anda di lokasi menakjubkan dan setting alami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 lg:py-32 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16 lg:mb-20 fade-in-up">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-stone-800 mb-3 md:mb-6">Kata Klien Kami</h2>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-6">
              <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-400"></div>
              <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
            </div>
            <p className="text-stone-600 text-xs md:text-base max-w-2xl mx-auto px-2">Dengarkan pengalaman pasangan bahagia kami bersama Honesty Pictures</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-0.5 md:gap-1 mb-3 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed mb-4 md:mb-6 italic">"Honesty Pictures mengabadikan hari pernikahan kami dengan sempurna! Setiap momen didokumentasikan dengan indah. Sangat direkomendasikan!"</p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-stone-300 to-stone-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-stone-800 text-xs md:text-base">Sarah & John</p>
                  <p className="text-stone-500 text-[10px] md:text-sm">Pernikahan 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-0.5 md:gap-1 mb-3 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed mb-4 md:mb-6 italic">"Profesional, kreatif, dan sangat mudah diajak bekerja sama. Foto lamaran kami hasilnya luar biasa!"</p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-stone-300 to-stone-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-stone-800 text-xs md:text-base">Maya & Rizki</p>
                  <p className="text-stone-500 text-[10px] md:text-sm">Lamaran 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-white p-5 md:p-10 rounded-xl md:rounded-2xl shadow-md border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-0.5 md:gap-1 mb-3 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-600 text-xs md:text-base leading-relaxed mb-4 md:mb-6 italic">"Tim membuat kami merasa sangat nyaman. Foto-fotonya menakjubkan dan mengabadikan kisah cinta kami dengan sempurna!"</p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-stone-300 to-stone-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-stone-800 text-xs md:text-base">Dina & Andi</p>
                  <p className="text-stone-500 text-[10px] md:text-sm">Sesi Pasangan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[10s] hover:scale-100"
          style={{ backgroundImage: `url('/rsc/images/foto-323-9e1e1626.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/40 to-stone-900/60" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 fade-in-up">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-serif leading-tight">Sampai Jumpa Segera</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <p className="text-xs md:text-sm lg:text-lg font-light opacity-95 leading-relaxed max-w-xl mx-auto">
            Terima kasih telah meluangkan waktu untuk menjelajahi galeri kami. Ini adalah perjalanan yang luar biasa, penuh dengan berkah yang tak terhitung.
          </p>
          <div className="pt-6 md:pt-8 lg:pt-10">
            <Link to="/contact" className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 md:px-12 md:py-4 text-[10px] md:text-xs lg:text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-500 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-stone-50 text-center">
        <div className="max-w-md mx-auto space-y-4 md:space-y-6">
          <div className="inline-block p-4 md:p-5 bg-gradient-to-br from-stone-100 to-stone-50 rounded-full shadow-lg">
            <Instagram className="text-stone-800" size={24} />
          </div>
          <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-stone-800">Ikuti Instagram Kami</h3>
          <a href="#" className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-stone-500 hover:text-stone-900 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-stone-300 pb-1">@honestypictures</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
