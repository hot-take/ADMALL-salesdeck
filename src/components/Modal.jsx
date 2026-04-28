import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';

const Modal = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.modal-detail > *', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [isOpen, content]);

  if (!isOpen || !content) return null;

  return (
    <div id="deck-modal" className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}><X size={24} /></button>
        <div className="modal__content">
          <div className="modal-detail">
            <div className="modal-detail__media">
              <img src={content.image} alt={content.title} />
            </div>
            <div className="modal-detail__info">
              <span className="modal-detail__eyebrow">{content.eyebrow}</span>
              <h2 className="modal-detail__title">{content.title}</h2>
              <p className="modal-detail__body">{content.body}</p>
              <div className="modal-detail__stats">
                {content.stats.map((s, i) => (
                  <div key={i} className="modal-detail__stat">
                    <span className="modal-detail__stat-val">{s.val}</span>
                    <span className="modal-detail__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="cta-row" style={{ marginTop: '2.5rem' }}>
                <button className="btn btn--gold" onClick={onClose}>Return to Deck</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
