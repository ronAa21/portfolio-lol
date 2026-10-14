import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">SEND INVITATION</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6L18 18M6 18L18 6"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="modal-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                CANCEL
              </button>
              <button type="submit" className="btn-submit">
                SEND INVITATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
