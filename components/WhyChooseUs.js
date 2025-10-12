import React from 'react';

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="whyus-section-bg">
      <div className="container whyus-container">
        <h2 className="section-title text-center mb-4 whyus-title">Why Choose Us?</h2>
        <div className="whyus-cards">
          <div className="whyus-card whyus-card-animate">
            <span className="whyus-icon-circle"><i className="fas fa-check-circle" /></span>
            <div className="whyus-card-text">Proven expertise in IT and software solutions for <span className="whyus-highlight">Purbanchal & Jhapa</span></div>
          </div>
          <div className="whyus-card whyus-card-animate">
            <span className="whyus-icon-circle"><i className="fas fa-users" /></span>
            <div className="whyus-card-text">Local team with deep understanding of <span className="whyus-highlight">Eastern Nepal</span> business needs</div>
          </div>
          <div className="whyus-card whyus-card-animate">
            <span className="whyus-icon-circle"><i className="fas fa-layer-group" /></span>
            <div className="whyus-card-text">End-to-end services: <span className="whyus-highlight">web, branding, SEO, digital marketing</span>, and more</div>
          </div>
          <div className="whyus-card whyus-card-animate">
            <span className="whyus-icon-circle"><i className="fas fa-balance-scale" /></span>
            <div className="whyus-card-text">Transparent pricing and <span className="whyus-highlight">dedicated customer support</span></div>
          </div>
          <div className="whyus-card whyus-card-animate">
            <span className="whyus-icon-circle"><i className="fas fa-award" /></span>
            <div className="whyus-card-text">Trusted by leading businesses and organizations in <span className="whyus-highlight">Province 1</span></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .whyus-section-bg {
          background: linear-gradient(120deg, #e3eafc 60%, #f8faff 100%);
          padding: 4rem 0 3rem 0;
        }
        .whyus-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .whyus-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #14208a;
          letter-spacing: 1px;
        }
        .whyus-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 32px 0;
          justify-content: center;
          margin-top: 2.2rem;
        }
        .whyus-card {
          background: linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%);
          border-radius: 1.5rem;
          box-shadow: 0 2px 16px #6a82fb11;
          display: flex;
          align-items: center;
          min-width: 320px;
          max-width: 420px;
          padding: 1.3rem 2rem;
          margin: 0 1.2rem 1.2rem 1.2rem;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          font-size: 1.13rem;
          font-weight: 500;
          color: #3730a3;
          position: relative;
        }
        .whyus-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 8px 32px #6a82fb22;
          background: linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%);
        }
        .whyus-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 54px;
          height: 54px;
          font-size: 1.7rem;
          margin-right: 18px;
          background: linear-gradient(135deg,#22c55e 60%,#e0e7ff 100%);
          color: #fff;
          box-shadow: 0 2px 12px #22c55e22;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .whyus-card:hover .whyus-icon-circle {
          box-shadow: 0 8px 32px #22c55e22;
          background: linear-gradient(135deg,#6366f1 60%,#e0e7ff 100%);
        }
        .whyus-card-text {
          flex: 1;
        }
        .whyus-highlight {
          color: #6366f1;
          font-weight: 700;
        }
        .whyus-card-animate {
          animation: fadeInUp 0.8s ease both;
          will-change: transform, opacity;
        }
        .whyus-card-animate:nth-child(1) { animation-delay: 0.05s; }
        .whyus-card-animate:nth-child(2) { animation-delay: 0.15s; }
        .whyus-card-animate:nth-child(3) { animation-delay: 0.25s; }
        .whyus-card-animate:nth-child(4) { animation-delay: 0.35s; }
        .whyus-card-animate:nth-child(5) { animation-delay: 0.45s; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 991px) {
          .whyus-cards {
            gap: 0;
          }
          .whyus-card {
            margin-bottom: 2rem;
            min-width: 90vw;
            max-width: 98vw;
            padding: 1.1rem 1rem;
          }
        }
        @media (max-width: 767px) {
          .whyus-section-bg {
            padding: 2rem 0 1.5rem 0;
          }
          .whyus-title {
            font-size: 1.3rem;
          }
          .whyus-card {
            font-size: 1rem;
            padding: 1rem 0.7rem;
          }
          .whyus-icon-circle {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
            margin-right: 10px;
          }
        }
      `}</style>
    </section>
  );
}
