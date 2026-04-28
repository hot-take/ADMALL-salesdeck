import React from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const DeckChrome = ({ 
  current, 
  total, 
  slides, 
  onPrev, 
  onNext, 
  onGoTo, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  return (
    <div id="deck-chrome" className="chrome">
      {/* Top Bar */}
      <header className="chrome__header">
        <button 
          className={`chrome__menu-btn ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
        <div className="chrome__logo">
          <img src="/1efe316670ecd3434ef1d2f0486583ea.svg" alt="American Dream Logo" />
        </div>
        <div className="chrome__slide-counter">
          <span id="slide-current">{current + 1}</span> / <span id="slide-total">{total}</span>
        </div>
      </header>

      {/* Navigation Arrows */}
      <button 
        className="chrome__arrow chrome__arrow--prev" 
        onClick={onPrev} 
        aria-label="Previous slide"
        disabled={current === 0}
      >
        <ArrowLeft size={24} />
      </button>
      <button 
        className="chrome__arrow chrome__arrow--next" 
        onClick={onNext} 
        aria-label="Next slide"
        disabled={current === total - 1}
      >
        <ArrowRight size={24} />
      </button>



      {/* Status Bar */}
      <div className="chrome__status">
        <span>American Dream Vision</span>
        <div className="status-line"></div>
        <span>{slides[current].title}</span>
      </div>

      {/* Progress Bar */}
      <div className="chrome__progress">
        <div 
          className="chrome__progress-fill" 
          style={{ width: `${((current + 1) / total) * 100}%` }}
        ></div>
      </div>

      {/* Sidebar Menu */}
      <aside className={`sidebar ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="sidebar__header">
          <span className="sidebar__title">Contents</span>
          <button 
            className="sidebar__close" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="sidebar__nav">
          {Object.entries(slides.reduce((acc, slide) => {
            if (!acc[slide.chapter]) acc[slide.chapter] = [];
            acc[slide.chapter].push(slide);
            return acc;
          }, {})).map(([chapter, chapterSlides], groupIdx) => (
            <div key={groupIdx} className="sidebar__group">
              <div className="sidebar__chapter-label">{chapter}</div>
              {chapterSlides.map((slide) => {
                const globalIndex = slides.indexOf(slide);
                return (
                  <div 
                    key={globalIndex}
                    className={`sidebar__item ${globalIndex === current ? 'active' : ''}`}
                    onClick={() => { onGoTo(globalIndex); setIsMenuOpen(false); }}
                  >
                    <span className="sidebar__item-num">{String(globalIndex + 1).padStart(2, '0')}</span>
                    {slide.title}
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
      <div 
        className={`sidebar__overlay ${isMenuOpen ? 'is-open' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </div>
  );
};

export default DeckChrome;
