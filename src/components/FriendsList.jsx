import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './FriendsList.css';

const friendsData = [
  { 
    name: 'Email', 
    status: 'Online', 
    icon: '✉️',
    link: 'mailto:your.email@example.com',
    type: 'email'
  },
  { 
    name: 'LinkedIn', 
    status: 'Online', 
    icon: '💼',
    link: 'https://linkedin.com/in/yourprofile',
    type: 'external'
  },
  { 
    name: 'YouTube', 
    status: 'Online', 
    icon: '📺',
    link: 'https://youtube.com/@yourchannel',
    type: 'external'
  },
  { 
    name: 'Discord', 
    status: 'Online', 
    icon: '💬',
    link: 'https://discord.gg/yourinvite',
    type: 'external'
  },
  { 
    name: 'GitHub', 
    status: 'Online', 
    icon: '⚙️',
    link: 'https://github.com/yourusername',
    type: 'external'
  },
];

const FriendsList = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState('online');

  const handleFriendClick = (friend) => {
    if (friend.type === 'email') {
      setShowContactModal(true);
    } else {
      window.open(friend.link, '_blank');
    }
  };

  return (
    <>
      <div className="friends-list">
        <div className="friends-header">
          <h3 className="friends-title">SOCIAL</h3>
          <button className="friends-collapse-btn">
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
                <span className="friend-icon">{friend.icon}</span>
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
            className="add-friend-btn"
            onClick={() => setShowContactModal(true)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12"/>
            </svg>
            <span>ADD FRIEND / CONTACT ME</span>
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
