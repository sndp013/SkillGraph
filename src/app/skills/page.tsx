"use client";

import React from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, Plus, Star } from 'lucide-react';

export default function Skills() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  const skillCategories = [
    { title: "Frontend & UI", skills: ["React", "Next.js", "Vanilla CSS", "Framer Motion", "TailwindCSS"] },
    { title: "Backend & Systems", skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"] },
    { title: "Cloud & Devops", skills: ["AWS", "Firebase", "Docker", "Vercel"] },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F4F6' }}>
      <Header />
      
      <main className="container" style={{ padding: '3rem 1.5rem', flex: 1, maxWidth: '900px' }}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Skills Matrix</h1>
            <p className="text-secondary mt-1">Manage highlighting of your core competencies</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2" style={{ backgroundColor: '#8B5CF6' }}>
            <Plus size={18} /> Add New Skill
          </button>
        </div>

        <div className="card mb-8" style={{ padding: '2rem', background: 'linear-gradient(to right, #4F46E5, #8B5CF6)', color: 'white' }}>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles size={24} />
            <h2 className="text-xl font-bold">AI Skill Insights</h2>
          </div>
          <p style={{ opacity: 0.9 }}>
            Based on market trends and your recent Python repositories, we recommend adding <strong>TensorFlow</strong> or <strong>PyTorch</strong> to your portfolio soon to boost search visibility.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="card" style={{ padding: '1.5rem' }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">{cat.title}</h3>
                <button className="text-sm font-medium text-primary hover:underline">Edit Category</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-hover)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', borderRadius: '2rem' }}>
                    <Star size={14} className="text-muted" />
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
