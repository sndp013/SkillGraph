import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const recommendations = [
  { skill: 'GraphQL', reason: 'Based on your recent React projects' },
  { skill: 'Serverless Functions', reason: 'To complement your AWS architecture work' },
  { skill: 'Framer Motion', reason: 'Enhance your UI mockups to interactive prototypes' },
];

export default function SkillRecommendations() {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={20} className="text-primary" />
        <h3 className="font-bold">AI Recommended Skills</h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {recommendations.map((rec, i) => (
          <motion.div 
            key={i}
            className="flex flex-col gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">{rec.skill}</span>
              <button className="text-primary" style={{ display: 'flex' }}><ArrowRight size={14} /></button>
            </div>
            <span className="text-xs text-secondary">{rec.reason}</span>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', marginTop: '0.5rem' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
