"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Search, Bell, Moon, User as UserIcon, ChevronDown, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header" style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2" style={{ color: '#4F46E5' }}>
            SkillGraph
          </Link>
          
          {user && (
            <nav className="nav-links" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
              <Link href="/" style={{ color: '#111827', fontWeight: 600 }}>Dashboard</Link>
              <Link href="/profile" className="text-secondary hover:text-main">Profile</Link>
              <Link href="/portfolio" className="text-secondary hover:text-main" style={{ color: '#4F46E5' }}>Portfolio</Link>
              <Link href="/projects" className="text-secondary hover:text-main">Projects</Link>
              <Link href="/skills" className="text-secondary hover:text-main">Skills</Link>
              <Link href={`/user/${user.uid}`} className="text-secondary hover:text-main">Timeline</Link>
              <Link href="/analytics" className="text-secondary hover:text-main">Analytics</Link>
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {user ? (
            <>
              {/* Search Bar */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={16} className="text-muted" style={{ position: 'absolute', left: '0.75rem' }} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  style={{
                    padding: '0.5rem 1rem 0.5rem 2.25rem',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-main)',
                    fontSize: '0.875rem',
                    width: '200px'
                  }}
                />
              </div>

              {/* Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                  <Bell size={20} />
                  <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#EF4444', color: 'white', fontSize: '0.65rem', fontWeight: 'bold', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    3
                  </span>
                </div>
                <Moon size={20} style={{ cursor: 'pointer' }} />
              </div>

              {/* User Avatar & Dropdown */}
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <div 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem' }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#3B82F6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <ChevronDown size={16} className="text-secondary" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '120%', 
                    right: 0, 
                    width: '200px', 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 0',
                    zIndex: 100
                  }}>
                    <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '0.25rem' }}>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user.displayName}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</p>
                    </div>
                    
                    <Link href="/profile" onClick={() => setDropdownOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      <UserIcon size={16} className="text-secondary" /> My Profile
                    </Link>
                    <Link href="/profile" onClick={() => setDropdownOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      <Settings size={16} className="text-secondary" /> Settings
                    </Link>
                    
                    <div style={{ margin: '0.25rem 0', borderTop: '1px solid var(--border-color)' }}></div>
                    
                    <button 
                      onClick={() => { setDropdownOpen(false); logout(); }} 
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#EF4444', width: '100%', textAlign: 'left' }}
                    >
                      <LogOut size={16} /> Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <nav className="nav-links">
              <Link href="/login" className="btn btn-outline" style={{ border: 'none', fontWeight: 500 }}>Sign In</Link>
              <Link href="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', borderRadius: '2rem' }}>Get Started</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
