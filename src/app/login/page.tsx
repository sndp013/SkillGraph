"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Login() {
  const { login, user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="auth-container" style={{ backgroundColor: 'var(--bg-main)' }}>
      <motion.div 
        className="card auth-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-bold text-primary flex justify-center items-center gap-2 mb-6">
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'var(--primary)' }}></div>
            SkillGraph
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-secondary text-sm">Sign in to your SkillGraph account</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2" style={{ padding: '0.75rem' }}>
            Sign In (Demo)
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-secondary">
            Don't have an account? <Link href="/signup" className="text-primary font-medium">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
