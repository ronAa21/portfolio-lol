import React, { useState, useEffect } from 'react';
import TopNavigation from '../components/TopNavigation';
import FriendsList from '../components/FriendsList';
import SunoIcon from '../components/SunoIcon';
import { softwareProjects } from '../data/projectsData'; 
import projectSImage from '../visuals/threads-pic.png';
import './HomePage.css';

const HomePage = ({ onPlayClick, onTechClick, onProfileClick }) => {
  const [activeView, setActiveView] = useState(null);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('all');
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [activeHomeCategory, setActiveHomeCategory] = useState('WEB');

  const HOME_CATEGORIES = ['WEB', 'VIDEOS', 'TECH STACK', 'TOOLS', 'EDITOR TOOLS'];

  // 3D Role Switcher Animation
  useEffect(() => {
    const roleBox = document.querySelector('[data-role-box="true"]');
    if (!roleBox) return;

    const HOLD = 2800;          // ms each role stays visible
    const FIRST_DELAY = 1800;   // ms before the first slide
    const LOOP = true;          // continuous loop
    
    let step = 0;

    function slide() {
      step++;
      roleBox.style.transform = 
        `translateZ(calc(var(--role-h) / -2)) rotateX(${-90 * step}deg)`;
      
      if (LOOP || step < 1) {
        setTimeout(slide, HOLD);
      }
    }

    const timer = setTimeout(slide, FIRST_DELAY);
    
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (type) => {
    setActiveView(type);
    setSidebarCollapsed(true); // Collapse sidebar when subcategory is clicked
  };

  const handleHomeClick = () => {
    setActiveView(null);
    setProjectsExpanded(false);
    setSidebarCollapsed(false); // Expand sidebar when going home
    setSelectedCategory('all');
    setSelectedProjectCategory('all');
    setProjectSearchQuery('');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleCategoryChange = (category) => {
    // If clicking the same category, reset to 'all'
    if (selectedCategory === category) {
      setSelectedCategory('all');
    } else {
      setSelectedCategory(category);
    }
  };

  // Filter videos based on selected category
  const shouldShowCategory = (category) => {
    if (selectedCategory !== 'all') {
      return selectedCategory === category.toLowerCase();
    }
    return true;
  };

  // Filter individual video cards based on search query
  const matchesSearch = (title) => {
    if (!searchQuery.trim()) return true;
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Filter projects based on category and search
  const filteredProjects = softwareProjects.filter(project => {
    const matchesCategory = selectedProjectCategory === 'all' || project.category === selectedProjectCategory;
    const matchesSearch = !projectSearchQuery.trim() || 
                         project.title.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(projectSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get counts for each category
  const getCategoryCount = (category) => {
    return softwareProjects.filter(p => p.category === category).length;
  };

  return (
    <div className="home-page">
      <TopNavigation onPlayClick={onPlayClick} onHomeClick={handleHomeClick} onTechClick={onTechClick} onProfileClick={onProfileClick} />
      
      <div className="home-content">
        {/* Left Sidebar Navigation */}
        <div className={`left-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          {sidebarCollapsed ? (
            // Collapsed state - only show arrow button
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              <span className="toggle-arrow">▶</span>
            </button>
          ) : (
            // Expanded state - show full menu
            <>
              <button 
                className={`sidebar-item ${projectsExpanded ? 'expanded' : ''}`}
                onClick={() => setProjectsExpanded(!projectsExpanded)}
              >
                <span className="sidebar-icon">
                  {projectsExpanded ? '▼' : '▶'}
                </span>
                <span className="sidebar-text">PROJECTS</span>
              </button>
              
              {projectsExpanded && (
                <div className="sidebar-submenu">
                  <button 
                    className={`sidebar-subitem ${activeView === 'videos' ? 'active' : ''}`}
                    onClick={() => handleProjectClick('videos')}
                  >
                    <span className="sidebar-icon">▶</span>
                    <span className="sidebar-text">VIDEOS</span>
                  </button>
                  <button 
                    className={`sidebar-subitem ${activeView === 'websites' ? 'active' : ''}`}
                    onClick={() => handleProjectClick('websites')}
                  >
                    <span className="sidebar-icon">⚡</span>
                    <span className="sidebar-text">WEBSITES</span>
                  </button>
                  <button 
                    className={`sidebar-subitem ${activeView === 'experience' ? 'active' : ''}`}
                    onClick={() => handleProjectClick('experience')}
                  >
                    <span className="sidebar-icon">◆</span>
                    <span className="sidebar-text">EXPERIENCE</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="hero-visual">
          {/* Left Text Section - Only visible when no subcategory selected */}
          {!activeView && (
            <div className="left-content centered">
              <div className="hero-text-wrapper">
                <p className="hero-greeting-small">Hello! I'm</p>
                <h1 className="hero-name">Aaron Pagente</h1>
                <div className="role" aria-live="polite">
                  <span className="role__sizer">Software Developer</span>
                  <div className="role__box" ref={(el) => { if (el) el.dataset.roleBox = 'true'; }}>
                    <div className="role__face">Software Developer</div>
                    <div className="role__face">Video Editor</div>
                    <div className="role__face">Software Developer</div>
                    <div className="role__face">Video Editor</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Right Section - Only show when a project subcategory is selected */}
          {activeView === 'videos' && (
            <div className="right-gold-line video-view fullwidth">
              {/* Left Filter Panel */}
              <div className="video-filter-panel">
                {/* Total Videos Counter */}
                <div className="total-counter">
                  <div className="counter-circle">
                    <div className="counter-number">9</div>
                    <div className="counter-label">TOTAL VIDEOS</div>
                    <div className="counter-sublabel">OWNED</div>
                  </div>
                </div>

                {/* Category Gems */}
                <div className="category-gems">
                  <div className="gem-item" onClick={() => handleCategoryChange('tiktok')}>
                    <div className={`gem-icon tiktok ${selectedCategory === 'tiktok' ? 'active' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                        <path d="M448,209.91a210.06,210.06,0,0,1,-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                      </svg>
                    </div>
                    <div className="gem-count">2</div>
                  </div>
                  <div className="gem-item" onClick={() => handleCategoryChange('suno')}>
                    <div className={`gem-icon suno ${selectedCategory === 'suno' ? 'active' : ''}`}>
                      <SunoIcon size={24} color="currentColor" />
                    </div>
                    <div className="gem-count">5</div>
                  </div>
                  <div className="gem-item" onClick={() => handleCategoryChange('ugc')}>
                    <div className={`gem-icon ugc ${selectedCategory === 'ugc' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <circle cx="12" cy="10" r="2" fill="currentColor"/>
                        <circle cx="12" cy="10" r="1" fill="none"/>
                      </svg>
                    </div>
                    <div className="gem-count">1</div>
                  </div>
                  <div className="gem-item" onClick={() => handleCategoryChange('faceless')}>
                    <div className={`gem-icon faceless ${selectedCategory === 'faceless' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                      </svg>
                    </div>
                    <div className="gem-count">1</div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="filter-search">
                  <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="filter-dropdowns">
                  <select 
                    className="filter-select"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="tiktok">TikTok</option>
                    <option value="suno">Suno</option>
                    <option value="ugc">UGC</option>
                    <option value="faceless">Faceless Channel</option>
                  </select>
                </div>
              </div>

              {/* Video Grid Container */}
              <div className="video-grid-container">
                <h2 className="video-section-title">Video Portfolio</h2>
                
                {/* TikTok Category */}
                {shouldShowCategory('tiktok') && (
                  <div className="video-category">
                    <h3 className="category-title">TikTok</h3>
                    <div className="video-grid">
                      {matchesSearch('TikTok Showreel') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/bn2sak"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">TikTok Showreel</p>
                          </div>
                        </div>
                      )}
                      {matchesSearch('TikTok Video 2') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/7bado8"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">TikTok Video 2</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Suno Category */}
                {shouldShowCategory('suno') && (
                  <div className="video-category">
                    <h3 className="category-title">Suno</h3>
                    <div className="video-grid">
                      {matchesSearch('Suno Video 1') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/gl57xt"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Suno Video 1</p>
                          </div>
                        </div>
                      )}
                      {matchesSearch('Suno Video 2') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/rrr9ra"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Suno Video 2</p>
                          </div>
                        </div>
                      )}
                      {matchesSearch('Suno Video 3') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/bot1d0"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Suno Video 3</p>
                          </div>
                        </div>
                      )}
                      {matchesSearch('Suno Video 4') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/dbtz8o"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Suno Video 4</p>
                          </div>
                        </div>
                      )}
                      {matchesSearch('Suno Video 5') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/3cex4n"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Suno Video 5</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* UGC Category */}
                {shouldShowCategory('ugc') && (
                  <div className="video-category">
                    <h3 className="category-title">UGC</h3>
                    <div className="video-grid">
                      {matchesSearch('UGC Sample') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/24u7hn"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">UGC Sample</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Faceless Channel Category */}
                {shouldShowCategory('faceless') && (
                  <div className="video-category">
                    <h3 className="category-title">Faceless Channel</h3>
                    <div className="video-grid">
                      {matchesSearch('Faceless Video 1') && (
                        <div className="video-card">
                          <div className="video-thumbnail">
                            <iframe
                              src="https://streamable.com/e/15sym7"
                              frameBorder="0"
                              width="100%"
                              height="100%"
                              allowFullScreen
                              allow="autoplay; fullscreen"
                            ></iframe>
                          </div>
                          <div className="video-info">
                            <p className="video-title">Faceless Video 1</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeView === 'websites' && (
            <div className="right-gold-line app-view fullwidth">
              {/* Left Filter Panel for Websites */}
              <div className="video-filter-panel">
                {/* Total Projects Counter */}
                <div className="total-counter">
                  <div className="counter-circle">
                    <div className="counter-number">{softwareProjects.length}</div>
                    <div className="counter-label">TOTAL PROJECTS</div>
                    <div className="counter-sublabel">OWNED</div>
                  </div>
                </div>

                {/* Category Gems */}
                <div className="category-gems">
                  <div className="gem-item" onClick={() => setSelectedProjectCategory(selectedProjectCategory === 'fullstack' ? 'all' : 'fullstack')}>
                    <div className={`gem-icon fullstack ${selectedProjectCategory === 'fullstack' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </div>
                    <div className="gem-count">{getCategoryCount('fullstack')}</div>
                  </div>
                  <div className="gem-item" onClick={() => setSelectedProjectCategory(selectedProjectCategory === 'frontend' ? 'all' : 'frontend')}>
                    <div className={`gem-icon frontend ${selectedProjectCategory === 'frontend' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                        <line x1="9" y1="15" x2="15" y2="15"/>
                      </svg>
                    </div>
                    <div className="gem-count">{getCategoryCount('frontend')}</div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="filter-search">
                  <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search projects" 
                    className="search-input"
                    value={projectSearchQuery}
                    onChange={(e) => setProjectSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="filter-dropdowns">
                  <select 
                    className="filter-select"
                    value={selectedProjectCategory}
                    onChange={(e) => setSelectedProjectCategory(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="frontend">Frontend</option>
                  </select>
                </div>
              </div>

              {/* Projects Grid Container */}
              <div className="projects-grid-container">
                <h2 className="video-section-title">Software Projects</h2>
                
                {/* Featured Project */}
                <div className="featured-project">
                  <div className="featured-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>FEATURED PROJECT</span>
                  </div>
                  <div className="featured-content">
                    <div className="featured-image">
                      <img src={projectSImage} alt="Threads" />
                    </div>
                    <div className="featured-info">
                      <h3 className="featured-title">Thread</h3>
                      
                      {/* Action Buttons */}
                      <div className="featured-actions">
                        <a 
                          href="https://project-s-nhsi.onrender.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-btn live-btn"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="2"/>
                            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
                          </svg>
                          <span>Live View</span>
                        </a>
                        <a 
                          href="https://github.com/ronAa21/Project-CashFlow" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-btn github-repo-btn"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>

                      <p className="featured-description">
                        A full-stack social media application inspired by Threads. Built with modern web technologies 
                        featuring real-time updates, user authentication, and responsive design.
                      </p>
                      <div className="featured-tech-stack">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">MySQL</span>
                        <span className="tech-tag">Express</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filtered Projects - Full Stack */}
                {(selectedProjectCategory === 'all' || selectedProjectCategory === 'fullstack') && 
                 filteredProjects.filter(p => p.category === 'fullstack').length > 0 && (
                  <div className="projects-section">
                    <h3 className="section-subtitle">Full-stack Projects</h3>
                    <div className="video-grid">
                      {filteredProjects
                        .filter(project => project.category === 'fullstack')
                        .map(project => (
                          <div key={project.id} className="video-card">
                            <div className="video-thumbnail">
                              <img 
                                src={project.thumbnail} 
                                alt={project.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                              />
                            </div>
                            <div className="video-info">
                              <p className="video-title">{project.title}</p>
                              <div className="project-actions">
                                {project.liveUrl && (
                                  <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    title="Live View"
                                  >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <circle cx="12" cy="12" r="2"/>
                                      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
                                    </svg>
                                  </a>
                                )}
                                <a 
                                  href={project.githubUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link"
                                  title="GitHub"
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                </a>
                              </div>
                              <div className="project-tech-stack">
                                {project.technologies.map((tech, index) => (
                                  <span key={index} className="mini-tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Frontend Projects Section */}
                {(selectedProjectCategory === 'all' || selectedProjectCategory === 'frontend') && 
                 filteredProjects.filter(p => p.category === 'frontend').length > 0 && (
                  <div className="projects-section">
                    <h3 className="section-subtitle">Frontend Projects</h3>
                    <div className="video-grid">
                      {filteredProjects
                        .filter(project => project.category === 'frontend')
                        .map(project => (
                          <div key={project.id} className="video-card">
                            <div className="video-thumbnail">
                              <img 
                                src={project.thumbnail} 
                                alt={project.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                              />
                            </div>
                            <div className="video-info">
                              <p className="video-title">{project.title}</p>
                              <div className="project-actions">
                                {project.liveUrl && (
                                  <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    title="Live View"
                                  >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <circle cx="12" cy="12" r="2"/>
                                      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
                                    </svg>
                                  </a>
                                )}
                                <a 
                                  href={project.githubUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link"
                                  title="GitHub"
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                </a>
                              </div>
                              <div className="project-tech-stack">
                                {project.technologies.map((tech, index) => (
                                  <span key={index} className="mini-tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeView === 'experience' && (
            <div className="right-gold-line experience-view fullwidth">
              <div className="experience-container">
                <div className="experience-content">
                  <h2 className="experience-title">Professional Experience</h2>
                  
                  <div className="experience-timeline">
                    <div className="experience-item">
                      <div className="experience-year">Oct 2025 - Jun 2026</div>
                      <div className="experience-details">
                        <h3 className="experience-role">Video Editor</h3>
                        <p className="experience-company">Suno – Intern</p>
                        <ul className="experience-list">
                          <li>Produced transitional content using CapCut to enhance storytelling</li>
                          <li>Utilized AI in producing quality content particularly in generating music and story</li>
                        </ul>
                      </div>
                    </div>

                    <div className="experience-item">
                      <div className="experience-year">Jun 2026 - Aug 2026</div>
                      <div className="experience-details">
                        <h3 className="experience-role">Receptionist</h3>
                        <p className="experience-company">Prince Jun Devt. Corp – Project-based</p>
                        <ul className="experience-list">
                          <li>Collaborated with coworkers and assist clients</li>
                          <li>Gain knowledge on strong communication and interpersonal skills</li>
                          <li>Practiced performing well under pressure</li>
                        </ul>
                      </div>
                    </div>

                    <div className="experience-item">
                      <div className="experience-year">Mar 2026</div>
                      <div className="experience-details">
                        <h3 className="experience-role">Animator / Stick-Figure / Stickman Animation (Trial)</h3>
                        <p className="experience-company">Freelancing</p>
                        <ul className="experience-list">
                          <li>Illustrated and animated stick-figure scenes to visualize historical events</li>
                          <li>Translated scripts into scene-by-scene visuals under client conditions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="experience-item">
                      <div className="experience-year">Sept 2023 - May 2026</div>
                      <div className="experience-details">
                        <h3 className="experience-role">Software Engineering</h3>
                        <p className="experience-company">Academic Projects</p>
                        <ul className="experience-list">
                          <li>Applied software lifecycle in software development</li>
                          <li>Contributed in developing project-based softwares</li>
                        </ul>
                      </div>
                    </div>

                    <div className="experience-item">
                      <div className="experience-year">Mar 2023 - Nov 2023</div>
                      <div className="experience-details">
                        <h3 className="experience-role">Chat Support</h3>
                        <p className="experience-company">Synagie - Intern</p>
                        <ul className="experience-list">
                          <li>Adjusted to a cyclical schedule, from night-shift to graveyard</li>
                          <li>Gain knowledge in handling multiple inquiries, providing appropriate solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <FriendsList />
      </div>
    </div>
  );
};

export default HomePage;
