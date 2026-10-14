import React, { useState } from 'react';
import './SoftwareTools.css';

const softwareData = [
  { name: 'Adobe Premiere Pro', proficiency: 95, icon: 'Pr' },
  { name: 'Adobe After Effects', proficiency: 90, icon: 'Ae' },
  { name: 'DaVinci Resolve', proficiency: 85, icon: 'Da' },
  { name: 'Adobe Photoshop', proficiency: 88, icon: 'Ps' },
  { name: 'Adobe Audition', proficiency: 82, icon: 'Au' },
  { name: 'Final Cut Pro', proficiency: 75, icon: 'Fc' },
];

const SoftwareTools = () => {
  const [activeTab, setActiveTab] = useState('software');

  if (activeTab !== 'software') return null;

  return (
    <div className="software-tools">
      <div className="section-tabs">
        <button 
          className={`tab ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          SOFTWARE TOOLS
        </button>
        <button 
          className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
          onClick={() => setActiveTab('tech')}
        >
          TECH STACKS
        </button>
      </div>
      
      <div className="tools-content">
        <div className="tools-grid">
          {softwareData.map((software, index) => (
            <div key={index} className="tool-item">
              <div className="tool-icon">{software.icon}</div>
              <div className="tool-info">
                <div className="tool-name">{software.name}</div>
                <div className="tool-proficiency">
                  <div className="proficiency-bar">
                    <div 
                      className="proficiency-fill" 
                      style={{ width: `${software.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="proficiency-text">{software.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareTools;
