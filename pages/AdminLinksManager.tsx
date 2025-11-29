import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, User, Palette, LinkIcon, Plus, Trash2 } from 'lucide-react';
import { usePortfolio } from '../App';
import { LinkBioTheme } from '../types';

const AdminLinksManager: React.FC = () => {
  const { linkBioProfile, updateLinkBioProfile, linkItems, addLinkItem, updateLinkItem, deleteLinkItem, isAuthenticated } = usePortfolio();
  const navigate = useNavigate();

  const [newLabel, setNewLabel] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [editUrl, setEditUrl] = useState('');

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateLinkBioProfile({ ...linkBioProfile, [e.target.name]: e.target.value });
  };

  const handleThemeChange = (theme: LinkBioTheme) => {
    updateLinkBioProfile({ ...linkBioProfile, theme });
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (newLabel && newUrl) {
      addLinkItem({
        id: Date.now().toString(),
        label: newLabel,
        url: newUrl,
        active: true
      });
      setNewLabel('');
      setNewUrl('');
    }
  };

  const startEdit = (item: any) => {
    setEditingId(item.id);
    setEditLabel(item.label);
    setEditUrl(item.url);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditLabel('');
    setEditUrl('');
  };

  const saveEdit = (item: any) => {
    if (editLabel && editUrl) {
      updateLinkItem({
        ...item,
        label: editLabel,
        url: editUrl
      });
      cancelEdit();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
           <div className="flex items-center gap-4 text-stone-500 hover:text-stone-800 transition-colors">
              <Link to="/admin/dashboard" className="flex items-center gap-2 text-xs uppercase tracking-widest"><ArrowLeft size={14} /> Back to Dashboard</Link>
           </div>
           <div className="flex flex-wrap gap-2">
             <a href="/#/links?theme=classic" target="_blank" className="flex items-center gap-1 bg-stone-100 text-stone-700 px-3 py-1.5 text-[10px] uppercase tracking-widest hover:bg-stone-200 transition-colors rounded-full border border-stone-300">
               Classic <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=dark" target="_blank" className="flex items-center gap-1 bg-stone-900 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-full">
               Dark <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=soft" target="_blank" className="flex items-center gap-1 bg-[#d6d3d1] text-stone-700 px-3 py-1.5 text-[10px] uppercase tracking-widest hover:bg-[#c7c4c1] transition-colors rounded-full">
               Soft <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=glass" target="_blank" className="flex items-center gap-1 bg-stone-700 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:bg-stone-600 transition-colors rounded-full">
               Glass <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=sunset" target="_blank" className="flex items-center gap-1 bg-gradient-to-r from-stone-600 via-stone-700 to-stone-800 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:from-stone-700 hover:via-stone-800 hover:to-stone-900 transition-colors rounded-full">
               Sunset <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=ocean" target="_blank" className="flex items-center gap-1 bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:from-stone-600 hover:via-stone-700 hover:to-stone-800 transition-colors rounded-full">
               Ocean <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=forest" target="_blank" className="flex items-center gap-1 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:from-stone-700 hover:to-stone-800 transition-colors rounded-full">
               Forest <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=rose" target="_blank" className="flex items-center gap-1 bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:from-stone-600 hover:via-stone-700 hover:to-stone-800 transition-colors rounded-full">
               Rose <ExternalLink size={10} />
             </a>
             <a href="/#/links?theme=midnight" target="_blank" className="flex items-center gap-1 bg-gradient-to-r from-stone-700 via-stone-800 to-stone-900 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest hover:from-stone-800 hover:via-stone-900 hover:to-black transition-colors rounded-full">
               Midnight <ExternalLink size={10} />
             </a>
           </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 md:mb-8">Manage Link Bio</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 rounded-lg">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
                <User size={14} className="md:w-4 md:h-4" /> Profile Information
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">Display Name</label>
                  <input name="name" value={linkBioProfile.name} onChange={handleProfileChange} className="w-full border-b border-stone-200 py-2 text-sm md:text-base focus:border-stone-800 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">Bio / Description</label>
                  <textarea name="bio" value={linkBioProfile.bio} onChange={handleProfileChange} className="w-full border-b border-stone-200 py-2 text-sm md:text-base focus:border-stone-800 focus:outline-none transition-colors resize-none h-16 md:h-20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">Avatar URL</label>
                  <div className="flex gap-3 md:gap-4 items-center">
                    <img src={linkBioProfile.avatar} alt="Avatar" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-stone-200" />
                    <input name="avatar" value={linkBioProfile.avatar} onChange={handleProfileChange} className="w-full border-b border-stone-200 py-2 text-sm md:text-base focus:border-stone-800 focus:outline-none transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 rounded-lg">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
                <Palette size={14} className="md:w-4 md:h-4" /> Select Theme
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {/* Classic Theme */}
                <button 
                  onClick={() => handleThemeChange('classic')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'classic' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-stone-50 border border-stone-200 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-stone-300"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-white border border-stone-800 rounded-full"></div>
                      <div className="w-full h-1.5 bg-white border border-stone-800 rounded-full"></div>
                      <div className="w-full h-1.5 bg-white border border-stone-800 rounded-full"></div>
                      <div className="w-full h-1.5 bg-white border border-stone-800 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Classic</span>
                </button>

                {/* Dark Theme */}
                <button 
                  onClick={() => handleThemeChange('dark')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'dark' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-black mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-stone-700"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-transparent border border-white/30 rounded-full"></div>
                      <div className="w-full h-1.5 bg-transparent border border-white/30 rounded-full"></div>
                      <div className="w-full h-1.5 bg-transparent border border-white/30 rounded-full"></div>
                      <div className="w-full h-1.5 bg-transparent border border-white/30 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Dark Mode</span>
                </button>

                {/* Soft Theme */}
                <button 
                  onClick={() => handleThemeChange('soft')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'soft' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-[#e8e6e1] mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#c7c4c1]"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-[#d6d3d1] shadow-sm rounded-full"></div>
                      <div className="w-full h-1.5 bg-[#d6d3d1] shadow-sm rounded-full"></div>
                      <div className="w-full h-1.5 bg-[#d6d3d1] shadow-sm rounded-full"></div>
                      <div className="w-full h-1.5 bg-[#d6d3d1] shadow-sm rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Soft Pastel</span>
                </button>

                {/* Glass Theme */}
                <button 
                  onClick={() => handleThemeChange('glass')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'glass' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                   <div className="w-full h-24 bg-stone-700 bg-[url('/rsc/images/foto-323-9e1e1626.jpg')] bg-cover mb-2 rounded overflow-hidden relative p-2 flex flex-col gap-1 items-center justify-center">
                     <div className="absolute inset-0 bg-black/40 rounded"></div>
                     <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm relative z-10"></div>
                     <div className="w-full space-y-1 relative z-10">
                       <div className="w-full h-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                       <div className="w-full h-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                       <div className="w-full h-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                       <div className="w-full h-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"></div>
                     </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Glass</span>
                </button>

                {/* Sunset Theme */}
                <button 
                  onClick={() => handleThemeChange('sunset')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'sunset' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-stone-600 via-stone-700 to-stone-800 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Sunset</span>
                </button>

                {/* Ocean Theme */}
                <button 
                  onClick={() => handleThemeChange('ocean')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'ocean' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-stone-500 via-stone-600 to-stone-700 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Ocean</span>
                </button>

                {/* Forest Theme */}
                <button 
                  onClick={() => handleThemeChange('forest')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'forest' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-stone-100 to-stone-200 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center border border-stone-300">
                    <div className="w-6 h-6 rounded-full bg-stone-600"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Forest</span>
                </button>

                {/* Rose Theme */}
                <button 
                  onClick={() => handleThemeChange('rose')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'rose' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-stone-500 via-stone-600 to-stone-700 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Rose</span>
                </button>

                {/* Midnight Theme */}
                <button 
                  onClick={() => handleThemeChange('midnight')}
                  className={`p-4 border text-center transition-all ${linkBioProfile.theme === 'midnight' ? 'border-stone-800 ring-1 ring-stone-800' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-24 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 mb-2 rounded p-2 flex flex-col gap-1 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"></div>
                    <div className="w-full space-y-1">
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                      <div className="w-full h-1.5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-stone-600">Midnight</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 rounded-lg h-fit">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-stone-800 mb-4 md:mb-6 flex items-center gap-2">
              <LinkIcon size={14} className="md:w-4 md:h-4" /> Manage Links
            </h2>
            
            <form onSubmit={handleAddLink} className="bg-stone-50 p-3 md:p-4 rounded mb-4 md:mb-6 border border-stone-100">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                 <input 
                   placeholder="Link Label (e.g. Instagram)" 
                   value={newLabel}
                   onChange={(e) => setNewLabel(e.target.value)}
                   className="w-full bg-white border border-stone-200 px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-stone-500 rounded-sm"
                   required
                 />
                 <input 
                   placeholder="URL (https://...)" 
                   value={newUrl}
                   onChange={(e) => setNewUrl(e.target.value)}
                   className="w-full bg-white border border-stone-200 px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-stone-500 rounded-sm"
                   required
                 />
               </div>
               <button type="submit" className="w-full bg-stone-800 text-white py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm flex items-center justify-center gap-2">
                 <Plus size={12} className="md:w-[14px] md:h-[14px]" /> Add Link
               </button>
            </form>

            <div className="space-y-3">
              {linkItems.map((item) => (
                <div key={item.id} className="p-3 bg-white border border-stone-100 shadow-sm rounded-sm group hover:border-stone-300 transition-all">
                  {editingId === item.id ? (
                    // Edit Mode
                    <div className="space-y-3">
                      <input 
                        value={editLabel}
                        onChange={(e) => setEditLabel(e.target.value)}
                        className="w-full border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:border-stone-500 rounded-sm"
                        placeholder="Link Label"
                      />
                      <input 
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        className="w-full border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:border-stone-500 rounded-sm"
                        placeholder="URL"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={() => saveEdit(item)}
                          className="flex-1 bg-stone-800 text-white py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm"
                        >
                          Save
                        </button>
                        <button 
                          onClick={cancelEdit}
                          className="flex-1 bg-stone-200 text-stone-700 py-2 text-xs uppercase tracking-widest hover:bg-stone-300 transition-colors rounded-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-stone-800 text-sm">{item.label}</div>
                        <div className="text-xs text-stone-400 truncate max-w-[200px]">{item.url}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateLinkItem({...item, active: !item.active})}
                          className={`text-xs px-2 py-1 rounded border ${item.active ? 'bg-stone-100 text-stone-800 border-stone-300' : 'bg-stone-50 text-stone-400 border-stone-200'}`}
                        >
                          {item.active ? 'Active' : 'Hidden'}
                        </button>
                        <button 
                          onClick={() => startEdit(item)}
                          className="p-2 text-stone-400 hover:text-stone-800 transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => deleteLinkItem(item.id)} 
                          className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {linkItems.length === 0 && (
                <div className="text-center text-stone-400 text-xs py-4">No links added yet.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminLinksManager;
