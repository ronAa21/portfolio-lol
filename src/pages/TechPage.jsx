import React, { useState } from 'react';
import TopNavigation from '../components/TopNavigation';
import FriendsList from '../components/FriendsList';
import threadsIcon from '../visuals/threads-icon.jpg';
import petAdIcon from '../visuals/pet-ad-icon.jpg';
import notesIcon from '../visuals/notes-icon.jpg';
import decisionIcon from '../visuals/decision-icon.jpg'
import megaCatIcon from '../visuals/megacat-icon.png';
import gutenverseIcon from '../visuals/gutenverse-icon.png';
import lyricVid from '../media/lyric-vid.mp4';
import lyricVidIcon from '../visuals/tiktok-vid1.jpg';
import oldVid from '../media/old-vid.mp4';
import oldVidIcon from '../visuals/tiktok-vid2.jpg';
import facelessChannelVid from '../media/faceless-channel-vid.mp4';
import facelessChannelIcon from '../visuals/faceless-channel-pic.jpg';
import ucgVid from '../media/UGC-Sample.mp4';
import ucgIcon from '../visuals/ucg-pic.jpg';
import typoVid from '../media/typography.mp4';
import typoIcon from '../visuals/typography-icon.jpg';
import transitionalVid from '../media/transitional-vid.mp4';
import transitionalIcon from '../visuals/transitional-pic.jpg';
import capcutIcon from '../visuals/capcut.svg';
import canvaIcon from '../visuals/canva-svgrepo-com.svg';
import notionIcon from '../visuals/notion-svgrepo-com.svg';
import sunoIcon from '../visuals/suno.svg';
import './TechPage.css';

// Use explicit URL import for background images
const threadsPic = new URL('../visuals/threads-pic.png', import.meta.url).href;
const petAdPic = new URL('../visuals/pet-ad.png', import.meta.url).href;
const notesPic = new URL('../visuals/notes-pic.png', import.meta.url).href;
const decisionPic = new URL('../visuals/decision-pic.png', import.meta.url).href;
const megaCatPic = new URL('../visuals/megacat-pic.png', import.meta.url).href;
const gutenversePic = new URL('../visuals/gutenverse-pic.png', import.meta.url).href;

