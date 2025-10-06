import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - </title>
        <meta name="description" content="Contact  for business inquiries, support, and more." />
      </Head>
      <Navbar />
      <section id="contact" className="contact-page-section">
        <div className="contact-hero">
          <h1 className="contact-hero-title">Get in Touch with A-One Skills</h1>
          <p className="contact-hero-lead">We're here to help you grow your business. Reach out for business inquiries, support, or collaboration.</p>
        </div>
        <div className="container contact-page-container">
          <div className="contact-page-row">
            <div className="contact-page-left">
              <div className="contact-page-img-card">
                <img src="/img/contact.jpg" alt="Contact" className="contact-page-img" />
              </div>
              <div className="contact-page-map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281.894289934624!2d87.68805098196302!3d26.667058029246792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58ff7a3c0003b%3A0xb9d7fd4ea424ef1b!2sA.One%20Skills%20Tech%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1759752651555!5m2!1sen!2snp"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '1rem', boxShadow: '0 2px 12px #6a82fb22' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contact-page-right">
              <h2 className="contact-page-title">Contact Us</h2>
              <form className="contact-page-form">
                <input type="text" className="contact-form-input" placeholder="Your Name" required />
                <input type="email" className="contact-form-input" placeholder="Your Email" required />
                <input type="text" className="contact-form-input" placeholder="Subject" required />
                <textarea className="contact-form-input" placeholder="Your Message" rows={4} required></textarea>
                <button type="submit" className="contact-form-btn">Send Message</button>
              </form>
              <div className="contact-page-links">
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="Phone" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"></path></svg>
                  </span>
                  <span className="contact-page-link-text">984-2747572</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="WhatsApp" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.148-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.666-1.611-.916-2.207-.242-.579-.487-.5-.666-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.487.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.271-.198-.568-.347z"></path></svg>
                  </span>
                  <span className="contact-page-link-text">+977 984-2747572</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="Email" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                  </span>
                  <span className="contact-page-link-text">contact@aoneskills.com.np</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="Instagram" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a1 1 0 110 2 1 1 0 010-2z"></path></svg>
                  </span>
                  <span className="contact-page-link-text">aoneskills</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="Facebook" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"></path></svg>
                  </span>
                  <a href="https://facebook.com/aoneskills" className="contact-page-link-text" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="LinkedIn" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"></path></svg>
                  </span>
                  <a href="https://linkedin.com/company/aoneskills" className="contact-page-link-text" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon" aria-label="Website" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 14.828a8 8 0 01-11.314 0 8 8 0 010-11.314 8 8 0 0111.314 0 8 8 0 010 11.314zm-1.414-1.414a6 6 0 10-8.486-8.486 6 6 0 008.486 8.486z"></path></svg>
                  </span>
                  <a href="https://aoneskills.com.np" className="contact-page-link-text">aoneskills.com.np</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contact-hero {
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            text-align: center;
            padding: 2.5rem 0 1.2rem 0;
            border-radius: 0 0 2rem 2rem;
            margin-bottom: 2rem;
          }
          .contact-hero-title {
            font-size: 2.2rem;
            font-weight: 900;
            margin-bottom: 0.7rem;
            letter-spacing: 1px;
          }
          .contact-hero-lead {
            font-size: 1.15rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .contact-page-section {
            background: linear-gradient(120deg, #e3e8ff 0%, #6a82fb 100%);
            padding: 0 0 3.5rem 0;
            position: relative;
          }
          .contact-page-container {
            max-width: 1100px;
            margin: 0 auto;
            background: #fff;
            border-radius: 2rem;
            box-shadow: 0 4px 32px #6a82fb33;
            padding: 2.5rem 2rem;
          }
          .contact-page-row {
            display: flex;
            gap: 2.5rem;
            flex-wrap: wrap;
          }
          .contact-page-left {
            flex: 1 1 340px;
            min-width: 280px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            justify-content: flex-start;
          }
          .contact-page-img-card {
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
          .contact-page-img {
            border-radius: 1.5rem;
            box-shadow: 0 2px 16px #6a82fb22;
            object-fit: cover;
            width: 100%;
            max-height: 260px;
          }
          .contact-page-map-card {
            width: 100%;
            margin-top: 1.2rem;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 2px 12px #6a82fb22;
          }
          .contact-page-right {
            flex: 2 1 400px;
            min-width: 320px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: flex-start;
          }
          .contact-page-title {
            font-weight: 900;
            font-size: 2.1rem;
            color: #6a82fb;
            margin-bottom: 1.2rem;
            letter-spacing: 1px;
            text-align: left;
          }
          .contact-page-form {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            margin-bottom: 2rem;
          }
          .contact-form-input {
            flex: 1;
            padding: 0.9rem 1.2rem;
            border-radius: 1.2rem;
            border: 2px solid #6a82fb;
            font-size: 1.08rem;
            background: #f7f7fa;
            color: #14208a;
            outline: none;
            transition: border 0.2s;
          }
          .contact-form-input:focus {
            border-color: #fc5c7d;
          }
          .contact-form-btn {
            padding: 0.9rem 2.2rem;
            border-radius: 2rem;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            font-weight: 700;
            font-size: 1.08rem;
            border: none;
            box-shadow: 0 2px 12px #6a82fb22;
            transition: background 0.2s, transform 0.2s;
            letter-spacing: 0.5px;
            cursor: pointer;
          }
          .contact-form-btn:hover {
            background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
            color: #fff;
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 4px 24px #fc5c7d22;
          }
          .contact-page-links {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            margin-top: 1.2rem;
          }
          .contact-page-link-group {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            background: #f7f7fa;
            border-radius: 1.2rem;
            padding: 0.7rem 1.2rem;
            box-shadow: 0 2px 8px #6a82fb11;
          }
          .contact-page-link-icon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            font-size: 1.3rem;
            box-shadow: 0 2px 8px #6a82fb22;
          }
          .contact-page-link-text {
            font-size: 1.08rem;
            color: #14208a;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
          }
          .contact-page-link-text:hover {
            color: #fc5c7d;
            text-decoration: underline;
          }
          @media (max-width: 900px) {
            .contact-page-row {
              flex-direction: column;
              gap: 2rem;
            }
            .contact-page-left, .contact-page-right {
              min-width: 0;
            }
          }
          @media (max-width: 600px) {
            .contact-hero-title {
              font-size: 1.3rem;
            }
            .contact-hero-lead {
              font-size: 1rem;
            }
            .contact-page-container {
              padding: 1.2rem 0.2rem;
            }
            .contact-page-title {
              font-size: 1.1rem;
            }
            .contact-page-img-card {
              padding: 0.7rem;
              border-radius: 1rem;
              max-width: 98vw;
            }
            .contact-page-img {
              border-radius: 0.7rem;
              max-height: 140px;
            }
            .contact-page-map-card iframe {
              height: 120px;
            }
            .contact-form-input {
              font-size: 0.98rem;
              padding: 0.6rem 0.8rem;
              border-radius: 0.7rem;
            }
            .contact-form-btn {
              font-size: 0.98rem;
              padding: 0.6rem 1.2rem;
            }
            .contact-page-link-group {
              padding: 0.5rem 0.7rem;
              border-radius: 0.7rem;
            }
            .contact-page-link-icon {
              width: 28px;
              height: 28px;
              font-size: 1rem;
            }
            .contact-page-link-text {
              font-size: 0.98rem;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
