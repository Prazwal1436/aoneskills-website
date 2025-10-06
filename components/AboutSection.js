import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about-us" className="about-section-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
            <div className="about-img-card">
              <img src="/img/team.jpg" alt="Our Team" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-12 col-md-7 text-center text-md-start">
            <div className="about-card">
              <h2 className="about-title">About Us</h2>
              <p className="about-desc">
                <span className="about-highlight"><i className="fa fa-bolt"></i> A-One Skills Tech Solutions</span> is a passionate digital agency helping brands and startups achieve their digital goals.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="about-feature-icon mission"><i className="fa fa-rocket"></i></span>
                  <div>
                    <strong>Our Mission:</strong> Empower businesses to thrive in the digital era through innovative solutions and creative strategies.
                  </div>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon values"><i className="fa fa-heart"></i></span>
                  <div>
                    <strong>Our Values:</strong> Integrity, creativity, and client success are at the heart of everything we do.
                  </div>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon team"><i className="fa fa-users"></i></span>
                  <div>
                    <strong>Meet the Team:</strong> Our diverse team of designers, developers, and marketers brings years of experience and a collaborative spirit.
                  </div>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon story"><i className="fa fa-history"></i></span>
                  <div>
                    <strong>Our Story:</strong> Founded in 2018, we've helped 100+ clients transform their online presence and grow their brands.
                  </div>
                </div>
              </div>
              <Link href="/about" legacyBehavior>
                <a className="about-learn-btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section-bg {
          background: linear-gradient(120deg, #e3e8ff 60%, #fff 100%);
          padding: 4rem 0 3rem 0;
          position: relative;
        }
        .about-img-card {
          background: linear-gradient(135deg, #6a82fb22 0%, #fc5c7d22 100%);
          border-radius: 1.5rem;
          box-shadow: 0 2px 16px #6a82fb22;
          padding: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 340px;
          margin: 0 auto;
        }
        .about-img-card img {
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px #6a82fb22;
          object-fit: cover;
          width: 100%;
          max-height: 260px;
        }
        .about-card {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 2px 16px #6a82fb11;
          padding: 2.2rem 2rem 1.5rem 2rem;
          position: relative;
        }
        .about-title {
          font-weight: 800;
          font-size: 2.2rem;
          color: #14208a;
          margin-bottom: 1.1rem;
        }
        .about-desc {
          font-size: 1.15rem;
          color: #444;
          margin-bottom: 1.2rem;
        }
        .about-highlight {
          font-weight: 700;
          color: #6a82fb;
          background: linear-gradient(90deg, #e3e8ff 0%, #fc5c7d22 100%);
          border-radius: 1rem;
          padding: 0.2rem 0.7rem;
          margin-right: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .about-features {
          margin-bottom: 1.5rem;
        }
        .about-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .about-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #fff;
          margin-top: 2px;
        }
        .about-feature-icon.mission {
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
        }
        .about-feature-icon.values {
          background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
        }
        .about-feature-icon.team {
          background: linear-gradient(90deg, #667eea 0%, #fc5c7d 100%);
        }
        .about-feature-icon.story {
          background: linear-gradient(90deg, #fc5c7d 0%, #667eea 100%);
        }
        .about-learn-btn {
          display: inline-block;
          font-weight: 700;
          font-size: 1.08rem;
          padding: 0.7rem 2rem;
          border-radius: 2rem;
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
          color: #fff;
          box-shadow: 0 2px 12px #6a82fb22;
          border: none;
          transition: background 0.2s, transform 0.2s;
          letter-spacing: 0.5px;
          text-decoration: none;
        }
        .about-learn-btn:hover {
          background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
          color: #fff;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 4px 24px #fc5c7d22;
          text-decoration: none;
        }
        @media (max-width: 767px) {
          .about-title {
            font-size: 1.3rem;
          }
          .about-card {
            border-radius: 1rem;
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          .about-img-card {
            border-radius: 1rem;
            padding: 0.7rem;
            max-width: 98vw;
          }
          .about-img-card img {
            border-radius: 0.7rem;
            max-height: 180px;
          }
          .about-learn-btn {
            font-size: 0.98rem;
            padding: 0.5rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
