import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="banner" className="hero-section">
      <div className="hero-bg-container">
        <Image
          src="/img/heroback.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            <span className="hero-outline">Grow Your Business With </span><span className="highlight">A.One SKills</span>
          </h1>
         
          <p>
            We help brands, businesses, and startups grow with creative solutions and digital marketing. From stunning websites to engaging social media and e-commerce, our expert team delivers results that help you stand out and connect with your audience. Let us turn your vision into reality.
          </p>
          <a href="#packages" className="btn  hero-btn-alt">
            View Packages
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="/img/hero.png"
            alt="Hero Banner"
            width={500}
            height={400}
            objectFit="contain"
            style={{ borderRadius: '24px', boxShadow: '0 4px 32px #1a237e33', maxWidth: '100%', height: 'auto', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>
      <style jsx>{`
        .hero-btn-alt {
          display: inline-block;
          font-weight: 700;
          font-size: 1.08rem;
          border-radius: 14px;
          box-shadow: 0 4px 16px #1a237e33, 0 1.5px 8px #e5393533;
          background: linear-gradient(90deg, #1a237e 0%, #e53935 100%);
          color: #fff !important;
          border: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          padding: 0.85rem 2.2rem;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          margin: 0.7rem 0 0.7rem 0;
          text-align: center;
        }
        .hero-btn-alt::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, #fff3 0%, #fff0 100%);
          opacity: 0.18;
          pointer-events: none;
        }
        .hero-btn-alt:hover, .hero-btn-alt:focus {
          background: linear-gradient(90deg, #e53935 0%, #1a237e 100%);
          color: #fff !important;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 24px #1a237e44, 0 2px 12px #e5393544;
        }
        @media (max-width: 600px) {
          #banner {
            padding: 0 !important;
            display: block !important;
          }
          .hero-content {
            flex-direction: column-reverse !important;
            gap: 0 !important;
            min-height: 60vh !important;
            justify-content: flex-start !important;
            align-items: stretch !important;
            padding-top: 0.1rem !important;
            padding-bottom: 0.3rem !important;
          }
          .hero-text, .hero-image {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .hero-text h1, .hero-text p {
            text-align: center !important;
          }
        }
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
          padding-top: 0;
          padding-bottom: 0;
          color: #fff;
          margin-top: 0;
        }
        .hero-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
        }
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.3);
          z-index: 1;
        }
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          position: relative;
          z-index: 2;
          min-height: 100vh;
        }
        .hero-text {
          flex: 1 1 350px;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .hero-text h1 {
          font-weight: 800;
          font-size: 2.7rem;
          margin-bottom: 1rem;
          letter-spacing: 1px;
          color: #fff;
          background: none;
          border-radius: 0;
          box-shadow: none;
          padding: 0;
          position: static;
          overflow: visible;
        }
        .hero-btn::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, #fff3 0%, #fff0 100%);
          opacity: 0.18;
          pointer-events: none;
            .hero-content {
              flex-direction: column-reverse;
          background: linear-gradient(90deg, #1a237e 0%, #e53935 100%);
          color: #fff !important;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 24px #1a237e44, 0 2px 12px #e5393544;
              justify-content: flex-start;
              padding-top: 0.1rem;
              padding-bottom: 0.5rem;
        justify-content: flex-start;
        padding-top: 0.3rem;
              margin: 0rem 0 0 0;
        .hero-text p {
          font-size: 1.15rem;
        margin: 0.2rem 0 0 0;
        padding: 0 0.5rem;
        align-items: center;
        justify-content: flex-start;
             1px -1px 0 #000,
            -1px  1px 0 #000,
              margin: 0rem auto 0 auto;
        max-width: 400px !important;
        height: auto !important;
        margin: 0.1rem auto 0 auto;
        padding: 0;
        border-radius: 18px !important;
        box-shadow: 0 2px 16px #1a237e33;
          background: linear-gradient(90deg, #e53935 0%, #1a237e 100%);
          color: #fff !important;
          border: none;
          transition: background 0.2s, color 0.2s;
              margin-bottom: 0rem;
        }
        .hero-btn:hover, .hero-btn:focus {
        margin-bottom: 0.2rem;
          color: #fff !important;
        }
        .hero-image {
          flex: 1 1 350px;
          min-width: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            gap: 2rem;
            min-height: 70vh;
          }
          .hero-text h1 {
            font-size: 2.1rem;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding: 0;
          }
          .hero-content {
            flex-direction: column-reverse;
            gap: 0;
            min-height: 60vh;
            justify-content: flex-start;
            padding-top: 0.1rem;
            padding-bottom: 0.3rem;
          }
          .hero-text {
            margin: 0;
            padding: 0 0.5rem;
            align-items: center;
            justify-content: flex-start;
          }
          .hero-text h1 {
            font-size: 1.5rem;
            margin: 0 0 0.5rem 0;
            text-align: center;
          }
          .hero-text p {
            margin: 0 0 0.3rem 0;
            text-align: center;
          }
          .hero-btn {
            margin: 0;
            padding: 0.8rem 1.5rem;
            font-size: 1.05rem;
            width: 100%;
            max-width: 320px;
            margin: 0.5rem auto 0 auto;
          }
          .hero-image img {
            width: 90vw !important;
            max-width: 400px !important;
            height: auto !important;
            margin: 0 auto 0 auto;
            padding: 0;
            border-radius: 18px !important;
            box-shadow: 0 2px 16px #1a237e33;
          }
          .hero-image {
            width: 100%;
            justify-content: center;
            align-items: flex-start;
            margin: 0;
            padding: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
