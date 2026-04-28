import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Slide = ({ slide, isActive, onOpenModal, onGoTo }) => {
  const slideRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const items = slideRef.current.querySelectorAll('.eyebrow, .slide-title, .slide-body, .hero-badges, .stats-grid, .key-facts, .tag-list, .cta-row, .brand-grid, .attraction-grid, .dining-highlights, .event-types, .venue-grid, .contact-cards, .contact-footer, .slide__media-stats');
      
      gsap.set(items, { opacity: 0, y: 60, skewY: 7 });
      
      gsap.to(items, {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 0.5
      });

      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(err => console.error("Playback failed:", err));
      }

      // Parallax effect
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;
        
        const img = slideRef.current.querySelector('.slide__img');
        if (img) {
          gsap.to(img, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      // Animate counters
      const counters = slideRef.current.querySelectorAll('[data-count]');
      counters.forEach(el => {
        const target = parseFloat(el.dataset.count);
        const numEl = el.querySelector('.stat-block__num, .media-stat__num');
        if (!numEl) return;
        gsap.to({ val: 0 }, {
          val: target, duration: 2, ease: 'power2.out', delay: 0.5,
          onUpdate: function() { numEl.textContent = Math.round(this.targets()[0].val); }
        });
      });

      return () => window.removeEventListener('mousemove', onMouseMove);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const handleCTA = (link) => {
    if (typeof link === 'string') {
      window.open(link, '_blank');
    } else {
      onGoTo(link);
    }
  };

  const renderContent = () => {
    switch (slide.layout) {
      case 'split':
      case 'split-reverse':
        return (
          <div className={`slide slide--full ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              {slide.video ? (
                <video key={slide.video} ref={videoRef} className="slide__video" src={slide.video} loop muted playsInline autoPlay />
              ) : (
                <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              )}
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
              <h2 className="slide-title slide-title--huge">
                {slide.titleMain}<br/>
                <em>{slide.titleEm}</em>
              </h2>
              <p className="slide-body slide-body--wide">{slide.body}</p>
              
              {slide.facts && (
                <div className="key-facts-grid">
                  {slide.facts.map((f, i) => (
                    <div key={i} className="fact-card">
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {slide.cta && (
                <div className="cta-row">
                  <button className="btn btn--gold" onClick={() => handleCTA(slide.cta.link)}>
                    {slide.cta.text}
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className={`slide slide--stats ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')`, opacity: slide.imageOpacity || 0.3 }}></div>
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain} <em>{slide.titleEm}</em></h2>
              <div className="stats-grid">
                {slide.statsGrid.map((s, i) => (
                  <div key={i} className="stat-block" data-count={s.num}>
                    <span className="stat-block__num">0</span>
                    <span className="stat-block__suf">{s.suffix}</span>
                    <span className="stat-block__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'luxury':
        return (
          <div className={`slide slide--luxury ${isActive ? 'is-active' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <video 
                key={slide.video}
                ref={videoRef} 
                className="slide__video" 
                src={slide.video}
                loop 
                muted 
                playsInline 
                poster={slide.poster}
                autoPlay
              />
              <div className="slide__overlay slide__overlay--luxury"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
              <h2 className="slide-title slide-title--gold">
                {slide.titleMain}<br/>
                <em>{slide.titleEm}</em> {slide.titleSuffix}
              </h2>
              <p className="slide-body slide-body--gold">{slide.body}</p>
              <div className="brand-carousel">
                <div className="brand-carousel__track">
                  {[...slide.brands, ...slide.brands].map((b, i) => (
                    <div 
                      key={i} 
                      className="brand-card" 
                    >
                      <div className="brand-card__img" style={{ backgroundImage: `url('${b.image}')` }}></div>
                      <div className="brand-card__content">
                        <div className="brand-card__logo">{b.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'attractions':
        return (
          <div className={`slide slide--attractions ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain}<br/><em>{slide.titleEm}</em></h2>
              <p className="slide-body">{slide.body}</p>
              <div className="attraction-carousel">
                <div className="attraction-carousel__track">
                  {[...slide.attractions, ...slide.attractions].map((a, i) => (
                    <div 
                      key={i} 
                      className="attraction-card" 
                    >
                      <div className="attraction-card__img" style={{ backgroundImage: `url('${a.image}')` }}></div>
                      <div className="attraction-card__content">
                        <h3>{a.title}</h3>
                        <p>{a.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'venue':
        return (
          <div className={`slide slide--venue ${isActive ? 'is-active' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              {slide.video ? (
                <video key={slide.video} ref={videoRef} className="slide__video" src={slide.video} loop muted playsInline autoPlay />
              ) : (
                <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              )}
              <div className="slide__overlay slide__overlay--luxury"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
              <h2 className="slide-title slide-title--gold">{slide.titleMain}<br/><em>{slide.titleEm}</em></h2>
              <p className="slide-body slide-body--gold">{slide.body}</p>
              <div className="venue-grid">
                {slide.venueGrid.map((v, i) => (
                  <div key={i} className="venue-card">
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                ))}
              </div>
              {slide.cta && (
                <div className="cta-row" style={{ marginTop: '2rem' }}>
                  <button className="btn btn--gold" onClick={() => handleCTA(slide.cta.link)}>
                    {slide.cta.text}
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'map':
        return (
          <div className={`slide slide--map ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__parallax-wrapper">
                <div className="slide__img" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              </div>
              
              {slide.hotspots.map((h, i) => (
                <div 
                  key={i} 
                  className="hotspot" 
                  style={{ top: h.top, left: h.left }}
                  onClick={() => onOpenModal(h.id, 'attraction')}
                >
                  <div className="hotspot__dot"></div>
                  <div className="hotspot__pulse"></div>
                  <span className="hotspot__label">{h.label}</span>
                </div>
              ))}

              
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain} <em>{slide.titleEm}</em></h2>
              <p className="slide-body">{slide.body}</p>
              <div className="map-legend">
                {slide.legend.map((l, i) => (
                  <div key={i} className="legend-item">
                    <span className="legend-dot" style={{ background: l.color }}></span> {l.label}
                  </div>
                ))}
              </div>
              {slide.cta && (
                <div className="cta-row">
                  <button className="btn btn--primary" onClick={() => handleCTA(slide.cta.link)}>
                    {slide.cta.text}
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'sponsorship':
        return (
          <div className={`slide slide--sponsorship ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain} <em>{slide.titleEm}</em></h2>
              <p className="slide-body">{slide.body}</p>
              <div className="sponsor-tiers">
                {slide.sponsorTiers.map((t, i) => (
                  <div key={i} className={`sponsor-tier sponsor-tier--${t.type}`}>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
              {slide.cta && (
                <div className="cta-row">
                  <button className="btn btn--primary" onClick={() => handleCTA(slide.cta.link)}>
                    {slide.cta.text}
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'brands':
        return (
          <div className={`slide slide--brands ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img" style={{ backgroundImage: `url('${slide.image}')`, opacity: slide.imageOpacity || 0.4 }}></div>
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain} <em>{slide.titleEm}</em></h2>
              <p className="slide-body">{slide.body}</p>
              <div className="brand-wall-carousel">
                <div className="brand-wall-carousel__track">
                  {[...slide.brandWall, ...slide.brandWall].map((b, i) => (
                    <div key={i} className="brand-wall__item">{b}</div>
                  ))}
                </div>
              </div>
              {slide.cta && (
                <div className="cta-row">
                  <button className="btn btn--primary" onClick={() => handleCTA(slide.cta.link)}>
                    {slide.cta.text}
                    <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className={`slide slide--contact ${isActive ? 'is-active' : ''} ${slide.lightText ? 'slide--light-text' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img" style={{ backgroundImage: `url('${slide.image}')`, opacity: slide.imageOpacity || 0.3 }}></div>
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
              <h2 className="slide-title">{slide.titleMain}<br/><em>{slide.titleEm}</em></h2>
              <p className="slide-body">{slide.body}</p>
              <div className="contact-cards">
                {slide.contactCards.map((c, i) => (
                  <div key={i} className="contact-cta-card" onClick={() => handleCTA(c.link)} style={{ cursor: 'pointer' }}>
                    <strong>{c.title}</strong>
                    <p>{c.text}</p>
                    <span className="contact-cta-card__link">Visit Official Site</span>
                  </div>
                ))}
              </div>
              {slide.socials && (
                <div className="contact-socials">
                  {slide.socials.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="24" height="24">
                        <use href={`/icons.svg#${s.id}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
              {slide.footer && (
                <div className="contact-footer">
                  <p>{slide.footer.address}</p>
                  <p className="contact-footer__tagline">{slide.footer.tagline}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className={`slide slide--full ${isActive ? 'is-active' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')`, opacity: 0.3 }}></div>
              <div className="slide__overlay slide__overlay--dark"></div>
            </div>
            <div className="slide__content slide__content--center">
              <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
              <h2 className="slide-title slide-title--huge">{slide.titleMain} <em>{slide.titleEm}</em></h2>
              <div className="stats-grid">
                {slide.statsGrid.map((s, i) => (
                  <div key={i} className="stat-card" data-count={s.num}>
                    <div className="stat-card__num-row">
                      <span className="stat-card__num stat-block__num">0</span>
                      <span className="stat-card__suf">{s.suffix}</span>
                    </div>
                    <span className="stat-card__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default: // Hero/Intro
        return (
          <div className={`slide slide--hero ${isActive ? 'is-active' : ''}`} ref={slideRef}>
            <div className="slide__bg">
              {slide.image && <div className="slide__img slide__img--ken-burns" style={{ backgroundImage: `url('${slide.image}')` }}></div>}
              <div className="slide__overlay slide__overlay--hero"></div>
            </div>
            <div className="slide__content slide__content--hero-center">
              {slide.logo && (
                <div className="hero-logo-main">
                  <img src={slide.logo} alt="Logo" />
                </div>
              )}
              <div className="hero-info">
                <p className="eyebrow eyebrow--gold">{slide.eyebrow}</p>
                {slide.titleMain && (
                  <h1 className="hero-title">
                    {slide.titleMain} <br/>
                    <span className="hero-title--gold">{slide.titleGold}</span>
                  </h1>
                )}
                <p className="hero-body">{slide.body}</p>
                <div className="hero-badges">
                  {slide.badges.map((b, i) => (
                    <span key={i} className="hero-badge">{b}</span>
                  ))}
                </div>
                </div>
              </div>
            </div>
        );
    }
  };

  return renderContent();
};

export default Slide;
