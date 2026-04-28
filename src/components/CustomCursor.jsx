import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.3 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
    };

    const onHoverEnter = () => {
      gsap.to(follower, { scale: 2.5, backgroundColor: 'rgba(181, 148, 95, 0.1)', borderColor: 'rgba(181, 148, 95, 0.3)', duration: 0.3 });
      gsap.to(cursor, { scale: 1.5, backgroundColor: '#B5945F', duration: 0.3 });
    };

    const onHoverLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(0,0,0,0.15)', duration: 0.3 });
      gsap.to(cursor, { scale: 1, backgroundColor: '#000', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const interactiveItems = document.querySelectorAll('button, a, .brand-card, .attraction-card, .sidebar__item');
    interactiveItems.forEach(item => {
      item.addEventListener('mouseenter', onHoverEnter);
      item.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
};

export default CustomCursor;
