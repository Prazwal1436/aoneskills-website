import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function PackagesCarousel() {
  const router = useRouter();
  const packages = [
    {
      title: '💼 Basic Website',
      price: 'NPR 25,000',
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
    },
    {
      title: '🚀 Standard Business Website',
      price: 'NPR 45,000',
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
    },
    {
      title: '🏆 Premium / Corporate Website',
      price: 'NPR 80,000',
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
    },
    {
      title: '🛒 E-Commerce Website',
      price: 'NPR 150,000',
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
    }
  ];

  // Show 3 cards at a time, start with first 3
  const [active, setActive] = useState(1); // Center the second card initially
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('left');
  const rowRef = useRef(null);

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

  const prev = () => {
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setActive((prevActive) => {
        // Loop so that prev from first card goes to last possible center
        if (prevActive <= 1) return lastCenter;
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
        // Loop so that next from last possible center goes to first
        if (prevActive >= lastCenter) return 1;
        return prevActive + 1;
      });
      setAnimating(false);
    }, 400);
  };

  // Card sizes and carousel viewport
  const cardWidth = 300;
  const cardMargin = 20;
  const visibleCards = 3;
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

  // ...existing code...

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 540, width: '100%' }}>
  <button className="btn btn-outline-primary carousel-arrow-btn" style={{ height: 60, width: 60, borderRadius: '50%', fontSize: 24, marginRight: 16 }} onClick={prev} aria-label="Previous Package">&#8592;</button>
      <div className="carousel-row-wrapper" style={{ overflow: 'hidden', width: carouselWidth, maxWidth: '100%' }}>
        <div
          className="carousel-row"
          style={{
            display: 'flex',
            transition: 'transform 0.4s',
            transform: `translateX(-${(cardWidth + cardMargin) * (active - 2)}px)`,
            gap: `${cardMargin}px`,
          }}
        >
          {/* Render package cards */}
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              style={{
                flex: `0 0 ${cardWidth}px`,
                maxWidth: cardWidth,
                zIndex: 1,
                position: 'static',
                transform: 'scale(1)',
                boxShadow: undefined,
                transition: 'all 0.4s',
                cursor: 'pointer',
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
              <div className={`card shadow`} style={{
                borderRadius: '18px',
                borderTop: '6px solid #6a82fb',
                minHeight: 480,
                height: 480,
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', textAlign: 'center',
                overflow: 'hidden',
              }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center card-body-scroll" style={{ height: 430, width: '100%', textAlign: 'center', overflowY: 'auto', padding: '0 8px' }}>
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontSize: '1.15rem', textAlign: 'center' }}>{pkg.title}</h4>
                    <h3 style={{ color: '#e53935', fontWeight: 700, textAlign: 'center' }}>{pkg.price}</h3>
                    <p style={{ fontWeight: 500, fontSize: '0.98rem', textAlign: 'center' }}>
                      {pkg.desc.length > 80 ? pkg.desc.slice(0, 77) + '...' : pkg.desc}
                    </p>
                    <ul className="list-unstyled" style={{ fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'center', display: 'inline-block' }}>
                      {pkg.features.slice(0,5).map((f, j) => <li key={j} style={{ textAlign: 'center' }}>{f}</li>)}
                    </ul>
                    <p style={{ fontWeight: 600, color: '#14208a', fontSize: '0.98rem', textAlign: 'center' }}>{pkg.delivery}</p>
                  </div>
                  <a
                    href="#"
                    style={{ color: '#6a82fb', fontWeight: 700, textDecoration: 'underline', marginTop: 8, display: 'inline-block', fontSize: '1rem', textAlign: 'center' }}
                    onClick={e => {
                      e.preventDefault();
                      router.push(`/packages/${idx}`);
                    }}
                  >Learn More</a>
                </div>
              </div>
            </div>
          ))}
          {/* Add empty placeholder cards if needed to always show 3 cards */}
          {packages.length % visibleCards !== 0 && Array(visibleCards - (packages.length % visibleCards)).fill(0).map((_, i) => (
            <div
              key={`empty-${i}`}
              style={{
                flex: `0 0 ${cardWidth}px`,
                maxWidth: cardWidth,
                zIndex: 0,
                position: 'static',
                boxShadow: 'none',
                background: 'transparent',
                transition: 'all 0.4s',
              }}
            />
          ))}
        </div>
      </div>
  <button className="btn btn-outline-primary carousel-arrow-btn" style={{ height: 60, width: 60, borderRadius: '50%', fontSize: 24, marginLeft: 16 }} onClick={next} aria-label="Next Package">&#8594;</button>
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
        }
        @media (max-width: 900px) {
          .carousel-row-wrapper {
            width: 700px;
          }
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
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
