import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-stone-50 to-white">
      <div className="w-full h-[55vh] md:h-[65vh] lg:h-[75vh] bg-stone-900 relative overflow-hidden">
         <img 
           src="/rsc/images/Foto-95_copy-c2243c57.jpg" 
           alt="The Team" 
           className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
         <div className="absolute bottom-10 md:bottom-16 left-6 md:left-16 text-white max-w-2xl fade-in-up">
           <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif mb-3 md:mb-6 leading-tight">The Storytellers</h1>
           <div className="flex items-center gap-3 mb-4 md:mb-6">
             <div className="w-12 md:w-16 h-px bg-white/50"></div>
             <div className="w-2 h-2 rounded-full bg-white/70"></div>
           </div>
           <p className="text-sm md:text-base lg:text-lg font-light max-w-lg leading-relaxed">Capturing beauty in authentic moments, with a touch of cinematic flair.</p>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28 lg:py-36">
         <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 fade-in-up">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-stone-800 leading-tight">
              <span className="bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text text-transparent">Honesty Pictures</span> lahir dari kecintaan kami untuk mengabadikan keindahan dalam momen autentik.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
              <div className="w-2 h-2 rounded-full bg-stone-400"></div>
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
            </div>
            <p className="text-stone-600 text-sm md:text-base lg:text-lg font-light leading-loose max-w-3xl mx-auto">
              Kami didorong oleh keinginan untuk merangkum esensi cinta, merajutnya menjadi kisah visual abadi yang mencerminkan keajaiban dan kekaguman dari setiap kisah cinta yang unik.
            </p>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;
