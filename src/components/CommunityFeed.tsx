import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

const mockDiscussions = [
  { id: 1, author: 'Sandeep Jadhav', topic: 'How to structure Next.js App Router for portfolios?', likes: 12, replies: 4, date: '2h ago' },
  { id: 2, author: 'Alex Turner', topic: 'Best practices for storing video in Firebase Storage', likes: 8, replies: 2, date: '5h ago' },
  { id: 3, author: 'Priya Patel', topic: 'Showcase: My new interactive 3D physics timeline!', likes: 45, replies: 12, date: '1d ago' },
];

export default function CommunityFeed() {
  return (
    <div className="flex flex-col gap-4">
      {mockDiscussions.map(post => (
        <div key={post.id} className="card" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-primary">{post.author}</span>
            <span className="text-sm text-secondary">{post.date}</span>
          </div>
          <h3 className="text-lg font-bold mb-4">{post.topic}</h3>
          
          <div className="flex items-center gap-6 text-sm text-secondary">
            <button className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer" style={{ background: 'none', border: 'none', padding: 0 }}>
              <Heart size={16} /> {post.likes}
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer" style={{ background: 'none', border: 'none', padding: 0 }}>
              <MessageSquare size={16} /> {post.replies} Replies
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer" style={{ background: 'none', border: 'none', padding: 0 }}>
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
