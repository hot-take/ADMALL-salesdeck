import React, { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { slides, modalData } from './data/slides';
import EntryScreen from './components/EntryScreen';
import DeckChrome from './components/DeckChrome';
import Slide from './components/Slide';
import Modal from './components/Modal';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [showEntry, setShowEntry] = useState(true);
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, content: null });
  
  const slidesRef = useRef([]);

  const updateSlide = useCallback((index, animate = true) => {
    if (isAnimating || index === current) return;
    
    setIsAnimating(animate);
    const direction = index > current ? 1 : -1;
    const prevSlide = slidesRef.current[current];
    const nextSlide = slidesRef.current[index];

    if (animate) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(slidesRef.current, { clearProps: "all" });
          setIsAnimating(false);
          setPrevIndex(index);
          setCurrent(index);
        }
      });

      // Cinematic Curtain Transition
      tl.to(prevSlide, { 
        opacity: 0, 
        y: direction * -100,
        filter: 'blur(20px)',
        duration: 1.2, 
        ease: 'power4.inOut' 
      }, 0);

      tl.fromTo(nextSlide, 
        { 
          y: direction * 100,
          clipPath: direction > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
          opacity: 0,
          scale: 1.1,
          filter: 'blur(20px)'
        },
        { 
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5, 
          ease: 'expo.inOut',
          clearProps: 'clipPath,filter,scale'
        }, 0.1);
    } else {
      setCurrent(index);
      setPrevIndex(index);
      setIsAnimating(false);
    }
    
    setModal({ isOpen: false, content: null });
  }, [current, isAnimating]);

  const next = () => {
    if (current < slides.length - 1) updateSlide(current + 1);
  };

  const prev = () => {
    if (current > 0) updateSlide(current - 1);
  };

  const goTo = (index) => {
    updateSlide(index);
  };

  const openModal = (id, type) => {
    const content = modalData[type]?.[id];
    if (content) {
      setModal({ isOpen: true, content });
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: null });
  };

  // Keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showEntry) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      else if (e.key === 'Escape') {
        setIsMenuOpen(false);
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEntry, current, isAnimating]);

  // Wheel events
  useEffect(() => {
    let wheelTimeout;
    const handleWheel = (e) => {
      if (showEntry || isAnimating) return;
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 30) next();
        else if (e.deltaY < -30) prev();
      }, 50);
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [showEntry, current, isAnimating]);

  return (
    <div className="app-container">
      <CustomCursor />
      {showEntry && <EntryScreen onEnter={() => setShowEntry(false)} />}
      
      {!showEntry && (
        <>
          <DeckChrome 
            current={current}
            total={slides.length}
            slides={slides}
            onPrev={prev}
            onNext={next}
            onGoTo={goTo}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <div id="slides-viewport" className="slides-viewport">
            <div className="slides-track">
              {slides.map((slide, i) => (
                <div 
                  key={i} 
                  ref={el => slidesRef.current[i] = el}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    opacity: i === current ? 1 : 0,
                    pointerEvents: i === current ? 'auto' : 'none',
                    zIndex: i === current ? 10 : 1
                  }}
                >
                  <Slide 
                    slide={slide} 
                    isActive={i === current} 
                    onOpenModal={openModal}
                    onGoTo={goTo}
                  />
                </div>
              ))}
            </div>
          </div>

          <Modal 
            isOpen={modal.isOpen} 
            content={modal.content} 
            onClose={closeModal} 
          />
        </>
      )}
    </div>
  );
};

export default App;
