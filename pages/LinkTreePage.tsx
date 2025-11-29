import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';
import { usePortfolio } from '../App';
import { LinkBioTheme, LinkBioItem } from '../types';

const LinkTreePage: React.FC = () => {
  const { linkBioProfile, linkItems } = usePortfolio();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get theme from query parameter or use profile theme
  const queryParams = new URLSearchParams(location.search);
  const previewTheme = queryParams.get('theme') as LinkBioTheme | null;
  const activeTheme = previewTheme || linkBioProfile.theme;
  
  const getThemeClasses = (theme: LinkBioTheme) => {
    switch (theme) {
      case 'classic':
        return {
          bg: 'bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100',
          bgImage: '',
          text: 'text-stone-800',
          card: 'bg-white/95 backdrop-blur-md border-2 border-stone-200/50 shadow-2xl rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-stone-800 to-stone-700 border-2 border-stone-800 text-white hover:from-stone-700 hover:to-stone-600 hover:shadow-2xl hover:-translate-y-0.5',
          accent: 'text-stone-600',
          avatar: 'border-[5px] border-stone-800 shadow-2xl ring-4 ring-stone-200/50',
          overlay: '',
          particle: 'bg-stone-400/20'
        };
      case 'soft':
        return {
          bg: 'bg-gradient-to-br from-[#f5f1ea] via-[#e8e6e1] to-[#ddd9d0]',
          bgImage: '',
          text: 'text-[#5c554e]',
          card: 'bg-[#faf9f7]/98 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[2rem] p-8 md:p-10 border border-[#e0ddd8]',
          button: 'bg-gradient-to-br from-[#d6d3d1] to-[#c7c4c1] text-[#44403c] hover:from-[#c7c4c1] hover:to-[#b8b5b2] shadow-lg hover:shadow-xl border-none hover:-translate-y-0.5',
          accent: 'text-[#8a8580]',
          avatar: 'border-[5px] border-[#5c554e] shadow-2xl ring-4 ring-[#d6d3d1]/50',
          overlay: '',
          particle: 'bg-[#8a8580]/15'
        };
      case 'glass':
        return {
          bg: 'bg-stone-950',
          bgImage: 'bg-[url("/rsc/images/foto-323-9e1e1626.jpg")] bg-cover bg-center bg-fixed',
          text: 'text-white',
          card: 'backdrop-blur-2xl bg-white/[0.08] border-2 border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.5)] rounded-[2rem] p-8 md:p-10',
          button: 'backdrop-blur-xl bg-white/15 border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
          accent: 'text-white/80',
          avatar: 'border-[5px] border-white/70 shadow-[0_20px_60px_rgba(255,255,255,0.3)] ring-4 ring-white/20',
          overlay: 'bg-gradient-to-b from-black/60 via-black/50 to-black/70',
          particle: 'bg-white/10'
        };
      case 'sunset':
        return {
          bg: 'bg-gradient-to-br from-orange-950 via-rose-950 to-purple-950',
          bgImage: 'bg-[url("/rsc/images/Photo-195-0fe055f6-1000.jpg")] bg-cover bg-center bg-fixed',
          text: 'text-orange-50',
          card: 'backdrop-blur-2xl bg-gradient-to-br from-orange-500/20 via-rose-500/20 to-purple-500/20 border-2 border-orange-300/30 shadow-[0_25px_80px_rgba(251,146,60,0.4)] rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 text-white hover:from-orange-300 hover:via-rose-300 hover:to-pink-300 border-none shadow-[0_10px_40px_rgba(251,146,60,0.5)] hover:shadow-[0_15px_50px_rgba(244,63,94,0.6)] font-semibold hover:-translate-y-0.5',
          accent: 'text-orange-200/90',
          avatar: 'border-[5px] border-orange-300/80 shadow-[0_20px_60px_rgba(251,146,60,0.6)] ring-4 ring-rose-400/30',
          overlay: 'bg-gradient-to-br from-orange-900/70 via-rose-900/70 to-purple-900/70',
          particle: 'bg-gradient-to-r from-orange-400/20 to-rose-400/20'
        };
      case 'ocean':
        return {
          bg: 'bg-gradient-to-br from-blue-950 via-cyan-950 to-teal-950',
          bgImage: 'bg-[url("/rsc/images/Photo-82-7eba7822-1000.jpg")] bg-cover bg-center bg-fixed',
          text: 'text-cyan-50',
          card: 'backdrop-blur-2xl bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-teal-500/15 border-2 border-cyan-300/40 shadow-[0_25px_80px_rgba(6,182,212,0.4)] rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-cyan-400 to-teal-400 text-blue-950 hover:from-cyan-300 hover:to-teal-300 border-none shadow-[0_10px_40px_rgba(6,182,212,0.5)] hover:shadow-[0_15px_50px_rgba(20,184,166,0.6)] font-semibold hover:-translate-y-0.5',
          accent: 'text-cyan-200/90',
          avatar: 'border-[5px] border-cyan-300/80 shadow-[0_20px_60px_rgba(6,182,212,0.6)] ring-4 ring-teal-400/30',
          overlay: 'bg-gradient-to-b from-blue-950/80 via-cyan-950/75 to-teal-950/80',
          particle: 'bg-gradient-to-r from-cyan-400/20 to-teal-400/20'
        };
      case 'forest':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50',
          bgImage: '',
          text: 'text-emerald-900',
          card: 'bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(16,185,129,0.15)] rounded-[2rem] p-8 md:p-10 border-2 border-emerald-200/60',
          button: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 font-semibold',
          accent: 'text-emerald-700/80',
          avatar: 'border-[5px] border-emerald-600 shadow-2xl ring-4 ring-emerald-200/50',
          overlay: '',
          particle: 'bg-emerald-400/15'
        };
      case 'rose':
        return {
          bg: 'bg-gradient-to-br from-rose-950 via-pink-950 to-fuchsia-950',
          bgImage: 'bg-[url("/rsc/images/Photo-121-30af12f8.jpeg")] bg-cover bg-center bg-fixed',
          text: 'text-rose-50',
          card: 'backdrop-blur-2xl bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-fuchsia-500/20 border-2 border-rose-300/30 shadow-[0_25px_80px_rgba(244,63,94,0.4)] rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 text-white hover:from-rose-300 hover:via-pink-300 hover:to-fuchsia-300 border-none shadow-[0_10px_40px_rgba(244,63,94,0.5)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.6)] font-semibold hover:-translate-y-0.5',
          accent: 'text-rose-200/90',
          avatar: 'border-[5px] border-rose-300/80 shadow-[0_20px_60px_rgba(244,63,94,0.6)] ring-4 ring-pink-400/30',
          overlay: 'bg-gradient-to-b from-rose-950/85 via-pink-950/80 to-fuchsia-950/85',
          particle: 'bg-gradient-to-r from-rose-400/20 to-pink-400/20'
        };
      case 'midnight':
        return {
          bg: 'bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950',
          bgImage: 'bg-[url("/rsc/images/Photo-262-1b8cce7c.jpeg")] bg-cover bg-center bg-fixed',
          text: 'text-indigo-50',
          card: 'backdrop-blur-2xl bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-violet-500/15 border-2 border-indigo-300/40 shadow-[0_25px_80px_rgba(99,102,241,0.4)] rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 text-white hover:from-indigo-300 hover:via-purple-300 hover:to-violet-300 border-none shadow-[0_10px_40px_rgba(99,102,241,0.5)] hover:shadow-[0_15px_50px_rgba(139,92,246,0.6)] font-bold hover:-translate-y-0.5',
          accent: 'text-indigo-200/95',
          avatar: 'border-[5px] border-indigo-300/80 shadow-[0_20px_60px_rgba(99,102,241,0.6)] ring-4 ring-purple-400/30',
          overlay: 'bg-gradient-to-br from-indigo-950/80 via-purple-950/75 to-violet-950/80',
          particle: 'bg-gradient-to-r from-indigo-400/20 to-purple-400/20'
        };
      case 'dark':
      default:
        return {
          bg: 'bg-gradient-to-br from-black via-stone-950 to-stone-900',
          bgImage: '',
          text: 'text-white',
          card: 'bg-stone-900/95 backdrop-blur-lg border-2 border-stone-700/50 shadow-[0_25px_80px_rgba(0,0,0,0.6)] rounded-[2rem] p-8 md:p-10',
          button: 'bg-gradient-to-r from-stone-700 to-stone-600 border-2 border-white/30 text-white hover:from-stone-600 hover:to-stone-500 hover:border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5',
          accent: 'text-stone-400',
          avatar: 'border-[5px] border-white/70 shadow-2xl ring-4 ring-stone-700/50',
          overlay: '',
          particle: 'bg-white/10'
        };
    }
  };

  const theme = getThemeClasses(activeTheme);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 ${theme.bg} ${theme.bgImage} ${theme.text} relative overflow-hidden`}>
       {/* Animated Background Particles */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         {[...Array(20)].map((_, i) => (
           <div
             key={i}
             className={`absolute rounded-full ${theme.particle} blur-xl`}
             style={{
               width: `${Math.random() * 300 + 50}px`,
               height: `${Math.random() * 300 + 50}px`,
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
               animationDelay: `${Math.random() * 5}s`,
               opacity: 0.3
             }}
           />
         ))}
       </div>

       {/* Background Overlay */}
       {theme.overlay && (
         <div className={`absolute inset-0 ${theme.overlay} z-[1]`}></div>
       )}
       
       {/* Main Content Container with Card */}
       <div 
         className={`relative z-10 w-full max-w-lg mx-auto ${theme.card} transition-all duration-700 ${
           mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
         }`}
       >
         
         {/* Profile Section */}
         <div className="flex flex-col items-center text-center space-y-5 md:space-y-6 mb-10">
           {/* Avatar with theme-specific styling and animation */}
           <div 
             className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ${theme.avatar} p-1.5 transition-all duration-500 ${
               mounted ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
             }`}
             style={{ transitionDelay: '200ms' }}
           >
             <img 
               src={linkBioProfile.avatar} 
               alt={linkBioProfile.name} 
               className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500" 
             />
             {/* Sparkle effect for certain themes */}
             {['sunset', 'ocean', 'rose', 'midnight'].includes(activeTheme) && (
               <div className="absolute -top-1 -right-1">
                 <Sparkles className="w-6 h-6 animate-pulse" />
               </div>
             )}
           </div>
           
           {/* Name & Bio */}
           <div 
             className={`space-y-3 transition-all duration-500 ${
               mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
             }`}
             style={{ transitionDelay: '400ms' }}
           >
             <h1 className="text-2xl md:text-4xl font-bold tracking-wide bg-clip-text">
               {linkBioProfile.name}
             </h1>
             <p className={`text-sm md:text-base font-light tracking-wide leading-relaxed px-4 ${theme.accent}`}>
               {linkBioProfile.bio}
             </p>
           </div>
         </div>

         {/* Links Section */}
         <div className="w-full space-y-3.5 md:space-y-4">
           {linkItems.filter((item: LinkBioItem) => item.active).map((item: LinkBioItem, index: number) => (
             <a 
               key={item.id} 
               href={item.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className={`
                 group block w-full py-4 md:py-5 px-6 text-center 
                 text-sm md:text-base font-semibold tracking-wide
                 transition-all duration-300 ease-out
                 ${activeTheme === 'forest' ? 'rounded-2xl' : 'rounded-full'}
                 ${theme.button}
                 transform hover:scale-[1.03] active:scale-[0.97]
                 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
               `}
               style={{ 
                 transitionDelay: `${600 + index * 100}ms`,
                 transitionProperty: 'all'
               }}
             >
               <div className="flex items-center justify-between gap-3 relative">
                 <span className="flex-1 text-center group-hover:tracking-wider transition-all duration-300">
                   {item.label}
                 </span>
                 <ExternalLink 
                   size={18} 
                   className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                 />
               </div>
             </a>
           ))}
         </div>

         {/* Footer */}
         <div 
           className={`pt-10 text-center transition-all duration-500 ${
             mounted ? 'opacity-100' : 'opacity-0'
           }`}
           style={{ transitionDelay: '1000ms' }}
         >
           <Link 
             to="/" 
             className={`inline-flex items-center gap-2 text-xs md:text-sm tracking-wider opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 ${theme.text}`}
           >
             <span>Honesty Pictures Studio</span>
             <Sparkles className="w-3 h-3 animate-pulse" />
           </Link>
         </div>

       </div>

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
       `}</style>
    </div>
  );
};

export default LinkTreePage;
