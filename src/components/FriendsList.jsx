import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import './FriendsList.css';

// Icon components
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    <path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/>
    <path d="M20 22v.01"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const UpworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M7 10h4"/>
    <path d="M13 10h4"/>
  </svg>
);

const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const GitLabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/>
  </svg>
);

const friendsData = [
  { 
    name: 'Email', 
    status: 'Online', 
    IconComponent: EmailIcon,
    link: 'mailto:your.email@example.com',
    type: 'email'
  },
  { 
    name: 'LinkedIn', 
    status: 'Online', 
    IconComponent: LinkedInIcon,
    link: 'https://www.linkedin.com/in/aaron-philip-pagente-a606283a5',
    type: 'external'
  },
  { 
    name: 'Upwork', 
    status: 'Online', 
    IconComponent: UpworkIcon,
    link: 'https://www.upwork.com/freelancers/~0138c07721813a6edd?mp_source=share',
    type: 'external'
  },
  { 
    name: 'Fiverr', 
    status: 'Online', 
    IconComponent: FiverrIcon,
    link: 'https://www.fiverr.com/s/1EEQXlK',
    type: 'external'
  },
  { 
    name: 'GitHub', 
    status: 'Online', 
    IconComponent: GitHubIcon,
    link: 'https://github.com/ronAa21',
    type: 'external'
  },
  { 
    name: 'GitLab', 
    status: 'Online', 
    IconComponent: GitLabIcon,
    link: 'https://gitlab.com/aaronpagente19',
    type: 'external'
  },
];

const FriendsList = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [activeTab, setActiveTab] = useState('online');
  const [buttonFading, setButtonFading] = useState(false);

  // Auto-fade burger button after 3 seconds of inactivity
  useEffect(() => {
    let fadeTimer;
    
    const resetFadeTimer = () => {
      setButtonFading(false);
      clearTimeout(fadeTimer);
      fadeTimer = setTimeout(() => {
        setButtonFading(true);
      }, 3000); // 3 seconds
    };

    // Only run on mobile
    if (window.innerWidth <= 768) {
      resetFadeTimer();
      
      // Reset timer on any interaction
      window.addEventListener('touchstart', resetFadeTimer);
      window.addEventListener('click', resetFadeTimer);
      window.addEventListener('scroll', resetFadeTimer);
    }

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener('touchstart', resetFadeTimer);
      window.removeEventListener('click', resetFadeTimer);
      window.removeEventListener('scroll', resetFadeTimer);
    };
  }, []);

  const handleFriendClick = (friend) => {
    if (friend.type === 'email') {
      // Close mobile menu first on mobile, then open modal
      if (window.innerWidth <= 768 && mobileMenuOpen) {
        closeMobileMenu();
        // Delay opening modal slightly to allow close animation
        setTimeout(() => {
          setShowContactModal(true);
        }, 100);
      } else {
        setShowContactModal(true);
      }
    } else {
      window.open(friend.link, '_blank');
    }
  };

  const handleChatButtonClick = () => {
    // Close mobile menu first on mobile, then open modal
    if (window.innerWidth <= 768 && mobileMenuOpen) {
      closeMobileMenu();
      // Delay opening modal slightly to allow close animation
      setTimeout(() => {
        setShowContactModal(true);
      }, 100);
    } else {
      setShowContactModal(true);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }, 300); // Match animation duration
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <>
      {/* Mobile Burger Button */}
      <button 
        className={`mobile-friends-toggle ${buttonFading ? 'fading' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Friends List"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Overlay for mobile */}
      {(mobileMenuOpen || mobileMenuClosing) && (
        <div 
          className="mobile-friends-overlay"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`friends-list ${mobileMenuOpen ? 'mobile-open' : ''} ${mobileMenuClosing ? 'mobile-closing' : ''}`}>
        <div className="friends-header">
          <h3 className="friends-title">SOCIAL</h3>
          <button 
            className="friends-collapse-btn"
            onClick={closeMobileMenu}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4h12M2 8h12M2 12h12"/>
            </svg>
          </button>
        </div>

        <div className="friends-tabs">
          <button 
            className={`friend-tab ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            <span className="tab-icon">👥</span>
            <span>GENERAL ({friendsData.length})</span>
          </button>
        </div>

        <div className="friends-content">
          {friendsData.map((friend, index) => (
            <div 
              key={index} 
              className="friend-item"
              onClick={() => handleFriendClick(friend)}
            >
              <div className="friend-avatar">
                <div className="friend-icon-svg">
                  <friend.IconComponent />
                </div>
                <div className={`friend-status-dot ${friend.status.toLowerCase()}`}></div>
              </div>
              
              <div className="friend-info">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-status">{friend.status}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="friends-actions">
          <button 
            className="chat-icon-btn"
            onClick={handleChatButtonClick}
            title="Contact Me"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
            </svg>
            <span className="notification-badge">1</span>
          </button>
        </div>
      </div>

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </>
  );
};

export default FriendsList;
