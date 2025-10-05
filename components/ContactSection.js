import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
            <div className="contact-img-card redesigned-contact-img-card">
              <img src="/img/contact.jpg" alt="Contact" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="contact-card redesigned-contact-card text-center">
              <div className="contact-icon-wrap redesigned-contact-icon-wrap">
                <span className="contact-icon redesigned-contact-icon"><i className="fa fa-envelope"></i></span>
                <span className="contact-icon redesigned-contact-icon"><i className="fa fa-phone"></i></span>
                <span className="contact-icon redesigned-contact-icon"><i className="fa fa-whatsapp"></i></span>
              </div>
              <h2 className="contact-title redesigned-contact-title">Contact Us</h2>
              <p className="contact-desc redesigned-contact-desc">
                Reach out for business inquiries, support, or collaboration.<br />We're here to help!
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="contact-learn-btn redesigned-contact-learn-btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-section-bg {
          background: linear-gradient(120deg, #e3e8ff 0%, #6a82fb 100%);
          padding: 4.5rem 0 3.5rem 0;
          position: relative;
        }
        .redesigned-contact-img-card {
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 4px 32px #6a82fb33;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 340px;
          margin: 0 auto;
        }
        .redesigned-contact-img-card img {
          border-radius: 1.5rem;
          box-shadow: 0 2px 16px #6a82fb22;
          object-fit: cover;
          width: 100%;
          max-height: 260px;
        }
        .redesigned-contact-card {
          background: linear-gradient(120deg, #6a82fb 0%, #fc5c7d 100%);
          border-radius: 2rem;
          box-shadow: 0 4px 32px #fc5c7d33;
          padding: 2.5rem 2.2rem 2rem 2.2rem;
          max-width: 540px;
          margin: 0 auto;
          position: relative;
        }
        .redesigned-contact-icon-wrap {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .redesigned-contact-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: #fff;
          color: #6a82fb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 2px 16px #6a82fb22;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .redesigned-contact-icon:hover {
          background: #fc5c7d;
          color: #fff;
          transform: scale(1.12) rotate(-8deg);
        }
        .redesigned-contact-title {
          font-weight: 900;
          font-size: 2.4rem;
          color: #fff;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 12px #6a82fb44;
        }
        .redesigned-contact-desc {
          font-size: 1.18rem;
          color: #fff;
          margin-bottom: 1.7rem;
          text-shadow: 0 1px 8px #fc5c7d33;
        }
        .redesigned-contact-learn-btn {
          display: inline-block;
          font-weight: 700;
          font-size: 1.08rem;
          padding: 0.8rem 2.2rem;
          border-radius: 2rem;
          background: #fff;
          color: #6a82fb;
          box-shadow: 0 2px 12px #6a82fb22;
          border: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          letter-spacing: 0.5px;
          text-decoration: none;
        }
        .redesigned-contact-learn-btn:hover {
          background: #fc5c7d;
          color: #fff;
          transform: translateY(-2px) scale(1.06);
          box-shadow: 0 4px 24px #fc5c7d22;
          text-decoration: none;
        }
        @media (max-width: 767px) {
          .redesigned-contact-title {
            font-size: 1.5rem;
          }
          .redesigned-contact-card {
            border-radius: 1.2rem;
            padding: 1.2rem 0.7rem 1rem 0.7rem;
            max-width: 98vw;
          }
          .redesigned-contact-img-card {
            border-radius: 1.2rem;
            padding: 0.7rem;
            max-width: 98vw;
          }
          .redesigned-contact-img-card img {
            border-radius: 0.7rem;
            max-height: 180px;
          }
          .redesigned-contact-learn-btn {
            font-size: 0.98rem;
            padding: 0.5rem 1.2rem;
          }
          .redesigned-contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
