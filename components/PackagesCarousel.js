
import React, { useState, useEffect } from 'react';

export default function PackagesCarousel({ country = 'Nepal', category = 'website', title = 'Website Packages' }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function fetchPackages() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/packageData.json');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const pkgs = data?.[country]?.[category] || [];
        setPackages(pkgs);
      } catch (err) {
        setPackages([]);
        setError('Could not load packages.');
      }
      setLoading(false);
    }
    fetchPackages();

    // Responsive visibleCount & mobile flag
    function handleResize() {
      if (window.innerWidth < 576) {
        setVisibleCount(1);
        setIsMobile(true);
      } else if (window.innerWidth < 900) {
        setVisibleCount(2);
        setIsMobile(false);
      } else {
        setVisibleCount(3);
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [country, category]);

  function handlePrev() {
    setCurrent((prev) => (prev - visibleCount < 0 ? Math.max(packages.length - visibleCount, 0) : prev - visibleCount));
  }
  function handleNext() {
    setCurrent((prev) => (prev + visibleCount >= packages.length ? 0 : prev + visibleCount));
  }

  // Only show visibleCount cards, no wrapping
  const visiblePackages = packages.slice(current, current + visibleCount);

  // Modern card UI for any package type
  function renderPackage(pkg, idx) {
    const isWeb = !!pkg.title;
    const name = pkg.title || pkg.name;
    const desc = pkg.desc;
    const price = pkg.price;
    const discount = pkg.discount;
    const delivery = pkg.delivery;
    const renew = pkg.renew;
    const features = pkg.features;
    const image = pkg.image;
    const duration = pkg.duration || pkg.support;
    const extra = pkg.extra;

    // WhatsApp contact link
    const whatsappNumber = '9779800000000'; // Replace with your WhatsApp number
    const whatsappMsg = encodeURIComponent(`Hello! I'm interested in the ${name} package (${category}, ${country}). Please provide more details.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
      <div
        key={name + idx}
        className="card shadow-lg border-0 h-100 package-card"
        style={{
          minWidth: isMobile ? '96vw' : 320,
          maxWidth: isMobile ? '99vw' : 400,
          flex: isMobile ? '1 1 99vw' : '1 1 400px',
          borderRadius: 24,
          background: 'linear-gradient(135deg,#f8fafc 60%,#e0e7ff 100%)',
          transition: 'transform 0.2s',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          margin: isMobile ? '0 auto 24px auto' : '0 auto',
          boxShadow: isMobile ? '0 6px 32px #6366f122' : '0 4px 16px #6366f122',
          minHeight: isMobile ? 340 : 280,
          boxSizing: 'border-box',
        }}
        tabIndex={0}
      >
        {/* Discount Ribbon */}
        {discount ? (
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'linear-gradient(90deg,#f59e42 60%,#f43f5e 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: isMobile ? 13 : 15,
            padding: isMobile ? '6px 16px 6px 10px' : '8px 24px 8px 16px',
            borderBottomLeftRadius: 20,
            zIndex: 2,
            boxShadow: '0 2px 8px #f59e42',
            letterSpacing: 1
          }}>
            <i className="fas fa-bolt mr-1" />
            {discount}% OFF
          </div>
        ) : null}
        <div className="card-body d-flex flex-column justify-content-between" style={{ padding: isMobile ? 22 : 32, minHeight: isMobile ? 280 : 220, maxHeight: isMobile ? 500 : 'none', overflowY: 'auto' }}>
          <div style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>
            <h4 className="card-title mb-2" style={{ fontWeight: 700, color: '#3b3b3b', fontSize: isMobile ? 18 : 22, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>{name}</h4>
            <p className="card-text mb-2" style={{ color: '#6366f1', fontWeight: 500, fontSize: isMobile ? 15 : 17, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>{desc}</p>
            <div className="mb-2">
              <span className="badge badge-pill badge-success" style={{ fontSize: isMobile ? 15 : 16, padding: isMobile ? '7px 12px' : '8px 16px', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>Price: {price}</span>
            </div>
            {delivery && <div className="mb-1" style={{ fontSize: isMobile ? 13 : 15, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}><i className="fas fa-truck mr-1" /> {delivery}</div>}
            {renew && <div className="mb-1" style={{ fontSize: isMobile ? 13 : 15, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}><i className="fas fa-redo mr-1" /> {renew}</div>}
            {duration && <div className="mb-1" style={{ fontSize: isMobile ? 13 : 15, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}><i className="fas fa-clock mr-1" /> {duration}</div>}
            {extra && <div className="mb-1" style={{ fontSize: isMobile ? 13 : 15, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}><i className="fas fa-gift mr-1" /> {extra}</div>}
            {features && Array.isArray(features) && (
              <ul className="mt-2" style={{ paddingLeft: 18, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>
                {features.map((f, i) => <li key={i} style={{ marginBottom: 4, fontSize: isMobile ? 13 : 15, wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}><i className="fas fa-check-circle text-success mr-1" />{f}</li>)}
              </ul>
            )}
            {/* Contact Us Button */}
            <div className="mt-3 mb-1 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-block"
                style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, borderRadius: 16, padding: isMobile ? '10px 18px' : '12px 24px', boxShadow: '0 2px 8px #22c55e22' }}
              >
                <i className="fab fa-whatsapp mr-2" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="package-carousel-container">
      <h2 className="mb-4 package-carousel-title">{title}</h2>
      {loading && <div className="text-center py-5"><div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div></div>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && packages.length > 0 && (
        <>
          <div className="package-carousel-row" style={{ position: 'relative' }}>
            {/* Overlayed navigation buttons for all screens */}
            <button
              onClick={handlePrev}
              className="btn btn-primary btn-lg rounded-circle shadow-sm package-carousel-btn package-carousel-btn-abs package-carousel-btn-prev"
              aria-label="Previous"
              disabled={current === 0}
              style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-primary btn-lg rounded-circle shadow-sm package-carousel-btn package-carousel-btn-abs package-carousel-btn-next"
              aria-label="Next"
              disabled={current + visibleCount >= packages.length}
              style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              <i className="fas fa-chevron-right" />
            </button>
            {/* Cards */}
            {!isMobile ? (
              <div className="package-carousel-cards">
                {visiblePackages.map(renderPackage)}
              </div>
            ) : (
              <div className="package-carousel-cards-mobile">
                {visiblePackages.map(renderPackage)}
              </div>
            )}
          </div>
          {/* Progress Dots */}
          <div className="d-flex justify-content-center mt-4 package-carousel-dots">
            {Array.from({ length: Math.ceil(packages.length / visibleCount) }).map((_, i) => (
              <span
                key={i}
                className={i === Math.floor(current / visibleCount) ? 'package-carousel-dot active' : 'package-carousel-dot'}
              />
            ))}
          </div>
        </>
      )}
      {!loading && !error && packages.length === 0 && <p className="text-center">No packages found.</p>}
      <style jsx>{`
        .package-carousel-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          position: relative;
        }
        .package-carousel-title {
          font-weight: 800;
          color: #3730a3;
          letter-spacing: 1px;
          font-size: 5vw;
          text-align: center;
        }
        @media (min-width: 600px) {
          .package-carousel-title {
            font-size: 2rem;
            text-align: left;
          }
        }
        .package-carousel-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0;
          position: relative;
          width: 100%;
        }
        .package-carousel-btn-col {
          display: none;
        }
        .package-carousel-btn-abs {
          position: absolute !important;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          box-shadow: 0 2px 8px #6366f122;
        }
        .package-carousel-btn-prev {
          left: 8px;
        }
        .package-carousel-btn-next {
          right: 8px;
        }
        @media (max-width: 600px) {
          .package-carousel-btn-abs {
            top: 44%;
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .package-carousel-btn-prev {
            left: 2px;
          }
          .package-carousel-btn-next {
            right: 2px;
          }
        }
        .package-carousel-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 76%;
        }
        @media (max-width: 900px) {
          .package-carousel-cards {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .package-carousel-cards {
            grid-template-columns: 1fr;
            width: 100%;
          }
        }
        .package-carousel-cards-mobile {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          gap: 0;
          width: 100%;
        }
        .package-carousel-btn {
          width: 48px;
          height: 48px;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.2s;
        }
        .package-carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e0e7ff;
          margin: 0 4px;
          display: inline-block;
          transition: background 0.2s;
        }
        .package-carousel-dot.active {
          background: #6366f1;
          box-shadow: 0 0 0 2px #6366f1;
        }
        @media (max-width: 600px) {
          .package-carousel-row {
            flex-direction: column;
          }
          .package-carousel-cards {
            flex-direction: column;
            gap: 0;
            width: 100%;
          }
          .package-carousel-title {
            font-size: 1.3rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
