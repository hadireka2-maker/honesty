import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-white min-h-screen">
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <img 
          src="/rsc/images/Photo-2033-d52d5fe7.jpg" 
          alt="Contact" 
          className="w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/50 flex items-center justify-center">
           <div className="text-center space-y-4 fade-in-up">
             <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif px-6">Hai, akhirnya kita bertemu.</h1>
             <div className="flex items-center justify-center gap-3">
               <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
               <div className="w-2 h-2 rounded-full bg-white/60"></div>
               <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
             </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <div>
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-stone-800 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-stone-800 to-stone-400"></div>
                Hubungi Kami
              </h3>
              <div className="space-y-3 text-stone-600 text-sm md:text-base pl-4">
                <p className="hover:translate-x-2 transition-transform duration-300">WhatsApp: <a href="https://wa.me/6285117047064" className="hover:text-stone-900 font-medium">+62 851-1704-7064</a></p>
                <p className="hover:translate-x-2 transition-transform duration-300">Email: <a href="mailto:info@honestypictures.com" className="hover:text-stone-900 font-medium">info@honestypictures.com</a></p>
                <p className="hover:translate-x-2 transition-transform duration-300">Instagram: <span className="font-medium">@honestypictures</span></p>
              </div>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-stone-800 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-stone-800 to-stone-400"></div>
                Lokasi
              </h3>
              <p className="text-stone-600 text-sm md:text-base pl-4">Serang, Banten<br/>Indonesia</p>
            </div>
          </div>
          <div className="space-y-5 bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-stone-800">Dapatkan Daftar Harga</h3>
            <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">Isi formulir di bawah untuk menerima daftar harga lengkap dan detail paket kami.</p>
            <Link 
              to="/pricelist" 
              className="inline-block bg-stone-800 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
            >
              Lihat Daftar Harga
            </Link>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 lg:p-14 shadow-2xl border border-stone-100 rounded-2xl backdrop-blur-sm">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-stone-800">Nama *</label>
                <input type="text" id="name" required placeholder="Nama Anda" className="w-full border-b-2 border-stone-200 py-3 text-stone-700 focus:outline-none focus:border-stone-800 placeholder:text-stone-400 text-sm md:text-base bg-transparent transition-all duration-300" />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-stone-800">Email *</label>
                <input type="email" id="email" required placeholder="nama@contoh.com" className="w-full border-b-2 border-stone-200 py-3 text-stone-700 focus:outline-none focus:border-stone-800 placeholder:text-stone-400 text-sm md:text-base bg-transparent transition-all duration-300" />
              </div>

              <div className="space-y-3">
                <label htmlFor="location" className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-stone-800">Lokasi Acara *</label>
                <input type="text" id="location" placeholder="Serang, Jakarta, Bali, dll." className="w-full border-b-2 border-stone-200 py-3 text-stone-700 focus:outline-none focus:border-stone-800 placeholder:text-stone-400 text-sm md:text-base bg-transparent transition-all duration-300" />
              </div>

              <div className="space-y-3 md:space-y-4 pt-3 md:pt-4">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-800 block">Bagaimana Anda mengenal kami?</label>
                <div className="space-y-2">
                  {['Teman/Keluarga', 'Instagram', 'TikTok', 'Iklan'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 border border-stone-300 group-hover:border-stone-600 transition-colors flex items-center justify-center">
                        <input type="checkbox" className="opacity-0 absolute" />
                        <div className="w-2 h-2 bg-stone-800 opacity-0 checkbox-checked:opacity-100 transition-opacity"></div> 
                        <div className="w-2 h-2 bg-transparent group-active:bg-stone-400"></div>
                      </div>
                      <span className="text-[11px] md:text-xs text-stone-600">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-8 md:pt-10">
                <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-stone-800 to-stone-700 text-white px-10 py-4 md:px-14 md:py-5 text-xs md:text-sm tracking-[0.25em] uppercase hover:from-stone-900 hover:to-stone-800 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-full hover:scale-105">
                  Unduh Sekarang
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 md:py-12 space-y-4 md:space-y-6 fade-in-up">
              <h3 className="text-xl md:text-2xl font-serif text-stone-800">Terima kasih!</h3>
              <p className="text-stone-600 text-xs md:text-sm font-light">Informasi Anda telah kami terima. Daftar harga sedang diunduh...</p>
              <button onClick={() => setFormSubmitted(false)} className="text-[10px] md:text-xs underline uppercase tracking-widest text-stone-500">Kirim pertanyaan lain</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
