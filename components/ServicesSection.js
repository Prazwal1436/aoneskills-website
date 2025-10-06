import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section-bg">
      <div className="container">
        <h2 className="mb-4 text-center services-title">Our Services</h2>
        <p className="mb-5 text-center services-desc">
          We offer web development, branding, marketing, and more to help your business grow.
        </p>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate" style={{ color: '#4267B2' }}>
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram" style={{ marginLeft: '0.5rem', color: '#E1306C' }}></i>
                </div>
                <h5 className="card-title mb-3">Facebook & Instagram Boosting</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Only at Rs 180 per $1</div>
                <p className="card-text mb-0">Grow your audience and sales with expert ad campaigns, page management, and influencer strategies on Facebook & Instagram.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate" style={{ color: '#6a82fb' }}>
                  <i className="fas fa-globe"></i>
                  <i className="fas fa-code" style={{ marginLeft: '0.5rem', color: '#14208a' }}></i>
                </div>
                <h5 className="card-title mb-3">Website Design & Development</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Starting From Rs 25,000</div>
                <p className="card-text mb-0">Modern, mobile-friendly websites and web apps tailored for your business, with fast delivery and ongoing support.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-4 d-flex">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate" style={{ color: '#fc5c7d' }}>
                  <i className="fas fa-bullhorn"></i>
                  <i className="fas fa-paint-brush" style={{ marginLeft: '0.5rem', color: '#ffe082' }}></i>
                </div>
                <h5 className="card-title mb-3">Branding & Digital Marketing</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Starting From Rs 8,000</div>
                <p className="card-text mb-0">Creative branding, logo design, and digital marketing to make your business stand out and grow online.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link href="/services" legacyBehavior>
            <a className="learnmore-btn">Learn More</a>
          </Link>
        </div>
        <style jsx>{`
          .services-section-bg {
            background: linear-gradient(120deg, #f7f7fa 60%, #e3e8ff 100%);
            position: relative;
            padding: 4.5rem 0 3.5rem 0;
            overflow: hidden;
          }
          .services-section-bg::before {
            content: '';
            position: absolute;
            top: -120px;
            left: -80px;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, #6a82fb33 0%, #fff0 80%);
            z-index: 0;
            border-radius: 50%;
          }
          .services-section-bg::after {
            content: '';
            position: absolute;
            bottom: -100px;
            right: -60px;
            width: 260px;
            height: 260px;
            background: radial-gradient(circle, #fc5c7d33 0%, #fff0 80%);
            z-index: 0;
            border-radius: 50%;
          }
          .services-title {
            font-weight: 800;
            font-size: 2.5rem;
            letter-spacing: 1px;
            color: #14208a;
            position: relative;
            z-index: 1;
            margin-bottom: 0.5rem;
          }
          .services-desc {
            font-size: 1.18rem;
            color: #555;
            position: relative;
            z-index: 1;
            margin-bottom: 2.5rem;
          }
          .service-card {
            border-radius: 1.5rem;
            transition: transform 0.2s, box-shadow 0.2s;
            background: #fff;
            box-shadow: 0 2px 12px #6a82fb11;
            position: relative;
            z-index: 1;
          }
          .service-card:hover {
            transform: translateY(-8px) scale(1.04);
            box-shadow: 0 8px 32px #6a82fb22;
          }
          .service-icon {
            font-size: 2.7rem;
            margin-bottom: 1.2rem;
            transition: color 0.2s, transform 0.3s;
          }
          .service-icon-animate {
            animation: serviceIconPulse 2.2s infinite;
          }
          @keyframes serviceIconPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.18); }
            100% { transform: scale(1); }
          }
          .card-title {
            font-weight: 700;
            font-size: 1.18rem;
            color: #14208a;
            margin-bottom: 0.7rem;
          }
          .card-text {
            font-size: 1.05rem;
            color: #444;
          }
          .learnmore-btn {
            display: inline-block;
            font-weight: 700;
            font-size: 1.13rem;
            padding: 0.85rem 2.2rem;
            border-radius: 2rem;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            box-shadow: 0 2px 12px #6a82fb22;
            border: none;
            transition: background 0.2s, transform 0.2s;
            letter-spacing: 0.5px;
            text-decoration: none;
            position: relative;
            z-index: 1;
          }
          .learnmore-btn:hover {
            background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
            color: #fff;
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 4px 24px #fc5c7d22;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .services-title {
              font-size: 1.5rem;
            }
            .service-card {
              border-radius: 1rem;
              box-shadow: 0 2px 12px #6a82fb11;
            }
            .service-icon {
              font-size: 2rem !important;
            }
            .card-title {
              font-size: 1.08rem !important;
            }
            .card-body {
              padding: 1.5rem 0.5rem !important;
            }
            .learnmore-btn {
              font-size: 1rem !important;
              padding: 0.7rem 1.5rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
