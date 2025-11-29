import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '../App';

const PortfolioPage: React.FC = () => {
  const { projects } = usePortfolio();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  const PORTFOLIO_SLIDES = [
    '/rsc/images/Photo-108-500551e8.jpg',
    '/rsc/images/Photo-121-30af12f8.jpeg',
    '/rsc/images/Photo-195-0fe055f6-1000.jpg',
    '/rsc/images/Photo-262-1b8cce7c.jpeg',
    '/rsc/images/foto-323-9e1e1626.jpg',
    '/rsc/images/Foto-95_copy-c2243c57.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="w-full bg-gradient-to-b from-white via-stone-50 to-white min-h-screen">
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] w-full overflow-hidden mb-12 md:mb-16 lg:mb-20">
        {PORTFOLIO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img 
              src={slide} 
              alt={`Portfolio ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex items-center justify-center z-10">
           <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 fade-in-up">
             <h1 className="text-3xl md:text-5xl lg:text-8xl font-serif text-white tracking-wide">Portofolio</h1>
             <div className="flex items-center justify-center gap-4">
               <div className="w-16 md:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/50"></div>
               <div className="w-2 h-2 rounded-full bg-white/70"></div>
               <div className="w-16 md:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/50"></div>
             </div>
             <p className="text-white/90 text-xs md:text-sm lg:text-base tracking-[0.35em] uppercase font-light">Momen Terabadikan</p>
           </div>
        </div>
      </div>

       <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-6 px-6">
         <div className="flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-8">
           <button 
             onClick={() => setActiveFilter('All')}
             className={`px-6 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300 rounded-full ${activeFilter === 'All' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:scale-105'}`}
           >
             Semua
           </button>
           <button 
             onClick={() => setActiveFilter('Wedding')}
             className={`px-6 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300 rounded-full ${activeFilter === 'Wedding' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:scale-105'}`}
           >
             Pernikahan
           </button>
           <button 
             onClick={() => setActiveFilter('Couple')}
             className={`px-6 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300 rounded-full ${activeFilter === 'Couple' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:scale-105'}`}
           >
             Pasangan
           </button>
           <button 
             onClick={() => setActiveFilter('Engagement')}
             className={`px-6 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300 rounded-full ${activeFilter === 'Engagement' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:scale-105'}`}
           >
             Lamaran
           </button>
         </div>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pb-16 md:pb-20 lg:pb-32">
          {filteredProjects.map((project, index) => (
             <Link key={project.id} to={`/project/${project.id}`} className="group cursor-pointer block fade-in-up" style={{animationDelay: `${index * 80}ms`}}>
               <div className="relative overflow-hidden aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                 <img 
                   src={project.coverImage} 
                   alt={project.title} 
                   className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-3 md:p-5">
                    <span className="font-serif text-base md:text-2xl lg:text-3xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{project.category}</span>
                    <div className="w-8 md:w-12 h-px bg-white/50 my-2 md:my-4 group-hover:bg-white group-hover:w-16 md:group-hover:w-20 transition-all duration-500"></div>
                    <div className="flex flex-col gap-1 md:gap-2 items-center transform transition-transform duration-500">
                      <span className="text-[8px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium drop-shadow-md">{project.couple}</span>
                      <span className="text-[7px] md:text-[10px] uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300">{project.date}</span>
                    </div>
                    <ArrowRight className="mt-2 md:mt-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" size={16} />
                 </div>
               </div>
             </Link>
          ))}
        </div>
    </div>
  );
};

export default PortfolioPage;
