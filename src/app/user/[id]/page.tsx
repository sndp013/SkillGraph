"use client";

import React from 'react';
import Timeline from '@/components/Timeline';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';

export default function PublicPortfolio() {
  const params = useParams();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main className="container" style={{ flex: 1, padding: '3rem 1.5rem', maxWidth: '800px' }}>
        <div className="card text-center mb-8" style={{ padding: '3rem 1.5rem', borderBottom: 'none', background: 'linear-gradient(to bottom, var(--bg-hover), var(--bg-surface))' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
            D
          </div>
          <h1 className="text-3xl font-bold mb-2">Demo User's Portfolio</h1>
          <p className="text-secondary text-lg">Public Showcase id: {params.id}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Timeline of Work</h2>
        <Timeline />
      </main>
    </div>
  );
}
