import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Image as ImageIcon, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { usePortfolio } from '../App';

const AdminPricelistManager: React.FC = () => {
  const { pricelistImages, addPricelistImage, updatePricelistImage, deletePricelistImage, isAuthenticated } = usePortfolio();
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle && newUrl) {
      addPricelistImage({
        id: Date.now().toString(),
        title: newTitle,
        url: newUrl,
        active: true
      });
      setNewTitle('');
      setNewUrl('');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
           <div className="flex items-center gap-4 text-stone-500 hover:text-stone-800 transition-colors">
              <Link to="/admin/dashboard" className="flex items-center gap-2 text-xs uppercase tracking-widest">
                <ArrowLeft size={14} /> Back to Dashboard
              </Link>
           </div>
           <a 
             href="/#/pricelist" 
             target="_blank" 
             className="flex items-center gap-2 bg-stone-800 text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-full"
           >
             View Pricelist Page <ExternalLink size={12} />
           </a>
        </div>

        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-serif text-stone-800">Manage Pricelist</h1>
          {pricelistImages.length === 0 && (
            <button
              onClick={() => window.location.reload()}
              className="bg-stone-600 text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm"
            >
              Load Default Images
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Add New Image Form */}
          <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 rounded-lg h-fit">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
              <Plus size={14} className="md:w-4 md:h-4" /> Add Pricelist Image
            </h2>
            
            <form onSubmit={handleAddImage} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">Image Title</label>
                <input 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Wedding Package 2025"
                  className="w-full border-b border-stone-200 py-2 text-sm md:text-base focus:border-stone-800 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">Image URL</label>
                <input 
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="/rsc/images/pricelist.jpg"
                  className="w-full border-b border-stone-200 py-2 text-sm md:text-base focus:border-stone-800 focus:outline-none transition-colors"
                  required
                />
                <p className="text-xs text-stone-400 mt-1">Upload image to /public/rsc/images/ folder first</p>
              </div>

              <button 
                type="submit" 
                className="w-full bg-stone-800 text-white py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm flex items-center justify-center gap-2"
              >
                <Plus size={14} /> Add Image
              </button>
            </form>
          </div>

          {/* Image List */}
          <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 rounded-lg">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
              <ImageIcon size={14} className="md:w-4 md:h-4" /> Pricelist Images
            </h2>

            <div className="space-y-4">
              {pricelistImages.map((image) => (
                <div key={image.id} className="border border-stone-100 rounded-lg overflow-hidden hover:border-stone-300 transition-all">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-3">
                    <h3 className="font-medium text-stone-800 text-sm">{image.title}</h3>
                    <div className="flex items-center justify-between gap-2">
                      <button 
                        onClick={() => updatePricelistImage({...image, active: !image.active})}
                        className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded border ${
                          image.active 
                            ? 'bg-stone-100 text-stone-800 border-stone-300' 
                            : 'bg-stone-50 text-stone-400 border-stone-200'
                        }`}
                      >
                        {image.active ? <Eye size={12} /> : <EyeOff size={12} />}
                        {image.active ? 'Visible' : 'Hidden'}
                      </button>
                      <button 
                        onClick={() => deletePricelistImage(image.id)}
                        className="p-2 text-stone-400 hover:text-stone-800 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {pricelistImages.length === 0 && (
                <div className="text-center text-stone-400 text-xs py-8">No pricelist images added yet.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPricelistManager;