const CATEGORIES = {
  "WEB": [
    ["Threads", threadsIcon, "#1e5aa8", "#0a2347", "Full Stack", "", "This is my first full stack project", "2025", ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain", "devicon-nodejs-plain", "devicon-mysql-original"], ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"], threadsPic],
    ["Pet Adoption", petAdIcon, "#8B4513", "#3d1f0a", "Full Stack", "", "My first ML-integrated project", "2026", ["devicon-react-original", "devicon-javascript-plain", "devicon-nodejs-plain", "devicon-mysql-original", "devicon-python-plain"], ["React", "JavaScript", "Node.js", "MySQL", "Python"], petAdPic],
    ["Notes", notesIcon, "#2D8C6E", "#0f3326", "Full Stack", "", "For learning purposes", "2025", ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain", "devicon-nodejs-plain", "devicon-mysql-original"], ["HTML","CSS", "JavaScript", "Node.js", "MySQL"], notesPic],
    ["Decision", decisionIcon, "#813dc9", "#0f3326", "Full Stack", "", "For MVC backend architecture learning", "2026", ["devicon-react-original", "devicon-javascript-plain", "devicon-nodejs-plain", "devicon-mysql-original"], ["React", "JavaScript", "Node.js", "MySQL"], decisionPic],
    ["Megacat-themed Introduction", megaCatIcon, "#813dc9", "#0f3326", "Static", "", "A Megacat studios-themed About me website", "2025", ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"], ["HTML", "CSS", "JavaScript"], megaCatPic],
    ["Gutenverse Clone", gutenverseIcon, "#faf8fc", "#0f3326", "Static", "", "A Gutenverse clone", "2025", ["devicon-html5-plain", "devicon-css3-plain"], ["HTML", "CSS"], gutenversePic]
  ],
  "VIDEOS": [
    // Format: [name, icon, color1, color2, level, company, description, experience, videoPath, streamableUrl]
    ["Tiktok Lyric Video", lyricVidIcon, "#c9922b", "#4a2f08", "Entry", "Personal", "A way to pass my time, editing a lyrical video", "1 year", lyricVid, "https://streamable.com/7bado8"],
    ["Tiktok VHS Video", oldVidIcon, "#6b6b5e", "#25251f", "Entry", "Personal", "Just wanted to edit a vhs-based video", "1 year", oldVid, "https://streamable.com/bn2sak"],
    ["Faceless Channel Video", facelessChannelIcon, "#2a6fb8", "#0c2547", "Entry", "Freelance", "Worked as a freelancer on a Faceless channel", "", facelessChannelVid, "https://streamable.com/15sym7"],
    ["UCG video", ucgIcon, "#ebe6e4", "#070706", "Entry", "Personal", "Did a personal project of a UCG video for WeightNordic", "", ucgVid, "https://streamable.com/24u7hn"],
    ["Suno Typography", typoIcon, "#e54e17", "#04225a", "Entry", "Suno", "Edit a video for a content in suno", "1 year", typoVid, "https://streamable.com/3cex4n"],
    ["Suno Transition", transitionalIcon, "#881c1c", "#d0d6e1", "Entry", "Suno", "Edit a video for a content in suno", "1 year", transitionalVid, "https://streamable.com/dbtz8o"],
  ],
  "TECH STACK": [
    ["HTML", "devicon-html5-plain", "#ff5a1f", "#ff5a1f", "Advanced", "", "", "1 year"],
    ["CSS", "devicon-css3-plain", "#2f7bff", "#2f7bff", "Advanced", "", "", "1 year"],
    ["JavaScript", "devicon-javascript-plain", "#ffe21a", "#ffe21a", "Advanced", "", "", "1 year"],
    ["React", "devicon-react-original", "#27d8ff", "#27d8ff", "Intermediate", "", "", "1 year"],
    ["Node.js", "devicon-nodejs-plain", "#4cd964", "#4cd964", "Intermediate", "", "ExpressJS, CommonJS", "1 year"],
    ["MySQL", "devicon-mysql-plain", "#00b7e8", "#ff9a1f", "Intermediate", "", "", "1 year"],
    ["PostgreSQL", "devicon-postgresql-plain", "#3d8bff", "#3d8bff", "Intermediate", "", "", "1 year"],
    ["Python", "devicon-python-plain", "#3b82f6", "#ffd43b", "Intermediate", "", "Machine Learning", "1 year"],
  ],
  "TOOLS": [
    ["POSTMAN", "devicon-postman-plain", "#ff8000", "#0f0f0f", "Intermediate", "", "Use for testing backend connections", "1 year"],
    ["GITHUB", "devicon-github-original", "#ffffff", "#000000", "Intermediate", "", "Use for pushing and pulling repos across remote and local", "1 year"],
    ["GITLAB", "devicon-gitlab-plain", "#dd1717", "#ffffff", "Intermediate", "", "", "1 year"],
    ["VS-CODE", "devicon-visualstudio-plain", "#0182e6", "#ffffff", "Intermediate", "", "Main IDE for developing projects", "3 years"],
    ["VITEJS", "devicon-vitejs-plain", "#4d01e6", "#f2e200", "Intermediate", "", "", "2 years"],
  ],
  "EDITOR TOOLS": [
    ["Capcut", capcutIcon, "#b1b1b1", "#0c0707", "intermediate", "Mobile · Video Editor", "Been doing editing as a way to pass the time", "2 years"],
    ["Canva", canvaIcon, "#0190f7", "#f1f5f3", "Entry", "", "Freelanced for a faceless Channel Client and been using this for their animation", "1 year"],
    ["Notion", notionIcon, "#f1f3f5", "#000000", "Entry", "", "For tracking/documentation for my projects", "1 year"],
    ["Suno", sunoIcon, "#f1f3f5", "#e98310", "Entry", "", "Use for editing/generating music along with Capcut", "1 year"],
  ]
};

const LINKS = [ 
  ["🐙", "GitHub", "github.com/yourname", 1, "https://github.com/"],
  ["💼", "LinkedIn", "Connect with me", 1, "https://linkedin.com/"],
  ["✉️", "Email", "hello@yourname.dev", 1, "mailto:hello@yourname.dev"],
  ["📄", "Résumé", "Download PDF", 0, "#"],
  ["🐦", "Twitter", "Last seen 2d ago", 0, "https://twitter.com/"]
];

const SKILLS = [
  ["Video Editing", 95],
  ["Color Grading", 85],
  ["Motion Graphics", 80],
  ["Sound Design", 75],
  ["3D Animation", 65]
];

const TechPage = ({ onPlayClick, onHomeClick, onTechClick, onProfileClick }) => {
  const [currentView, setCurrentView] = useState('projects');
  const [activeCategory, setActiveCategory] = useState('WEB');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentProjects = CATEGORIES[activeCategory];
  const selectedProject = currentProjects[selectedIndex];
  const backgroundImage = selectedProject[10]; // Get background image if exists (for WEB)
  const backgroundVideo = selectedProject[8]; // Get background video if exists (for VIDEOS)
  
  console.log('Selected Project:', selectedProject[0]);
  console.log('Background Image:', backgroundImage);
  console.log('Background Video:', backgroundVideo);

  const handleCategoryClick = (category) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setSelectedIndex(0);
      setIsFading(false);
    }, 300); // Match the CSS transition duration
  };

  const handleProjectClick = (index) => {
    if (index === selectedIndex) return; // Don't fade if clicking same item
    
    const project = currentProjects[index];
    const primaryColor = project[2]; // Color 1
    const secondaryColor = project[3]; // Color 2
    
    // Set CSS variables for glow effect
    const stageElement = document.querySelector('.tech-stage');
    if (stageElement) {
      stageElement.style.setProperty('--spot', primaryColor);
      stageElement.style.setProperty('--spot2', secondaryColor);
      
      // Trigger click burst animation
      const ring = document.querySelector('.tech-ring');
      if (ring) {
        ring.classList.remove('fire');
        void ring.offsetWidth; // Force reflow
        ring.classList.add('fire');
      }
    }
    
    setIsFading(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsFading(false);
    }, 300); // Match the CSS transition duration
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleActionClick = (action) => {
    console.log(action);
    // Add your action handler here
  };

  // Handle GitHub button click
  const handleGithubClick = (projectName) => {
    const projectLinks = {
      "Threads": "https://github.com/ronAa21/Project-CashFlow",
      "Pet Adoption": "https://github.com/ronAa21/Pet-Adoption/tree/main",
      "Notes": "https://github.com/ronAa21/Notes-Website",
      "Decision": "https://github.com/ronAa21/Decision-app/tree/main",
      "Megacat": "https://github.com/ronAa21/About-me-website",
      "Gutenverse": "https://github.com/ronAa21/Gutenverse-Clone-",
      "DaVinci Resolve": "",
      "After Effects": "",
      "Photoshop": "",
      "Illustrator": "",
      "Figma": "",
      "Audition": "",
      "Logic Pro": "",
      "Blender": "",
      "Cinema 4D": "",
      "Final Cut Pro": "",
      "Frame.io": "",
      "Notion": ""
    };

    const url = projectLinks[projectName];
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Handle Live Preview button click
  const handleLivePreviewClick = (projectName) => {
    const projectLinks = {
      "Threads": "https://project-s-nhsi.onrender.com/",
      "Pet Adoption": "https://pet-adoption-web-t3i8.onrender.com/login",
      "Notes": "https://first-notes.onrender.com/index.html",
      "Megacat": "https://about-me-website-five.vercel.app/",
      "Gutenverse": "https://gutenverse-clone-3q4z.vercel.app/",
      "Decision": "", // No live preview
      "DaVinci Resolve": "",
      "After Effects": "",
      "Photoshop": "",
      "Illustrator": "",
      "Figma": "",
      "Audition": "",
      "Logic Pro": "",
      "Blender": "",
      "Cinema 4D": "",
      "Final Cut Pro": "",
      "Frame.io": "",
      "Notion": ""
    };

    const url = projectLinks[projectName];
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Handle View Video button click
  const handleViewVideoClick = () => {
    const streamableUrl = selectedProject[9]; // Streamable URL is at index 9
    if (streamableUrl) {
      window.open(streamableUrl, '_blank');
    }
  };

  return (
    <div className="tech-page-app">
      {/* Main Top Navigation */}
      <div className="tech-top-nav-wrapper">
        <TopNavigation 
          onPlayClick={onPlayClick} 
          onHomeClick={onHomeClick} 
          onTechClick={onTechClick}
          onProfileClick={onProfileClick}
          pageTitle={null}
          showWelcome={false}
        />
        
        {/* Secondary Navigation Bar with Category Tabs - Always Visible */}
        <div className="tech-secondary-nav">
          <div className="tech-category-tabs">
            {Object.keys(CATEGORIES).map((category) => (
              <button
                key={category}
                className={`tech-category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="tech-secondary-right">
            <span className="tech-links-label">LINKS</span>
          </div>
        </div>
      </div>
      
      <div className="tech-page-body">
        <main className="tech-stage">
          {/* Background Image or Video */}
          {activeCategory === 'VIDEOS' && backgroundVideo ? (
            <>
              <video 
                key={selectedProject[0]} // Force re-render when selection changes
                className={`tech-stage-bg-video ${isFading ? 'fading' : ''}`}
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
              <div className="tech-stage-shade"></div>
            </>
          ) : backgroundImage ? (
            <>
              <div 
                className={`tech-stage-bg ${isFading ? 'fading' : ''}`}
                style={{ 
                  backgroundImage: `url("${backgroundImage}")`,
                }}
              ></div>
              <div className="tech-stage-shade"></div>
            </>
          ) : null}
          
          {/* Home View */}
          <section className={`tech-view ${currentView === 'home' ? 'active' : ''}`}>
            <div className="tech-pad">
              <h2>Welcome</h2>
              <p>Hi, I'm a video editor and creative professional who builds captivating visual stories. Browse through my tools and skills to see what I use to create engaging content.</p>
              <p>Navigate through the tabs above to explore my software proficiency and creative arsenal.</p>
            </div>
          </section>

          {/* Profile View */}
          <section className={`tech-view ${currentView === 'profile' ? 'active' : ''}`}>
            <div className="tech-pad">
              <h2>Profile</h2>
              <p>A creative professional specializing in video editing, motion graphics, and visual storytelling. With years of experience across Adobe Creative Suite, I bring ideas to life through compelling visual narratives.</p>
              <div className="tech-skill-bars">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="tech-skill-bar">
                    <span className="skill-label">{skill[0]}</span>
                    <i className="skill-track">
                      <b style={{ width: `${skill[1]}%` }} className="skill-fill"></b>
                    </i>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects View */}
          <section className={`tech-view ${currentView === 'projects' ? 'active' : ''}`}>
            <div className="tech-content-wrap">
              <div className="tech-grid">
                {currentProjects.map((project, index) => (
                  <button
                    key={index}
                    className={`tech-item ${selectedIndex === index ? 'selected' : ''}`}
                    onClick={() => handleProjectClick(index)}
                    aria-label={project[0]}
                  >
                    <div 
                      className="tech-ico"
                      style={{
                        '--c1': project[2],
                        '--c2': project[3]
                      }}
                    >
                      {typeof project[1] === 'string' && project[1].startsWith('devicon-') ? (
                        <i className={project[1]} style={{ fontSize: '48px' }}></i>
                      ) : typeof project[1] === 'string' && (project[1].startsWith('🎞️') || project[1].startsWith('🎨') || project[1].startsWith('⚡') || project[1].startsWith('🖼️') || project[1].startsWith('✏️') || project[1].startsWith('🎯') || project[1].startsWith('🎧') || project[1].startsWith('🎵') || project[1].startsWith('🔮') || project[1].startsWith('💫') || project[1].startsWith('📦') || project[1].startsWith('📝')) ? (
                        project[1]
                      ) : (
                        <img 
                          src={project[1]} 
                          alt={project[0]} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <span>{project[0]}</span>
                  </button>
                ))}
              </div>

              <div className={`tech-hero ${isFading ? 'fading' : ''}`} aria-hidden="true" style={{ display: (backgroundImage || backgroundVideo) ? 'none' : 'flex' }}>
                {typeof selectedProject[1] === 'string' && selectedProject[1].startsWith('devicon-') ? (
                  <i className={selectedProject[1]} style={{ fontSize: '180px' }}></i>
                ) : typeof selectedProject[1] === 'string' && (selectedProject[1].startsWith('🎞️') || selectedProject[1].startsWith('🎨') || selectedProject[1].startsWith('⚡') || selectedProject[1].startsWith('🖼️') || selectedProject[1].startsWith('✏️') || selectedProject[1].startsWith('🎯') || selectedProject[1].startsWith('🎧') || selectedProject[1].startsWith('🎵') || selectedProject[1].startsWith('🔮') || selectedProject[1].startsWith('💫') || selectedProject[1].startsWith('📦') || selectedProject[1].startsWith('📝')) ? (
                  <div className="tech-hero-emoji">{selectedProject[1]}</div>
                ) : (
                  <img 
                    src={selectedProject[1]} 
                    alt={selectedProject[0]}
                  />
                )}
              </div>

              <div className={`tech-detail ${isFading ? 'fading' : ''}`}>
                <h2>{selectedProject[0].toUpperCase()}</h2>
                <h3>PROFICIENCY {selectedProject[4].toUpperCase()}</h3>
                {selectedProject[5] && (
                  <div className="tech-tags">
                    {activeCategory}, {selectedProject[5]}
                  </div>
                )}
                {/* Tech Stack Icons with Tooltips */}
                {selectedProject[8] && Array.isArray(selectedProject[8]) && (
                  <div className="tech-stack-icons">
                    {selectedProject[8].map((iconClass, idx) => (
                      <i 
                        key={idx} 
                        className={iconClass}
                        title={selectedProject[9] ? selectedProject[9][idx] : ''}
                      ></i>
                    ))}
                  </div>
                )}
                <p>{selectedProject[6]}</p>
                <div className="tech-exp">Experience: {selectedProject[7]}</div>
                <div className="tech-btns">
                  {activeCategory === 'VIDEOS' ? (
                    // View Video button for VIDEOS category
                    <div className="tooltip-container">
                      <button className="tech-btn-icon video-btn" onClick={handleViewVideoClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        View Video
                      </button>
                      <div className="tooltip">WATCH DEMO</div>
                    </div>
                  ) : activeCategory === 'WEB' ? (
                    // GitHub and Live Preview buttons for WEB category only
                    <>
                      <div className="tooltip-container">
                        <button className="tech-btn-icon" onClick={() => handleGithubClick(selectedProject[0])}>
                          <i className="devicon-github-original"></i>
                        </button>
                        <div className="tooltip">VIEW REPO</div>
                      </div>
                      {selectedProject[0] !== 'Decision' && (
                        <div className="tooltip-container">
                          <button className="tech-btn-icon radio-btn" onClick={() => handleLivePreviewClick(selectedProject[0])}>
                            {/* Live preview radio icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radio preview-icon">
                              <path d="M16.247 7.761a6 6 0 0 1 0 8.478"/>
                              <path d="M19.075 4.933a10 10 0 0 1 0 14.134"/>
                              <path d="M4.925 19.067a10 10 0 0 1 0-14.134"/>
                              <path d="M7.753 16.239a6 6 0 0 1 0-8.478"/>
                              <circle cx="12" cy="12" r="2"/>
                            </svg>
                          </button>
                          <div className="tooltip">LIVE PREVIEW</div>
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </main>

        <FriendsList />
      </div>
    </div>
  );
};

export default TechPage;
