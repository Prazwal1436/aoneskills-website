import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Aone SKills</title>
        <meta name="description" content="Explore the services offered by Aone SKills: web development, branding, marketing, and more." />
      </Head>
      <Navbar />
      <section id="services" style={{ background: '#f7f7fa', padding: '4rem 0' }}>
        <div className="container">
          <h1 className="title mb-5" style={{ fontWeight: 700, fontSize: '2.2rem', textAlign: 'center' }}>Our Services</h1>
          {/* Facebook & Instagram Boosting - Full width detailed card */}
          <div className="services-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2.5rem 2rem', margin: '0 auto 2.5rem auto', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem', color: '#4267B2', marginBottom: '1.2rem' }}>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram" style={{ marginLeft: '0.7rem', color: '#E1306C' }}></i>
            </div>
            <h2 style={{ fontWeight: 800, textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}>Facebook & Instagram Boosting</h2>
            <div style={{ fontWeight: 700, color: '#e53935', fontSize: '1.18rem', marginBottom: '0.7rem', textAlign: 'center' }}>
              Facebook Boosting only at <span style={{ background: '#ffe082', color: '#14208a', borderRadius: '8px', padding: '0.2em 0.7em', fontWeight: 800 }}>Rs 180 Per $1</span> <br />
              <span style={{ color: '#388e3c', fontWeight: 600 }}>No additional hidden fees</span>
            </div>
            <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: '1.2rem' }}>Grow your audience and sales with expert ad campaigns, page management, and influencer strategies on Facebook & Instagram. We handle everything from ad setup to analytics and reporting.</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 400, fontSize: '1.08rem', marginBottom: '0.5rem' }}>
              <li>Ad Campaign Management</li>
              <li>Page & Profile Optimization</li>
              <li>Influencer & Content Strategy</li>
              <li>Analytics & Reporting</li>
              <li>Audience Targeting</li>
            </ul>
            <a href="https://wa.me/9842747572?text=I'm%20interested%20in%20Facebook%20Boosting%20at%20Rs%20180%20per%20$1" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.2rem', display: 'inline-block', background: 'linear-gradient(90deg, #25d366 60%, #075e54 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: '2rem', padding: '0.85rem 2.2rem', boxShadow: '0 2px 12px #25d36622', border: 'none', transition: 'background 0.2s, transform 0.2s', letterSpacing: '0.5px', textDecoration: 'none' }}>
              <i className="fab fa-whatsapp" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
              Contact Now
            </a>
          </div>
          {/* Website Design & Development - Full width detailed card with PackagesCarousel */}
          <div className="services-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2.5rem 2rem', margin: '0 auto 2.5rem auto', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem', color: '#6a82fb', marginBottom: '1.2rem' }}>
              <i className="fas fa-globe"></i>
              <i className="fas fa-code" style={{ marginLeft: '0.7rem', color: '#14208a' }}></i>
            </div>
            <h2 style={{ fontWeight: 800, textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}>Website Design & Development</h2>
            <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: '1.2rem' }}>Modern, mobile-friendly websites and web apps tailored for your business, with fast delivery and ongoing support.</p>
            <div style={{ margin: '2rem 0', width: '100%' }}>
              {/* PackagesCarousel for website packages */}
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                {require('../components/PackagesCarousel').default()}
              </div>
            </div>
          </div>
          {/* Branding & Digital Marketing - Full width detailed card */}
          <div className="services-card" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2.5rem 2rem', margin: '0 auto 2.5rem auto', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '3rem', color: '#fc5c7d', marginBottom: '1.2rem' }}>
              <i className="fas fa-bullhorn"></i>
              <i className="fas fa-paint-brush" style={{ marginLeft: '0.7rem', color: '#ffe082' }}></i>
            </div>
            <h2 style={{ fontWeight: 800, textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}>Branding & Digital Marketing</h2>
            <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: '1.2rem' }}>Creative branding, logo design, and digital marketing to make your business stand out and grow online. We offer SEO, content marketing, social media, and more.</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: 400, fontSize: '1.08rem', marginBottom: '0.5rem' }}>
              <li>Logo & Brand Identity</li>
              <li>SEO & Content Marketing</li>
              <li>Social Media Management</li>
              <li>Online Reputation</li>
              <li>Campaign Strategy</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
