import React from 'react';
import { Layers, Zap, Award, Eye, User, Plus, Star, Download, BarChart2, Smartphone, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#4F46E5', borderRadius: '1rem', padding: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p style={{ color: '#E0E7FF' }}>Here's your professional journey overview</p>
        </div>
        <div style={{ textAlign: 'right', minWidth: '200px' }}>
          <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>Profile Completion <span style={{ fontWeight: 700, marginLeft: '1rem' }}>92%</span></div>
          <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '92%', height: '100%', backgroundColor: 'white', borderRadius: '4px' }}></div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="text-sm font-medium text-secondary">Total Projects</div>
              <div className="text-3xl font-bold mt-1">12</div>
            </div>
            <div style={{ backgroundColor: '#EFF6FF', padding: '0.75rem', borderRadius: '50%', color: '#3B82F6' }}>
              <Layers size={20} />
            </div>
          </div>
          <div className="text-sm font-medium mt-4" style={{ color: '#10B981' }}>+3 this month</div>
        </div>
        
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="text-sm font-medium text-secondary">Skills Mastered</div>
              <div className="text-3xl font-bold mt-1">24</div>
            </div>
            <div style={{ backgroundColor: '#ECFDF5', padding: '0.75rem', borderRadius: '50%', color: '#10B981' }}>
              <Zap size={20} />
            </div>
          </div>
          <div className="text-sm font-medium mt-4" style={{ color: '#10B981' }}>+5 this month</div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="text-sm font-medium text-secondary">Certifications</div>
              <div className="text-3xl font-bold mt-1">8</div>
            </div>
            <div style={{ backgroundColor: '#F5F3FF', padding: '0.75rem', borderRadius: '50%', color: '#8B5CF6' }}>
              <Award size={20} />
            </div>
          </div>
          <div className="text-sm font-medium mt-4" style={{ color: '#3B82F6' }}>+2 this month</div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="text-sm font-medium text-secondary">Profile Views</div>
              <div className="text-3xl font-bold mt-1">1,247</div>
            </div>
            <div style={{ backgroundColor: '#FFF7ED', padding: '0.75rem', borderRadius: '50%', color: '#F97316' }}>
              <Eye size={20} />
            </div>
          </div>
          <div className="text-sm font-medium mt-4" style={{ color: '#10B981' }}>+18% this week</div>
        </div>
      </div>

      {/* Main Grid Two Columns */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        
        {/* Left Column */}
        <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Quick Actions */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
              <Link href="/profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <button style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:shadow-sm">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4F46E5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} />
                  </div>
                  <span className="text-sm font-medium mt-2">Edit Profile</span>
                </button>
              </Link>
              
              <Link href="/projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <button style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:shadow-sm">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={20} />
                  </div>
                  <span className="text-sm font-medium mt-2">Add Project</span>
                </button>
              </Link>

              <Link href="/skills" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <button style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:shadow-sm">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#8B5CF6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Star size={20} />
                  </div>
                  <span className="text-sm font-medium mt-2">Manage Skills</span>
                </button>
              </Link>
              
              <button style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:shadow-sm" onClick={() => alert("Downloading resume logic here...")}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Download size={20} />
                </div>
                <span className="text-sm font-medium mt-2 text-center" style={{ lineHeight: 1.2 }}>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className="font-bold">Recent Projects</h3>
              <Link href="/projects" className="text-sm font-medium text-primary hover:underline">View All &rarr;</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Proj 1 */}
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.5rem', backgroundColor: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <div className="font-bold" style={{ fontSize: '0.95rem' }}>E-commerce Dashboard</div>
                    <div className="text-sm text-secondary">React, Node.js, MongoDB</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <span style={{ backgroundColor: '#EFF6FF', color: '#3B82F6', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>Workplace</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-secondary font-medium">2 days ago</div>
              </div>

              {/* Proj 2 */}
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.5rem', backgroundColor: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <div className="font-bold" style={{ fontSize: '0.95rem' }}>Mobile Banking App</div>
                    <div className="text-sm text-secondary">Flutter, Firebase</div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>Personal</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-secondary font-medium">1 week ago</div>
              </div>
              
              {/* Proj 3 */}
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.5rem', backgroundColor: '#F5F3FF', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    <FlaskConical size={24} />
                  </div>
                  <div>
                    <div className="font-bold" style={{ fontSize: '0.95rem' }}>AI Data Analysis Tool</div>
                    <div className="text-sm text-secondary">Python, TensorFlow</div>
                  </div>
                </div>
                <div className="text-sm text-secondary font-medium">2 weeks ago</div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Profile Strength */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 className="font-bold mb-4">Profile Strength</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span className="text-secondary font-medium">Basic Info</span>
                  <span className="font-bold text-secondary">100%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-hover)', borderRadius: '3px' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981', borderRadius: '3px' }}></div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span className="text-secondary font-medium">Projects</span>
                  <span className="font-bold text-secondary">95%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-hover)', borderRadius: '3px' }}>
                  <div style={{ width: '95%', height: '100%', backgroundColor: '#8B5CF6', borderRadius: '3px' }}></div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span className="text-secondary font-medium">Skills</span>
                  <span className="font-bold text-secondary">85%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-hover)', borderRadius: '3px' }}>
                  <div style={{ width: '85%', height: '100%', backgroundColor: '#F59E0B', borderRadius: '3px' }}></div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span className="text-secondary font-medium">Certifications</span>
                  <span className="font-bold text-secondary">90%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-hover)', borderRadius: '3px' }}>
                  <div style={{ width: '90%', height: '100%', backgroundColor: '#3B82F6', borderRadius: '3px' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Skills */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className="font-bold">Top Skills</h3>
              <Link href="/skills" className="text-sm font-medium text-primary hover:underline">Manage &rarr;</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} style={{ backgroundColor: '#4F46E5', color: 'white', padding: '0.35rem 0.8rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 500, boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 className="font-bold mb-4">Recent Achievements</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: '#EFF6FF', borderRadius: '0.75rem', padding: '1rem 0.5rem', textAlign: 'center', border: '1px solid #DBEAFE' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563EB' }}>Project<br/>Master</div>
              </div>
              <div style={{ backgroundColor: '#FEF3C7', borderRadius: '0.75rem', padding: '1rem 0.5rem', textAlign: 'center', border: '1px solid #FDE68A' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏆</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#D97706' }}>Certified<br/>Pro</div>
              </div>
              <div style={{ backgroundColor: '#F5F3FF', borderRadius: '0.75rem', padding: '1rem 0.5rem', textAlign: 'center', border: '1px solid #EDE9FE' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#7C3AED' }}>Skill<br/>Collector</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
