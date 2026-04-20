"use client";

import React from 'react';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import SkillRecommendations from '@/components/SkillRecommendations';
import CommunityFeed from '@/components/CommunityFeed';
import Dashboard from '@/components/Dashboard';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center p-8" style={{ minHeight: '100vh' }}>Loading...</div>;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: user ? '#F3F4F6' : 'var(--bg-main)' }}>
      <Header />
      
      <main style={{ flex: 1, paddingBottom: user ? '4rem' : '0' }}>
        {!user ? (
          <>
            {/* Hero Section */}
            <section className="container text-center" style={{ padding: '6rem 1.5rem 4rem' }}>
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ padding: '0.4rem 1rem', background: 'var(--bg-hover)', borderRadius: '2rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--primary)' }}>
                  Welcome to the future of portfolios
                </div>
                <h1 className="text-3xl font-bold mb-6" style={{ fontSize: '3.5rem', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px' }}>
                  Your Lifelong Portfolio & Skill Proof Platform
                </h1>
                <p className="text-xl text-secondary mb-8" style={{ maxWidth: '600px' }}>
                  Showcase projects, track your achievements, and prove your skills through a dynamic timeline. Discover your next opportunity based on data.
                </p>
                <div className="flex gap-4">
                  <Link href="/signup" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                    Get Started Free
                  </Link>
                  <Link href="/login" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                    Sign In
                  </Link>
                </div>
              </motion.div>
            </section>

            {/* About the Company */}
            <section style={{ backgroundColor: 'var(--bg-hover)', padding: '5rem 0' }}>
              <div className="container">
                <div className="flex" style={{ flexDirection: 'row', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 className="text-3xl font-bold mb-4">About SkillGraph</h2>
                    <p className="text-secondary mb-4 text-lg">
                      At SkillGraph, we believe a resume is a thing of the past. Your career is a continuous journey of learning, building, and evolving.
                    </p>
                    <p className="text-secondary text-lg">
                      We developed a platform where builders, developers, designers, and creators can visually aggregate their lifetime of accomplishments into one verifiable graph of skills.
                    </p>
                  </div>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <div className="card" style={{ padding: '2rem', background: 'var(--bg-surface)' }}>
                      <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
                      <p className="text-secondary italic">
                        "To bring transparency to talent by providing a verifiable, timeline-first showcase of what people can actually build, rather than what they say they can do."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features/Uses */}
            <section className="container" style={{ padding: '5rem 1.5rem' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why use SkillGraph?</h2>
                <p className="text-secondary text-lg">A modern alternative to outdated resumes tailored for doers.</p>
              </div>

              <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
                <div className="card" style={{ flex: '1 1 300px', padding: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🎯</div>
                  <h3 className="text-xl font-bold mb-2">Centralized Portfolio</h3>
                  <p className="text-secondary">Upload project videos, images, and PDFs. Consolidate your GitHub, Figma, and Notion work into one place.</p>
                </div>
                <div className="card" style={{ flex: '1 1 300px', padding: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🤖</div>
                  <h3 className="text-xl font-bold mb-2">AI Recommendations</h3>
                  <p className="text-secondary">Our AI analyzes your timeline to suggest the next relevant skills you should learn to advance your career.</p>
                </div>
                <div className="card" style={{ flex: '1 1 300px', padding: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🌐</div>
                  <h3 className="text-xl font-bold mb-2">Public Showcase URL</h3>
                  <p className="text-secondary">Generate an auto-updating public profile URL to share seamlessly with recruiters or teammates.</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', marginTop: 'auto' }}>
              <div className="container text-center text-secondary text-sm">
                &copy; 2026 SkillGraph Inc. All rights reserved.
              </div>
            </footer>
          </>
        ) : (
          <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
             
             {/* Section 1: Dashboard Top Analytics & Stats */}
             <section>
               <Dashboard />
             </section>

             {/* Section 2: Journey & Professional Details (Timeline) */}
             <section>
                <div className="flex justify-between items-center mb-6" style={{ borderBottom: '2px solid #E5E7EB', paddingBottom: '1rem' }}>
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>Your Journey & Timeline</h2>
                    <p className="text-secondary text-sm mt-1">Detailed history of your specific projects and milestones</p>
                  </div>
                  <button className="btn btn-primary" style={{ backgroundColor: '#10B981', color: 'white', border: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>+ Log Milestone</button>
                </div>
                
                <div className="flex gap-8 mt-6" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 500px' }}>
                     <div className="card" style={{ padding: '2rem', backgroundColor: 'white' }}>
                       <Timeline />
                     </div>
                  </div>
                  
                  <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <SkillRecommendations />
                    
                    <div className="card" style={{ padding: '1.5rem' }}>
                      <h3 className="font-bold mb-2">Public Portfolio</h3>
                      <p className="text-sm text-secondary mb-4">Your portfolio is live and auto-updating.</p>
                      <Link href={`/user/${user.uid}`} className="btn btn-outline w-full text-center" style={{ display: 'block', borderColor: '#4F46E5', color: '#4F46E5' }}>
                        View Public URL
                      </Link>
                    </div>
                  </div>
                </div>
             </section>

             {/* Section 3: Community Discussions */}
             <section>
                <div className="flex justify-between items-center mb-6" style={{ borderBottom: '2px solid #E5E7EB', paddingBottom: '1rem' }}>
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>Community Feed</h2>
                    <p className="text-secondary text-sm mt-1">Connect with other builders and developers on SkillGraph</p>
                  </div>
                  <button className="btn btn-primary" style={{ backgroundColor: '#4F46E5', color: 'white' }}>New Topic</button>
                </div>
                
                <div style={{ maxWidth: '800px', margin: '0' }}>
                  <CommunityFeed />
                </div>
             </section>

          </div>
        )}
      </main>
    </div>
  );
}
