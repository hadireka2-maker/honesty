import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, ImageIcon, LinkIcon, ArrowRight } from 'lucide-react';
import { usePortfolio } from '../App';

const AdminDashboard: React.FC = () => {
  const { projects, deleteProject, isAuthenticated } = usePortfolio();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-stone-800 text-white p-6 rounded-lg shadow-md cursor-default">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-serif">Portfolio Projects</h2>
                    <ImageIcon size={20} className="text-stone-400" />
                </div>
                <p className="text-xs text-stone-400 mb-4">Manage your wedding and session galleries.</p>
                <div className="flex gap-4 text-xs uppercase tracking-widest">
                   <button className="border-b border-white pb-1">Manage</button>
                </div>
            </div>

            <div 
                onClick={() => navigate('/admin/links')}
                className="bg-white text-stone-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-stone-200 group"
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-serif">Link Bio Page</h2>
                    <LinkIcon size={20} className="text-stone-400 group-hover:text-stone-800 transition-colors" />
                </div>
                <p className="text-xs text-stone-500 mb-4">Manage your linktree-style page and themes.</p>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-800">
                   <span className="flex items-center gap-2">Go to Settings <ArrowRight size={12}/></span>
                </div>
            </div>

            <div 
                onClick={() => navigate('/admin/pricelist')}
                className="bg-white text-stone-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-stone-200 group"
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-serif">Pricelist</h2>
                    <ImageIcon size={20} className="text-stone-400 group-hover:text-stone-800 transition-colors" />
                </div>
                <p className="text-xs text-stone-500 mb-4">Upload and manage pricelist images.</p>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-800">
                   <span className="flex items-center gap-2">Manage <ArrowRight size={12}/></span>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-serif text-stone-800">Recent Projects</h2>
          <Link to="/admin/projects/new" className="bg-stone-800 text-white px-5 py-2.5 md:px-6 md:py-3 text-[10px] md:text-xs tracking-widest uppercase hover:bg-stone-700 transition-colors flex items-center gap-2">
            <Plus size={14} className="md:w-4 md:h-4" /> Add New Project
          </Link>
        </div>

        <div className="bg-white shadow-sm border border-stone-100 overflow-hidden rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 text-stone-500 text-xs uppercase tracking-widest border-b border-stone-200">
                <th className="p-4 font-normal">Image</th>
                <th className="p-4 font-normal">Couple / Title</th>
                <th className="p-4 font-normal">Category</th>
                <th className="p-4 font-normal">Date</th>
                <th className="p-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-stone-50 transition-colors">
                  <td className="p-4 w-24">
                    <img src={project.coverImage} alt={project.title} className="w-16 h-16 object-cover rounded-sm bg-stone-200" />
                  </td>
                  <td className="p-4">
                    <div className="font-serif text-lg text-stone-800">{project.couple}</div>
                    <div className="text-xs text-stone-500">{project.title}</div>
                  </td>
                  <td className="p-4">
                    <span className="inline-block px-2 py-1 bg-stone-100 text-[10px] uppercase tracking-wider text-stone-600 rounded">
                      {project.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-stone-600">{project.date}</td>
                  <td className="p-4 text-right space-x-2">
                    <Link to={`/admin/projects/edit/${project.id}`} className="inline-block p-2 text-stone-400 hover:text-stone-800 transition-colors" title="Edit">
                      <Edit2 size={18} />
                    </Link>
                    <button onClick={() => deleteProject(project.id)} className="inline-block p-2 text-stone-400 hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {projects.length === 0 && (
            <div className="p-12 text-center text-stone-400 text-sm">No projects found. Add your first one!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
