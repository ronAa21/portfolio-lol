import React from 'react';
import './TechStacks.css';

const techData = [
  'Video Editing',
  'Color Grading',
  'Motion Graphics',
  'Sound Design',
  'Visual Effects',
  'Animation',
  'Storytelling',
  'Video Production',
  'Content Creation',
  'Compositing',
  'Rotoscoping',
  'Green Screen',
];

const TechStacks = () => {
  return (
    <div className="tech-stacks">
      <h3 className="tech-title">CREATIVE SKILLS</h3>
      
      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div key={index} className="tech-badge">
            <span className="tech-name">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
