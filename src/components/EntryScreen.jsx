import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const EntryScreen = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.entry__logo-mark', 
      { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out' }
    );

    tl.fromTo('.entry__title span',
      { y: 100, skewY: 10, opacity: 0 },
      { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'expo.out' },
      '-=1'
    );

    tl.fromTo('.entry__tagline, .entry__btn, .entry__location',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.5'
    );

    // Subtle floating animation for content
    gsap.to(contentRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    gsap.to('.entry__content', {
      scale: 1.1,
      opacity: 0,
      filter: 'blur(20px)',
      duration: 0.8,
      ease: 'power2.inOut'
    });
    setTimeout(onEnter, 800);
  };

  return (
    <div id="entry-screen" className={`entry entry--light ${isExiting ? 'is-exiting' : ''}`}>
      <div className="entry__bg-minimal"></div>
      <div className="entry__content" ref={contentRef}>
        <div className="entry__logo-mark-large">
          <img src="/1efe316670ecd3434ef1d2f0486583ea.svg" alt="American Dream" />
        </div>
        <p className="entry__tagline">The Future of Retail, Entertainment & Experience</p>
        <button className="entry__btn" id="enter-btn" onClick={handleEnter}>
          <span>ENTER THE VISION</span>
          <ArrowRight size={20} />
        </button>
      </div>
      <p className="entry__location">East Rutherford, NJ — The Meadowlands</p>
    </div>
  );
};

export default EntryScreen;
