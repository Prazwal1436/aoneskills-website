import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function PackagesCarousel() {
  // Touch gesture state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  // Show 1 card at a time, start with first (0-based index)
  const [active, setActive] = useState(0); // 0-based index for active card
  const [direction, setDirection] = useState('left'); // Animation direction state
  const [animating, setAnimating] = useState(false); // Animation in progress

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchEndX.current - touchStartX.current;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          prev(); // Swipe right
        } else {
          next(); // Swipe left
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  const router = useRouter();
  const packages = [
    {
      title: '💼 Basic Website',
      price: 'NPR 25,000',
      discount: 10,
      desc: 'Perfect for: Personal brands, portfolios, small businesses',
      features: [
        '5–6 Pages (Home, About, Services, Contact, etc.)',
        'Responsive & Mobile-Friendly Design',
        'Contact Form Integration',
        'Social Media Links',
        'Basic SEO Setup',
        '1 Month Free Support',
      ],
      delivery: '📅 Delivery: 7–10 Days',
      renew: 'Renews at NPR 5,000/year',
    },
    {
      title: '🚀 Standard Business Website',
      price: 'NPR 45,000',
      discount: 20,
      desc: 'Perfect for: Companies, organizations, service providers',
      features: [
        'Up to 10 Pages with Semi-Custom Design',
        'Blog or News Section',
        'Google Map Integration',
        'Payment Gateway (Basic E-commerce Support)',
        'WhatsApp Chat Integration',
        'Basic On-Page SEO',
        '2 Months Free Support',
      ],
      delivery: '📅 Delivery: 2–3 Weeks',
      renew: 'Renews at NPR 8,000/year',
    },
    {
      title: '🏆 Premium / Corporate Website',
      price: 'NPR 80,000',
      discount: 25,
      desc: 'Perfect for: Agencies, growing businesses, large companies',
      features: [
        'Up to 25 Pages – Fully Custom Design',
        'Advanced Animations & Effects',
        'User Login / Dashboard (Optional)',
        'Speed & Security Optimization',
        'SEO Optimization & Google Analytics',
        'Admin Panel / CMS Access',
        '3 Months Priority Support',
      ],
      delivery: '📅 Delivery: 3–5 Weeks',
      renew: 'Renews at NPR 15,000/year',
    },
    {
      title: '🛒 E-Commerce Website',
      price: 'NPR 150,000',
      discount: 15,
      desc: 'Perfect for: Online shops, product-based businesses',
      features: [
        'Unlimited Product Listings',
        'Shopping Cart & Secure Checkout',
        'Payment Gateway Integration (eSewa, Khalti, etc.)',
        'Product Search, Filters, and Reviews',
        'Coupon & Discount System',
        'Inventory & Order Management',
        'Full SEO + Analytics + Pixel Integration',
        '6 Months Priority Support',
      ],
      delivery: '📅 Delivery: 4–6 Weeks',
      renew: 'Renews at NPR 25,000/year',
    }
  ];

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('left');
      setAnimating(true);
      setTimeout(() => {
        setActive((prevActive) => (prevActive + 1) % packages.length);
        setAnimating(false);
      }, 400);
    }, 2000);
    return () => clearInterval(timer);
  }, [packages.length]);

  // Endless carousel logic
  const prev = () => {
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setActive((prevActive) => {
        // Loop endlessly: if at first, go to last
        if (prevActive <= 0) return packages.length - 1;
        return prevActive - 1;
      });
      setAnimating(false);
    }, 400);
  };
  const next = () => {
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setActive((prevActive) => {
        // Loop endlessly: if at last, go to first
        if (prevActive >= packages.length - 1) return 0;
        return prevActive + 1;
      });
      setAnimating(false);
    }, 400);
  };

  // Card sizes and carousel viewport
  const cardWidth = 300;
  const cardMargin = 20;
  const visibleCards = 1; // Show only one card at a time
  const totalCards = packages.length;
  const carouselWidth = (cardWidth + cardMargin) * visibleCards;

  // Calculate lastCenter after visibleCards is defined
  const lastCenter = Math.max(1, packages.length - visibleCards + 1);

  // Calculate translateX to center the active card (middle of 3)
  const getTranslateX = () => {
    // Center the active card (middle of 3)
    const offset = (cardWidth + cardMargin) * (active - 1) - ((carouselWidth - cardWidth) / 2);
    return -offset;
  };

  // Helper to calculate discounted price
  const getDiscountedPrice = (priceStr, discount) => {
    // Extract number from price string (e.g., 'NPR 25,000')
    const num = parseInt(priceStr.replace(/[^\d]/g, ''));
    if (isNaN(num)) return priceStr;
    const discounted = Math.round(num * (1 - (discount / 100)));
    return `NPR ${discounted.toLocaleString()}`;
  };

  // Responsive: show 3 cards on desktop, 1 on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  const cardsToShow = isMobile ? 1 : 3;
  const [startIndex, setStartIndex] = useState(0); // For desktop carousel
  // Update navigation logic
  const handlePrev = () => {
    if (isMobile) {
      prev();
    } else {
      setStartIndex((prev) => (prev - 1 + packages.length) % packages.length);
    }
  };
  const handleNext = () => {
    if (isMobile) {
      next();
    } else {
      setStartIndex((prev) => (prev + 1) % packages.length);
    }
  };

  const wrapperMaxWidth = isMobile ? '100%' : `${cardsToShow * (cardWidth + cardMargin) - cardMargin}px`;

  return (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 540, width: '100%' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Overlayed carousel arrow buttons on two sides */}
      <button className="carousel-arrow-btn carousel-arrow-left" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 2, height: 60, width: 60, borderRadius: '50%', fontSize: 24, marginLeft: 8, background: '#fff', boxShadow: '0 2px 12px #6a82fb22', border: '1px solid #6a82fb' }} onClick={handlePrev} aria-label="Previous Package">&#8592;</button>
      <button className="carousel-arrow-btn carousel-arrow-right" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 2, height: 60, width: 60, borderRadius: '50%', fontSize: 24, marginRight: 8, background: '#fff', boxShadow: '0 2px 12px #6a82fb22', border: '1px solid #6a82fb' }} onClick={handleNext} aria-label="Next Package">&#8594;</button>
      <div className="carousel-row-wrapper" style={{ overflow: 'hidden', width: '100%', maxWidth: wrapperMaxWidth, margin: '0 auto' }}>
        <div
          className="carousel-row"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            transition: 'transform 0.4s',
            transform: 'translateX(0)',
            gap: `${cardMargin}px`,
            width: '100%',
          }}
        >
          {/* Render package cards: 1 on mobile, 3 on desktop */}
          {isMobile
            ? packages[active] && (
                <div
                  key={active}
                  style={{
                    flex: `0 0 100%`,
                    maxWidth: '100%',
                    zIndex: 1,
                    position: 'static',
                    transform: 'scale(1)',
                    boxShadow: '0 8px 32px #6a82fb22',
                    transition: 'all 0.4s',
                    cursor: 'pointer',
                    background: '#fff',
                    borderRadius: '22px',
                    border: '2px solid #6a82fb',
                    overflow: 'hidden',
                    margin: '0 auto',
                  }}
                  onClick={() => router.push(`/packages/${active}`)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${packages[active].title}`}
                  onKeyPress={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      router.push(`/packages/${active}`);
                    }
                  }}
                >
                  {/* Discount Offer Banner */}
                  <div style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.08rem',
                    textAlign: 'center',
                    padding: '0.6rem 0',
                    letterSpacing: '1px',
                    borderBottom: '2px solid #e53935',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 2px 12px #fc5c7d22',
                  }}>
                    <span style={{ fontSize: '1.2rem', marginRight: 8 }}>🔥</span>
                    {packages[active].discount}% OFF! Limited Time Offer
                  </div>
                  <div className={`card shadow`} style={{
                    borderRadius: '0 0 18px 18px',
                    borderTop: 'none',
                    minHeight: 340,
                    height: 'auto',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', textAlign: 'center',
                    overflow: 'hidden',
                    background: '#fff',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '1.2rem 1rem',
                  }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center card-body-scroll" style={{ width: '100%', textAlign: 'center', overflowY: 'auto', padding: 0 }}>
                      <div style={{ width: '100%', textAlign: 'center' }}>
                        <h4 className="card-title" style={{ fontSize: '1.15rem', textAlign: 'center', fontWeight: 800, color: '#14208a', marginBottom: '0.7rem', wordBreak: 'break-word' }}>{packages[active].title}</h4>
                        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                          <span style={{ textDecoration: 'line-through', color: '#888', fontWeight: 500, fontSize: '1.08rem', marginBottom: 2 }}>{packages[active].price}</span>
                          <span style={{ color: '#388e3c', fontWeight: 900, fontSize: '1.35rem', background: '#e8f5e9', borderRadius: '8px', padding: '0.2em 1em', boxShadow: '0 2px 8px #388e3c22', marginBottom: 2, width: 'fit-content', maxWidth: '100%' }}>
                            {getDiscountedPrice(packages[active].price, packages[active].discount)}
                          </span>
                          <span style={{ color: '#e53935', fontWeight: 700, fontSize: '1.08rem', marginTop: 2 }}>
                            ({packages[active].discount}% OFF)
                          </span>
                          <span style={{ color: '#14208a', fontWeight: 600, fontSize: '1.01rem', marginTop: 2, display: 'block' }}>
                            {packages[active].renew}
                          </span>
                        </div>
                        <p style={{ fontWeight: 500, fontSize: '1.05rem', textAlign: 'center', marginBottom: '0.7rem', color: '#444', wordBreak: 'break-word' }}>
                          {packages[active].desc.length > 80 ? packages[active].desc.slice(0, 77) + '...' : packages[active].desc}
                        </p>
                        <ul className="list-unstyled" style={{ fontSize: '0.98rem', marginBottom: '1rem', textAlign: 'center', display: 'inline-block', color: '#14208a', fontWeight: 500, padding: 0, width: '100%' }}>
                          {packages[active].features.slice(0,5).map((f, j) => <li key={j} style={{ textAlign: 'center', marginBottom: 2, wordBreak: 'break-word' }}>{f}</li>)}
                        </ul>
                        <p style={{ fontWeight: 600, color: '#14208a', fontSize: '1.02rem', textAlign: 'center', marginBottom: '0.7rem', wordBreak: 'break-word' }}>{packages[active].delivery}</p>
                      </div>
                      <a
                        href="#"
                        style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', marginTop: 8, display: 'inline-block', fontSize: '1.08rem', textAlign: 'center', background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)', borderRadius: '2rem', padding: '0.85rem 2.2rem', boxShadow: '0 2px 12px #6a82fb22', border: 'none', letterSpacing: '0.5px', transition: 'background 0.2s, transform 0.2s', width: '100%', maxWidth: 320 }}
                        onClick={e => {
                          e.preventDefault();
                          router.push(`/packages/${active}`);
                        }}
                      >Learn More</a>
                    </div>
                  </div>
                </div>
              )
            : Array(cardsToShow).fill(0).map((_, i) => {
                const idx = (startIndex + i) % packages.length;
                const pkg = packages[idx];
                return (
                  <div
                    key={idx}
                    style={{
                      flex: `0 0 ${cardWidth}px`,
                      maxWidth: cardWidth,
                      zIndex: 1,
                      position: 'static',
                      transform: 'scale(1)',
                      boxShadow: '0 8px 32px #6a82fb22',
                      transition: 'all 0.4s',
                      cursor: 'pointer',
                      background: '#fff',
                      borderRadius: '22px',
                      border: '2px solid #6a82fb',
                      overflow: 'hidden',
                      margin: '0 auto',
                    }}
                    onClick={() => router.push(`/packages/${idx}`)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${pkg.title}`}
                    onKeyPress={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        router.push(`/packages/${idx}`);
                      }
                    }}
                  >
                    {/* Discount Offer Banner */}
                    <div style={{
                      width: '100%',
                      background: 'linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '1.08rem',
                      textAlign: 'center',
                      padding: '0.6rem 0',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #e53935',
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: '0 2px 12px #fc5c7d22',
                    }}>
                      <span style={{ fontSize: '1.2rem', marginRight: 8 }}>🔥</span>
                      {pkg.discount}% OFF! Limited Time Offer
                    </div>
                    <div className={`card shadow`} style={{
                      borderRadius: '0 0 18px 18px',
                      borderTop: 'none',
                      minHeight: 340,
                      height: 'auto',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', textAlign: 'center',
                      overflow: 'hidden',
                      background: '#fff',
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '1.2rem 1rem',
                    }}>
                      <div className="card-body d-flex flex-column justify-content-center align-items-center card-body-scroll" style={{ width: '100%', textAlign: 'center', overflowY: 'auto', padding: 0 }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                          <h4 className="card-title" style={{ fontSize: '1.15rem', textAlign: 'center', fontWeight: 800, color: '#14208a', marginBottom: '0.7rem', wordBreak: 'break-word' }}>{pkg.title}</h4>
                          <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <span style={{ textDecoration: 'line-through', color: '#888', fontWeight: 500, fontSize: '1.08rem', marginBottom: 2 }}>{pkg.price}</span>
                            <span style={{ color: '#388e3c', fontWeight: 900, fontSize: '1.35rem', background: '#e8f5e9', borderRadius: '8px', padding: '0.2em 1em', boxShadow: '0 2px 8px #388e3c22', marginBottom: 2, width: 'fit-content', maxWidth: '100%' }}>
                              {getDiscountedPrice(pkg.price, pkg.discount)}
                            </span>
                            <span style={{ color: '#e53935', fontWeight: 700, fontSize: '1.08rem', marginTop: 2 }}>
                              ({pkg.discount}% OFF)
                            </span>
                            <span style={{ color: '#14208a', fontWeight: 600, fontSize: '1.01rem', marginTop: 2, display: 'block' }}>
                              {pkg.renew}
                            </span>
                          </div>
                          <p style={{ fontWeight: 500, fontSize: '1.05rem', textAlign: 'center', marginBottom: '0.7rem', color: '#444', wordBreak: 'break-word' }}>
                            {pkg.desc.length > 80 ? pkg.desc.slice(0, 77) + '...' : pkg.desc}
                          </p>
                          <ul className="list-unstyled" style={{ fontSize: '0.98rem', marginBottom: '1rem', textAlign: 'center', display: 'inline-block', color: '#14208a', fontWeight: 500, padding: 0, width: '100%' }}>
                            {pkg.features.slice(0,5).map((f, j) => <li key={j} style={{ textAlign: 'center', marginBottom: 2, wordBreak: 'break-word' }}>{f}</li>)}
                          </ul>
                          <p style={{ fontWeight: 600, color: '#14208a', fontSize: '1.02rem', textAlign: 'center', marginBottom: '0.7rem', wordBreak: 'break-word' }}>{pkg.delivery}</p>
                        </div>
                        <a
                          href="#"
                          style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', marginTop: 8, display: 'inline-block', fontSize: '1.08rem', textAlign: 'center', background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)', borderRadius: '2rem', padding: '0.85rem 2.2rem', boxShadow: '0 2px 12px #6a82fb22', border: 'none', letterSpacing: '0.5px', transition: 'background 0.2s, transform 0.2s', width: '100%', maxWidth: 320 }}
                          onClick={e => {
                            e.preventDefault();
                            router.push(`/packages/${idx}`);
                          }}
                        >Learn More</a>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <style jsx>{`
        .carousel-row {
          will-change: transform;
        }
        .carousel-row-wrapper {
          width: ${carouselWidth}px;
          max-width: 100%;
        }
        .carousel-arrow-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .carousel-arrow-btn:active {
          background: #e3eafc;
        }
        @media (max-width: 600px) {
          .carousel-row-wrapper {
            width: 98vw;
            min-width: 0;
          }
          .card {
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
          }
          .card-body-scroll {
            height: auto !important;
            max-height: none !important;
            overflow-y: visible !important;
            padding: 0 4px !important;
          }
          .carousel-arrow-btn {
            height: 48px !important;
            width: 48px !important;
            font-size: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}
