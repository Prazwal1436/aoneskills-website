import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Digital Extra</title>
        <meta name="description" content="Contact Digital Extra for business inquiries, support, and more." />
      </Head>
      <Navbar />
      <section id="contact" className="contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-page-row">
            <div className="contact-page-left">
              <div className="contact-page-img-card">
                <img src="/img/contact.jpg" alt="Contact" className="contact-page-img" />
              </div>
              <div className="contact-page-map-card">
                <div style={{ width: '100%', maxWidth: 800, margin: '2rem auto', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 24px #1a237e22' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d222.84311999076527!2d87.69380614441754!3d26.66480947114015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d26.664901046830195!2d87.69379819236062!5e0!3m2!1sen!2snp!4v1759744556524!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="contact-page-right">
              <h2 className="contact-page-title">Contact Us</h2>
              <p className="contact-page-desc">Reach out for business inquiries, support, or collaboration. We're here to help!</p>
              <form className="contact-page-form">
                <div className="contact-form-row">
                  <input type="text" className="contact-form-input" placeholder="Your Name" required />
                  <input type="email" className="contact-form-input" placeholder="Your Email" required />
                </div>
                <input type="text" className="contact-form-input" placeholder="Subject" required />
                <textarea className="contact-form-input" placeholder="Your Message" rows={4} required></textarea>
                <button type="submit" className="contact-form-btn">Send Message</button>
              </form>
              <div className="contact-page-links">
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-phone"></i></span>
                  <span className="contact-page-link-text">984-2747572</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fab fa-whatsapp"></i></span>
                  <span className="contact-page-link-text">+977 984-2747572</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-envelope"></i></span>
                  <span className="contact-page-link-text">contact@aoneskills.com.np</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-instagram"></i></span>
                  <span className="contact-page-link-text">aoneskills</span>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-facebook"></i></span>
                  <a href="https://facebook.com/aoneskills" className="contact-page-link-text" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-linkedin"></i></span>
                  <a href="https://linkedin.com/company/aoneskills" className="contact-page-link-text" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-page-link-group">
                  <span className="contact-page-link-icon"><i className="fa fa-link"></i></span>
                  <a href="https://aoneskills.com.np" className="contact-page-link-text">aoneskills.com.np</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contact-page-section {
            background: linear-gradient(120deg, #e3e8ff 0%, #6a82fb 100%);
            padding: 4.5rem 0 3.5rem 0;
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
            font-size: 2.4rem;
            color: #6a82fb;
            margin-bottom: 1.2rem;
            letter-spacing: 1px;
            text-align: left;
          }
          .contact-page-desc {
            font-size: 1.18rem;
            color: #444;
            margin-bottom: 1.7rem;
            text-align: left;
          }
          .contact-page-form {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            margin-bottom: 2rem;
          }
          .contact-form-row {
            display: flex;
            gap: 1.2rem;
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
            .contact-page-container {
              padding: 1.2rem 0.2rem;
            }
            .contact-page-title {
              font-size: 1.3rem;
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
