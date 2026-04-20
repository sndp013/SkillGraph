"use client";

import React from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Plus, BarChart2, Smartphone, FlaskConical, Layout, Server, Search } from 'lucide-react';

export default function Projects() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  const mockProjectsList = [
    { id: 1, title: 'E-commerce Dashboard', tech: 'React, Node.js, MongoDB', type: 'Workplace', icon: <BarChart2 size={24} />, color: '#3B82F6', bg: '#EFF6FF', date: '2 days ago' },
    { id: 2, title: 'Mobile Banking App', tech: 'Flutter, Firebase', type: 'Personal', icon: <Smartphone size={24} />, color: '#10B981', bg: '#ECFDF5', date: '1 week ago' },
    { id: 3, title: 'AI Data Analysis Tool', tech: 'Python, TensorFlow', type: 'Workplace', icon: <FlaskConical size={24} />, color: '#8B5CF6', bg: '#F5F3FF', date: '2 weeks ago' },
    { id: 4, title: 'Portfolio Website', tech: 'Next.js, Tailwind CSS', type: 'Personal', icon: <Layout size={24} />, color: '#F59E0B', bg: '#FEF3C7', date: '1 month ago' },
    { id: 5, title: 'RESTful API Service', tech: 'Express, PostgreSQL', type: 'Workplace', icon: <Server size={24} />, color: '#6366F1', bg: '#E0E7FF', date: '2 months ago' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F4F6' }}>
      <Header />
      
      <main className="container" style={{ padding: '3rem 1.5rem', flex: 1, maxWidth: '1000px' }}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Projects</h1>
            <p className="text-secondary mt-1">Organize and display your complete portfolio</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2" style={{ backgroundColor: '#10B981' }}>
            <Plus size={18} /> Add New Project
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-6" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} className="text-muted" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search projects..." style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline" style={{ backgroundColor: 'white' }}>All</button>
            <button className="btn btn-outline" style={{ backgroundColor: 'white' }}>Workplace</button>
            <button className="btn btn-outline" style={{ backgroundColor: 'white' }}>Personal</button>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {mockProjectsList.map(proj => (
            <div key={proj.id} className="card" style={{ padding: '1.5rem', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <div className="flex justify-between items-start mb-4">
                <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', backgroundColor: proj.bg, color: proj.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {proj.icon}
                </div>
                <span className="text-sm font-medium text-secondary">{proj.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{proj.title}</h3>
              <p className="text-sm text-secondary mb-4">{proj.tech}</p>
              
              <div className="flex justify-between items-center" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                 <span style={{ backgroundColor: proj.bg, color: proj.color, fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                   {proj.type}
                 </span>
                 <button className="text-sm font-medium text-secondary hover:text-primary transition-colors">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
