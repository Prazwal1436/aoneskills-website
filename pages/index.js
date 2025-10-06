import React from 'react';
import Head from 'next/head';
import PackagesCarousel from '../components/PackagesCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>A-One Skills - Best Digital Marketing Agency</title>
        <meta name="description" content="Best Digital Agency for Growth Marketing, Online Branding, and Animated Ads. Transform your business with our digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#667eea" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
      </Head>
      <Navbar />
      <HeroSection />
  <section id="packages" style={{ background: '#f5f7fa', padding: '3rem 0' }}>
                  <div className="container">
                    <h1 className="title text-center" style={{ marginBottom: '2.5rem' }}>Our Packages</h1>
                    <PackagesCarousel />
                  </div>
                </section>
      <style jsx>{`
        @media (max-width: 600px) {
          #packages {
            padding-top: 1.2rem !important;
            padding-bottom: 1.2rem !important;
          }
        }
      `}</style>
                <ServicesSection />
                <AboutSection />
                <ContactSection />
                <TestimonialsSection />
                <Footer />
                {/* Floating Contact Button (Call or WhatsApp) */}
                <div className="floating-contact">
                  <button
                    className="contact-float"
                    title="Contact us"
                    aria-label="Contact us"
                    onClick={() => {
                      const menu = document.getElementById('contact-float-menu');
                      if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                    }}
                    style={{
                      position: 'fixed',
                      right: '2rem',
                      bottom: '7.5rem',
                      zIndex: 999,
                      background: 'linear-gradient(90deg, #25d366 60%, #075e54 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '54px',
                      height: '54px',
                      boxShadow: '0 4px 16px #075e5433',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s, transform 0.2s',
                    }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                  <div
                    id="contact-float-menu"
                    style={{
                      display: 'none',
                      position: 'fixed',
                      right: '2rem',
                      bottom: '13rem',
                      zIndex: 1000,
                      background: '#fff',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 12px #075e5433',
                      padding: '0.7rem 1.2rem',
                      minWidth: '180px',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ marginBottom: '0.7rem' }}>
                      <a
                        href="tel:+9779842747572"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#075e54',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1.08rem',
                          marginBottom: '0.3rem',
                        }}
                        title="Call us"
                      >
                        <i className="fa fa-phone" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
                        Call Us
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/9842747572"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#25d366',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1.08rem',
                        }}
                        title="Chat on WhatsApp"
                      >
                        <i className="fab fa-whatsapp" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                {/* Scroll to Top Button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    position: 'fixed',
                    right: '2rem',
                    bottom: '2.5rem',
                    zIndex: 999,
                    background: 'linear-gradient(90deg, #1a237e 60%, #e53935 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    boxShadow: '0 4px 16px #1a237e33',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  title="Scroll to top"
                  aria-label="Scroll to top"
                >
                  ↑
                </button>
              </>
            );
}
