"use client";

import React from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Link as LinkIcon, MapPin, Camera } from 'lucide-react';

export default function Profile() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F4F6' }}>
      <Header />
      
      <main className="container" style={{ padding: '3rem 1.5rem', flex: 1, maxWidth: '900px' }}>
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
        
        <div className="card" style={{ padding: '2rem' }}>
          {/* Avatar Section */}
          <div className="flex items-center gap-6 mb-8" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#3B82F6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                A
              </div>
              <button style={{ position: 'absolute', bottom: 0, right: 0, padding: '0.5rem', backgroundColor: 'white', borderRadius: '50%', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}>
                <Camera size={16} className="text-secondary" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold">{user.displayName}</h2>
              <p className="text-secondary">Full Stack Developer</p>
              <button className="btn btn-outline mt-3 text-sm">Upload new avatar</button>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="flex gap-6" style={{ flexWrap: 'wrap' }}>
              <div className="flex flex-col gap-2" style={{ flex: '1 1 300px' }}>
                <label className="text-sm font-medium">Display Name</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <User size={16} className="text-muted" style={{ position: 'absolute', left: '1rem' }} />
                  <input type="text" defaultValue={user.displayName} style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
              <div className="flex flex-col gap-2" style={{ flex: '1 1 300px' }}>
                <label className="text-sm font-medium">Email Address</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Mail size={16} className="text-muted" style={{ position: 'absolute', left: '1rem' }} />
                  <input type="email" defaultValue={user.email} style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea rows={4} placeholder="Tell the community about yourself..." style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontFamily: 'inherit' }} defaultValue="Passionate developer building tools for builders. Always learning!"></textarea>
            </div>

            <div className="flex gap-6" style={{ flexWrap: 'wrap' }}>
              <div className="flex flex-col gap-2" style={{ flex: '1 1 300px' }}>
                <label className="text-sm font-medium">Location</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={16} className="text-muted" style={{ position: 'absolute', left: '1rem' }} />
                  <input type="text" placeholder="City, Country" defaultValue="San Francisco, CA" style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
              <div className="flex flex-col gap-2" style={{ flex: '1 1 300px' }}>
                <label className="text-sm font-medium">Personal Website / GitHub</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <LinkIcon size={16} className="text-muted" style={{ position: 'absolute', left: '1rem' }} />
                  <input type="url" placeholder="https://" defaultValue="https://github.com/alex" style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button type="button" className="btn btn-outline">Cancel</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: '#4F46E5', color: 'white' }}>Save Changes</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
