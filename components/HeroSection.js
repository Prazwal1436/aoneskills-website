import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="banner" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Grow Your Business With <span className="highlight">Digital Extra</span>
          </h1>
          <p>
            We help brands, businesses, and startups achieve their digital goals with creative solutions and growth marketing.
          </p>
          <a href="#packages" className="btn btn-warning btn-lg hero-btn">
            View Packages
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="/img/hero.png"
            alt="Hero Banner"
            width={500}
            height={400}
            style={{ borderRadius: '24px', boxShadow: '0 4px 32px #1a237e33', maxWidth: '100%' }}
          />
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(120deg, #e53935 0%, #1a237e 100%);
          position: relative;
          padding: 7rem 0 4rem 0;
          color: #fff;
        }
        .hero-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }
        .hero-text {
          flex: 1 1 350px;
          min-width: 260px;
        }
        .hero-text h1 {
          font-weight: 800;
          font-size: 2.7rem;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
        }
        .hero-text .highlight {
          color: #e53935;
          background: #fff;
          border-radius: 8px;
          padding: 0.1em 0.4em;
          box-shadow: 0 2px 8px #1a237e22;
        }
        .hero-text p {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .hero-btn {
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px #1a237e22;
          background: linear-gradient(90deg, #e53935 0%, #1a237e 100%);
          color: #fff !important;
          border: none;
          transition: background 0.2s, color 0.2s;
        }
        .hero-btn:hover, .hero-btn:focus {
          background: linear-gradient(90deg, #1a237e 0%, #e53935 100%);
          color: #fff !important;
        }
        .hero-image {
          flex: 1 1 350px;
          min-width: 260px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            gap: 2.5rem;
          }
          .hero-text h1 {
            font-size: 2.1rem;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding: 4rem 0 2rem 0;
          }
          .hero-text h1 {
            font-size: 1.5rem;
          }
          .hero-image img {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
