import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section-bg">
      <div className="container">
      
        <p className="mb-5 text-center services-desc">
          We offer web development, branding, marketing, and more to help your business grow.
        </p>
  <div className="row justify-content-center mb-4 services-cards-row">
          {/* Custom Software Development */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#6366f1 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h5 className="card-title mb-3">Custom Software Development</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Tailored Solutions</div>
                <p className="card-text mb-0">We build ERP, CRM, and automation systems for businesses, schools, and organizations in Purbanchal & Jhapa.</p>
              </div>
            </div>
          </div>
          {/* Website Design & Development */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#6a82fb 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-globe"></i>
                  <i className="fas fa-code" style={{ marginLeft: '0.5rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title mb-3">Website Design & Development</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>From Rs 25,000</div>
                <p className="card-text mb-0">Modern, mobile-friendly websites and web apps for companies in Purbanchal & Jhapa, optimized for SEO and user experience.</p>
              </div>
            </div>
          </div>
          {/* Mobile App Development */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#10b981 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h5 className="card-title mb-3">Mobile App Development</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Android & iOS</div>
                <p className="card-text mb-0">Android and iOS apps for business, education, and e-commerce, with seamless integration and support in Eastern Nepal.</p>
              </div>
            </div>
          </div>
          {/* Digital Marketing & SEO */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#4267B2 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram" style={{ marginLeft: '0.5rem', color: '#fff' }}></i>
                  <i className="fas fa-search" style={{ marginLeft: '0.5rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title mb-3">Digital Marketing & SEO</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Rs 180 per $1</div>
                <p className="card-text mb-0">Boost your online presence with expert SEO, social media marketing, Google Ads, and content strategies for Purbanchal & Jhapa.</p>
              </div>
            </div>
          </div>
          {/* Branding & Graphic Design */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#fc5c7d 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-bullhorn"></i>
                  <i className="fas fa-paint-brush" style={{ marginLeft: '0.5rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title mb-3">Branding & Graphic Design</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>From Rs 8,000</div>
                <p className="card-text mb-0">Logo, brochure, and brand identity design to help your business stand out in Purbanchal & Jhapa.</p>
              </div>
            </div>
          </div>
          {/* IT Consulting & Support */}
          <div className="col-12 col-sm-10 col-md-4 d-flex mb-4 mb-md-0 service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#f59e42 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-user-tie"></i>
                  <i className="fas fa-headset" style={{ marginLeft: '0.5rem', color: '#fff' }}></i>
                </div>
                <h5 className="card-title mb-3">IT Consulting & Support</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Expert Advice</div>
                <p className="card-text mb-0">Reliable IT consulting, cloud solutions, and technical support for smooth business operations in Province 1.</p>
              </div>
            </div>
          </div>
          {/* Training & Workshops */}
          <div className="col-12 col-sm-10 col-md-4 d-flex service-card-animate">
            <div className="card service-card w-100 h-100 border-0 shadow-lg">
              <div className="card-body text-center py-4 px-3 px-md-4">
                <div className="service-icon service-icon-animate service-icon-circle" style={{ background: 'linear-gradient(135deg,#6366f1 60%,#e0e7ff 100%)', color: '#fff' }}>
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h5 className="card-title mb-3">Training & Workshops</h5>
                <div className="service-price" style={{ fontWeight: 700, color: '#e53935', marginBottom: '0.5rem', fontSize: '1.08rem' }}>Upskill Your Team</div>
                <p className="card-text mb-0">IT, coding, and digital marketing workshops led by industry experts for businesses and students in Eastern Nepal.</p>
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
          .services-cards-row {
            display: flex;
            flex-wrap: wrap;
            gap: 32px 0;
            justify-content: center;
          }
          .service-card-animate {
            animation: fadeInUp 0.8s ease both;
            will-change: transform, opacity;
          }
          .service-card-animate:nth-child(1) { animation-delay: 0.05s; }
          .service-card-animate:nth-child(2) { animation-delay: 0.15s; }
          .service-card-animate:nth-child(3) { animation-delay: 0.25s; }
          .service-card-animate:nth-child(4) { animation-delay: 0.35s; }
          .service-card-animate:nth-child(5) { animation-delay: 0.45s; }
          .service-card-animate:nth-child(6) { animation-delay: 0.55s; }
          .service-card-animate:nth-child(7) { animation-delay: 0.65s; }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .service-icon-circle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 64px;
            height: 64px;
            font-size: 2.2rem;
            margin-bottom: 1.2rem;
            box-shadow: 0 2px 12px #6a82fb22;
            background: #e0e7ff;
            transition: box-shadow 0.2s, background 0.2s;
          }
          .service-card:hover .service-icon-circle {
            box-shadow: 0 8px 32px #6366f122;
            background: linear-gradient(135deg,#6366f1 60%,#e0e7ff 100%);
          }
          .service-card {
            border-radius: 1.7rem;
            transition: transform 0.2s, box-shadow 0.2s;
            background: linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%);
            box-shadow: 0 2px 16px #6a82fb11;
            position: relative;
            z-index: 1;
          }
          .service-card:hover {
            transform: translateY(-10px) scale(1.045);
            box-shadow: 0 12px 40px #6366f122;
            background: linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%);
          }
          .card-title {
            font-weight: 700;
            font-size: 1.22rem;
            color: #14208a;
            margin-bottom: 0.7rem;
            letter-spacing: 0.5px;
          }
          .card-text {
            font-size: 1.07rem;
            color: #444;
            margin-bottom: 0.2rem;
          }
          .service-price {
            font-size: 1.08rem;
            font-weight: 700;
            color: #e53935;
            margin-bottom: 0.5rem;
          }
          @media (max-width: 991px) {
            .services-cards-row {
              gap: 0;
            }
            .service-card {
              margin-bottom: 2rem;
            }
          }
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
