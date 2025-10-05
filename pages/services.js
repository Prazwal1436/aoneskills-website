import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Digital Extra</title>
        <meta name="description" content="Explore the services offered by Digital Extra: web development, branding, marketing, and more." />
      </Head>
      <Navbar />
      <section id="services" style={{ background: '#f7f7fa', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="title mb-5" style={{ fontWeight: 700, fontSize: '2.2rem' }}>Our Services</h1>
          <div className="row text-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <div className="col-md-4 services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2rem 1.5rem', minWidth: '260px', maxWidth: '340px' }}>
              <Image src="/img/in.png" alt="Growth Marketing" width={100} height={100} className="service-img" />
              <h4 style={{ marginTop: '1rem' }}>Growth Marketing</h4>
              <p>Accelerate your business growth with data-driven marketing strategies. We implement comprehensive campaigns that increase brand awareness, generate qualified leads, and boost your revenue through proven digital marketing techniques.</p>
            </div>
            <div className="col-md-4 services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2rem 1.5rem', minWidth: '260px', maxWidth: '340px' }}>
              <Image src="/img/brand.jpg" alt="Online Branding" width={100} height={100} className="service-img" />
              <h4 style={{ marginTop: '1rem' }}>Online Branding</h4>
              <p>Build a powerful and memorable brand identity that resonates with your audience. Our branding experts create cohesive visual identities, compelling messaging, and consistent brand experiences across all digital touchpoints.</p>
            </div>
            <div className="col-md-4 services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px #1a237e11', padding: '2rem 1.5rem', minWidth: '260px', maxWidth: '340px' }}>
              <Image src="/img/animated.jpg" alt="Animated Ads" width={100} height={100} className="service-img" />
              <h4 style={{ marginTop: '1rem' }}>Animated Ads</h4>
              <p>Capture attention with stunning animated advertisements that tell your story and drive engagement. Our creative team designs eye-catching animations that boost click-through rates and maximize your advertising ROI across all platforms.</p>
            </div>
          </div>
          <div className="row mt-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <div className="services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(26,35,126,0.10)', padding: '2rem 1.5rem', maxWidth: '340px', flex: '1 1 300px', textAlign: 'center', borderTop: '6px solid #6a82fb' }}>
              <h4 style={{ color: '#1a237e', fontWeight: 700, marginBottom: '1rem', fontSize: '1.3rem', letterSpacing: '1px' }}>WEBSITE DEVELOPMENT</h4>
              <p style={{ color: '#222', fontSize: '1.05rem' }}>We design and develop beautiful, responsive, and high-performing websites tailored to your brand and business goals. From landing pages to complex corporate sites, we ensure your online presence is modern, secure, and easy to manage.</p>
            </div>
            <div className="services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(26,35,126,0.10)', padding: '2rem 1.5rem', maxWidth: '340px', flex: '1 1 300px', textAlign: 'center', borderTop: '6px solid #6a82fb' }}>
              <h4 style={{ color: '#1a237e', fontWeight: 700, marginBottom: '1rem', fontSize: '1.3rem', letterSpacing: '1px' }}>WEB APPLICATION DEVELOPMENT</h4>
              <p style={{ color: '#222', fontSize: '1.05rem' }}>Our team builds robust web applications that streamline your business processes and deliver seamless user experiences. We use the latest technologies to create scalable, secure, and feature-rich solutions for any industry.</p>
            </div>
            <div className="services" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(26,35,126,0.10)', padding: '2rem 1.5rem', maxWidth: '340px', flex: '1 1 300px', textAlign: 'center', borderTop: '6px solid #6a82fb' }}>
              <h4 style={{ color: '#1a237e', fontWeight: 700, marginBottom: '1rem', fontSize: '1.3rem', letterSpacing: '1px' }}>MOBILE APP DEVELOPMENT</h4>
              <p style={{ color: '#222', fontSize: '1.05rem' }}>Reach your customers on any device with our custom mobile app development services. We create intuitive, high-performance apps for iOS and Android, ensuring your business is always at your clients' fingertips.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
