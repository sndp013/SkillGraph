"use client";

import React from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { TrendingUp, Users, Download, Eye } from 'lucide-react';

export default function Analytics() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F4F6' }}>
      <Header />
      
      <main className="container" style={{ padding: '3rem 1.5rem', flex: 1, maxWidth: '1000px' }}>
        <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-secondary mb-8">Track the performance of your public portfolio</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <div className="flex items-center gap-3 mb-2 text-secondary">
              <Eye size={18} /> <span className="font-medium">Total Views</span>
            </div>
            <div className="text-3xl font-bold mb-1">1,247</div>
            <div className="text-sm font-medium text-primary flex items-center gap-1">
              <TrendingUp size={14} /> +18% this month
            </div>
          </div>
          
          <div className="card" style={{ padding: '1.5rem' }}>
            <div className="flex items-center gap-3 mb-2 text-secondary">
              <Users size={18} /> <span className="font-medium">Unique Visitors</span>
            </div>
            <div className="text-3xl font-bold mb-1">892</div>
            <div className="text-sm font-medium text-primary flex items-center gap-1">
              <TrendingUp size={14} /> +12% this month
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <div className="flex items-center gap-3 mb-2 text-secondary">
              <Download size={18} /> <span className="font-medium">Resume Downloads</span>
            </div>
            <div className="text-3xl font-bold mb-1">45</div>
            <div className="text-sm font-medium text-primary flex items-center gap-1">
              <TrendingUp size={14} /> +5% this month
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h3 className="font-bold mb-6">Traffic Over Time</h3>
            {/* Mock Chart Area */}
            <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'flex-end', gap: '2%', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80, 50, 95].map((height, i) => (
                <div key={i} style={{ flex: 1, backgroundColor: '#EFF6FF', height: `${height}%`, borderRadius: '4px 4px 0 0', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', backgroundColor: '#3B82F6', borderRadius: '4px 4px 0 0' }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-secondary">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 className="font-bold mb-4">Top Referrers</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-secondary">42%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">GitHub</span>
                  <span className="text-secondary">28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Direct</span>
                  <span className="text-secondary">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Twitter / X</span>
                  <span className="text-secondary">15%</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 className="font-bold mb-4">Location</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">United States</span>
                  <span className="text-secondary">65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">India</span>
                  <span className="text-secondary">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Europe</span>
                  <span className="text-secondary">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
