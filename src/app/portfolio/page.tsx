"use client";

import React from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { ExternalLink, Camera, Briefcase, Mail } from 'lucide-react';

export default function PortfolioPreview() {
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  const demoProjects = [
    { title: 'Project Name', desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.', link: '#' },
    { title: 'Project Name', desc: 'What was your role, your deliverables, if the project was successful, with a link to the project.', link: '#' },
    { title: 'Project Name', desc: 'You can also add a description to the project here with details.', link: '#' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F4F6', fontFamily: 'Inter, sans-serif' }}>
      <Header />
      
      {/* Editor/Preview Context Bar */}
      <div style={{ backgroundColor: '#111827', color: 'white', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <p className="text-sm font-medium">You are previewing your "Madelyn Torff Figma Theme"</p>
        <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Edit Theme</button>
      </div>

      <main style={{ flex: 1, backgroundColor: '#FFFFFF', color: '#25282B', position: 'relative', overflowX: 'hidden' }}>
        
        {/* Navigation for the template */}
        <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', alignItems: 'center', fontWeight: 'bold', fontSize: '1.2rem', maxWidth: '1000px' }}>
           <div>{user.displayName ? user.displayName.split(' ')[0] : 'Alex'}</div>
           <div style={{ display: 'flex', gap: '2rem', fontSize: '1rem', fontWeight: 500 }}>
             <a href="#about" style={{ textDecoration: 'none', color: '#25282B' }}>About</a>
             <a href="#projects" style={{ textDecoration: 'none', color: '#25282B' }}>Projects</a>
             <a href="#contacts" style={{ textDecoration: 'none', color: '#25282B' }}>Contacts</a>
           </div>
        </nav>

        <div className="container" style={{ padding: '0 1.5rem', maxWidth: '1000px' }}>
          
          {/* Hero Section */}
          <section style={{ display: 'flex', alignItems: 'center', minHeight: '80vh', flexWrap: 'wrap-reverse', gap: '4rem' }}>
             <div style={{ flex: 1, minWidth: '300px' }}>
                <p style={{ color: '#F9B434', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>FULL STACK DEVELOPER</p>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#25282B' }}>
                  Hello, my name<br/>is {user.displayName ? user.displayName.split(' ')[0] : 'Alex'}
                </h1>
                <p style={{ color: '#828282', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '400px' }}>
                  Short text with details about you, what you do or your professional career. You can add more information on the about page.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ backgroundColor: '#F9B434', color: '#25282B', padding: '0.75rem 2rem', borderRadius: '2rem', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(249, 180, 52, 0.3)' }}>Projects</button>
                  <button style={{ backgroundColor: 'transparent', color: '#25282B', padding: '0.75rem 2rem', borderRadius: '2rem', fontWeight: 700, border: '2px solid #25282B', cursor: 'pointer' }}>LinkedIn</button>
                </div>
             </div>
             
             <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                {/* Yellow Wavy blob shape */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: '130%', zIndex: 0, top: '50%', transform: 'translateY(-50%)', fill: '#F9B434' }}>
                  <path d="M42.7,-73.4C55.9,-67.5,67.6,-57.4,75.3,-44.6C83,-31.8,86.6,-15.9,85.1,-0.9C83.5,14.1,76.8,28.2,68.2,40.1C59.6,52,49,61.7,36.5,69.5C24,77.3,9.5,83.1,-4.7,86.1C-18.9,89.1,-37.8,89.3,-51.7,81.4C-65.6,73.5,-74.5,57.5,-80.6,41.2C-86.7,24.9,-90,8.2,-87.3,-7.3C-84.5,-22.8,-75.7,-37.1,-63.9,-46.9C-52.1,-56.7,-37.3,-62,-23.4,-67C-9.5,-72,3.4,-76.8,16.5,-77C29.6,-77.2,42.7,-73.4,42.7,-73.4Z" transform="translate(100 100)" />
                </svg>
                {/* Circular image placeholder */}
                <div style={{ width: '380px', height: '380px', backgroundColor: '#E5E7EB', borderRadius: '50%', zIndex: 1, backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', border: '8px solid white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}></div>
             </div>
          </section>

          {/* Spacer */}
          <div style={{ padding: '2rem 0' }}></div>

          {/* About Section */}
          <section id="about" style={{ display: 'flex', alignItems: 'center', minHeight: '60vh', flexWrap: 'wrap', gap: '4rem', padding: '4rem 0' }}>
             <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#25282B', marginBottom: '1.5rem', position: 'relative' }}>
                  About me
                  <div style={{ position: 'absolute', bottom: '-10px', left: 0, width: '60px', height: '4px', backgroundColor: '#F9B434', borderRadius: '2px' }}></div>
                </h2>
                <p style={{ color: '#828282', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet dictum enim quis metus finibus, rhoncus.
                </p>
                <p style={{ color: '#828282', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  Sed ut ligula est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. 
                </p>
             </div>
             <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '350px', height: '350px', backgroundColor: '#E5E7EB', borderRadius: '50%', backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', border: '5px solid #F9B434' }}></div>
             </div>
          </section>

          {/* Spacer */}
          <div style={{ padding: '2rem 0' }}></div>

          {/* Projects Section */}
          <section id="projects" style={{ padding: '4rem 0' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#25282B', marginBottom: '4rem', textAlign: 'center', position: 'relative' }}>
                Projects
                <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', backgroundColor: '#F9B434', borderRadius: '2px' }}></div>
             </h2>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                {demoProjects.map((proj, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '3rem', flexWrap: idx % 2 === 0 ? 'wrap' : 'wrap-reverse', alignItems: 'center' }}>
                     {idx % 2 === 0 && (
                       <div style={{ flex: '1.5 1 400px', height: '400px', backgroundColor: '#E5E7EB', borderRadius: '1rem', overflow: 'hidden' }}>
                         <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #F9B434, #ec8a12)', opacity: 0.8 }}></div>
                       </div>
                     )}
                     <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{proj.title}</h3>
                        <p style={{ color: '#828282', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                          {proj.desc}
                        </p>
                        <button style={{ backgroundColor: 'transparent', color: '#25282B', padding: '0.6rem 1.8rem', borderRadius: '2rem', fontWeight: 700, border: '2px solid #25282B', cursor: 'pointer' }}>View Project</button>
                     </div>
                     {idx % 2 !== 0 && (
                       <div style={{ flex: '1.5 1 400px', height: '400px', backgroundColor: '#E5E7EB', borderRadius: '1rem', overflow: 'hidden' }}>
                         <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #4F46E5, #ec8a12)', opacity: 0.8 }}></div>
                       </div>
                     )}
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Footer / Wavy Bottom */}
        <section id="contacts" style={{ position: 'relative', marginTop: '10rem', height: '350px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem', alignItems: 'center' }}>
          
           <svg viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 0 }} preserveAspectRatio="none">
             <path fill="#F9B434" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>

           <div style={{ zIndex: 1, display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
             <a href="#" style={{ color: '#25282B' }}><Camera size={28} /></a>
             <a href="#" style={{ color: '#25282B' }}><Briefcase size={28} /></a>
             <a href={`mailto:${user.email}`} style={{ color: '#25282B' }}><Mail size={28} /></a>
           </div>

           <p style={{ zIndex: 1, fontWeight: 500, fontSize: '0.875rem', color: '#25282B' }}>Made with SkillGraph</p>
        </section>

      </main>
    </div>
  );
}
