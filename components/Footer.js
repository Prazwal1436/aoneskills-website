import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-box modern-footer">
          <div className="footer-col footer-brand">
            <div className="footer-logo-box">
              <Image src="/img/logo.png" alt=" Logo" width={120} height={120} className="footer-logo" style={{objectFit: 'contain', borderRadius: '18px', background: '#fff'}} />
            </div>
            <p>We are passionate about delivering exceptional digital experiences that drive real business results. Our team combines creativity with cutting-edge technology to help your brand stand out in the competitive digital landscape.</p>
          </div>
          <div className="footer-col footer-contact">
            <p className="footer-contact-title">CONTACT INFO</p>
            <div className="footer-contact-column">
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fas fa-phone"></i></span>
                <span className="footer-contact-text">984-2747572</span>
              </span>
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fab fa-whatsapp"></i></span>
                <span className="footer-contact-text">+977 984-2747572</span>
              </span>
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fas fa-envelope"></i></span>
                <span className="footer-contact-text">contact@aoneskills.com.np</span>
              </span>
            </div>
          </div>
          <div className="footer-col footer-social">
            <p className="footer-contact-title">SOCIAL LINKS</p>
            <div className="footer-contact-column">
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fab fa-instagram"></i></span>
                <span className="footer-contact-text">aoneskills</span>
              </span>
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fab fa-facebook"></i></span>
                <a href="https://facebook.com/aoneskills" className="footer-contact-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              </span>
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fab fa-linkedin"></i></span>
                <a href="https://linkedin.com/company/aoneskills" className="footer-contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </span>
              <span className="footer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
                <span className="footer-contact-icon"><i className="fas fa-link"></i></span>
                <a href="https://aoneskills.com.np" className="footer-contact-link">aoneskills.com.np</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modern-footer {
           background: linear-gradient(90deg, #e53935 0%, #1a237e 100%);
          color: #ffffff;
          border-radius: 18px;
          box-shadow: 0 2px 16px 0 rgba(20,32,138,0.07);
          padding: 2rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
          align-items: flex-start;
        }
        .footer-col {
          flex: 1 1 260px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .footer-brand {
          text-align: center;
          align-items: center;
        }
        .footer-logo-box {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(20,32,138,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          max-width: 120px;
          max-height: 120px;
          overflow: hidden;
        }
        .footer-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .footer-contact-title {
          font-weight: 700;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.15rem;
        }
        .footer-contact-list.split-contact {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .footer-contact-group {
          width: 100%;
        }
        .footer-contact-group-title {
          font-weight: 600;
          font-size: 1.08rem;
          margin-bottom: 0.7rem;
          color: #14208a;
          text-align: left;
        }
        .footer-contact-row {
             display: none;
          }
          .footer-contact-column {
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
            align-items: flex-start;
            margin-bottom: 0.5rem;
          }
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          flex-direction: row;
          width: 100%;
        }
        .footer-contact-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: radial-gradient(circle at 60% 40%, #6a82fb 0%, #14208a 100%);
          color: #fff; /* Changed from #1a237e to white */
          font-size: 1.35rem;
          box-shadow: 0 4px 16px 0 rgba(20,32,138,0.12);
          border: 2px solid #6a82fb;
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s, color 0.2s, border 0.2s;
        }
        .footer-contact-icon:hover {
          box-shadow: 0 8px 24px #fc5c7d44;
          transform: scale(1.18) rotate(-8deg);
          background: radial-gradient(circle at 60% 40%, #fc5c7d 0%, #6a82fb 80%, #fff 100%);
          color: #fff;
          border: 2px solid #fc5c7d;
        }
        .footer-contact-text, .footer-contact-link {
          font-size: 1.08rem;
          color: #fff;
          text-decoration: none !important;
          transition: color 0.2s;
        }
        .footer-contact-link:hover {
          color: #e3e6f5;
          text-decoration: none !important;
        }
        .footer-newsletter {
          width: 100%;
        }
        .footer-newsletter-title {
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .footer-newsletter-input {
          background: #fff;
          color: #14208a;
          border: 2px solid #14208a;
          font-size: 1rem;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          width: 100%;
          box-sizing: border-box;
          border-radius: 24px;
        }
        .footer-newsletter-btn {
          width: 100%;
          border-radius: 24px;
        }
        @media (max-width: 992px) {
          .modern-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;
          }
          .footer-col {
            align-items: center;
            text-align: center;
          }
        }
        @media (max-width: 576px) {
          .modern-footer {
            padding: 1rem 0.5rem;
            gap: 1.2rem;
          }
          .footer-logo {
            max-height: 90px;
          }
          .footer-contact-column {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
            gap: 0.8rem !important;
            margin-start: 0.5rem !important;
          }
          .footer-contact-item {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            width: 100%;
            margin-bottom: 0.5rem !important;
          }
          .footer-contact-item:last-child {
          
          }
        }
        @media (max-width: 576px) {
          .modern-footer {
            padding: 1rem 0.5rem;
            gap: 1.2rem;
          }
          .footer-logo {
            max-height: 90px;
          }
        }
      `}</style>
    </footer>
  );
}
