import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Video } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    title: 'Launched SkillGraph MVP',
    date: 'April 2026',
    description: 'Built the first version of the platform using React, Next.js, and Firebase. Implemented the core timeline interface.',
    skills: ['React', 'Next.js', 'Vanilla CSS'],
    type: 'video',
  },
  {
    id: 2,
    title: 'System Architecture Design',
    date: 'March 2026',
    description: 'Finalized the cloud architecture including NoSQL data models and storage buckets setup.',
    skills: ['System Design', 'NoSQL', 'AWS'],
    type: 'pdf',
  },
  {
    id: 3,
    title: 'UI/UX Prototypes',
    date: 'February 2026',
    description: 'Designed beautiful, Notion-inspired mockups focusing on micro-interactions.',
    skills: ['Figma', 'UI/UX', 'Design Systems'],
    type: 'image',
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      {mockProjects.map((project, index) => (
        <motion.div 
          key={project.id}
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="timeline-dot"></div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <span className="text-sm text-secondary font-medium">{project.date}</span>
            </div>
            <p className="text-secondary mb-4">{project.description}</p>
            
            <div className="flex items-center gap-2 mb-4 p-3" style={{ backgroundColor: 'var(--bg-hover)', borderRadius: 'var(--radius-sm)' }}>
              {project.type === 'video' && <Video size={18} className="text-primary" />}
              {project.type === 'image' && <ImageIcon size={18} className="text-primary" />}
              {project.type === 'pdf' && <FileText size={18} className="text-primary" />}
              <span className="text-sm font-medium">Project Review.{project.type === 'pdf' ? 'pdf' : 'mp4'}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.skills.map(skill => (
                <span key={skill} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-hover)', borderRadius: '20px', border: '1px solid var(--border-color)', fontWeight: 500 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
