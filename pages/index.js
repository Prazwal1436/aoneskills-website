
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PackagesCarousel from '../components/PackagesCarousel';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best IT Company in Purbanchal & Software Company in Jhapa | A-One Skills</title>
        <meta name="description" content="A-One Skills is the best IT company in Purbanchal and the top software company in Jhapa, Nepal. We provide web development, branding, SEO, digital marketing, and IT solutions for businesses across Province 1 and Eastern Nepal." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="best IT company in Purbanchal, best software company in Jhapa, IT company Purbanchal, software development Jhapa, IT solutions Province 1, web development Purbanchal, digital marketing Jhapa, branding Purbanchal, SEO Jhapa, Province 1 software, Nepal software agency, A-One Skills" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta property="og:title" content="Best IT Company in Purbanchal & Software Company in Jhapa | A-One Skills" />
        <meta property="og:description" content="A-One Skills is the leading IT and software agency in Purbanchal and Jhapa, Nepal. Web, branding, SEO, boosting & more for businesses in Eastern Nepal." />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:url" content="https://aoneskills.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IT Company in Purbanchal & Software Company in Jhapa | A-One Skills" />
        <meta name="twitter:description" content="A-One Skills is the best IT company in Purbanchal and top software company in Jhapa, Nepal. Web, branding, SEO, boosting & more." />
        <meta name="twitter:image" content="/img/logo.png" />
        <link rel="canonical" href="https://aoneskills.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "A-One Skills",
            "url": "https://aoneskills.com/",
            "logo": "https://aoneskills.com/img/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jhapa",
              "addressRegion": "Province 1",
              "addressCountry": "Nepal"
            },
            "description": "A-One Skills is the best IT company in Purbanchal and the top software company in Jhapa, Nepal. We provide web development, branding, SEO, digital marketing, and IT solutions for businesses across Province 1 and Eastern Nepal.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9800000000",
              "contactType": "customer service"
            },
            "areaServed": ["Jhapa", "Purbanchal", "Province 1", "Eastern Nepal"]
          }
        `}</script>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <section className="section-padded section-bg">
          <div className="container">
            <h2 className="section-title">Our Packages</h2>
            <PackagesCarousel />
          </div>
        </section>
        <section className="section-padded">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <ServicesSection />
          </div>
        </section>
        <section className="section-padded section-bg">
          <div className="container">
           
            <AboutSection />
          </div>
        </section>
        <WhyChooseUs />
        <section className="section-padded">
          <div className="container">
          
            <TestimonialsSection />
          </div>
        </section>
        <section className="section-padded section-bg">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        main {
          background: #f8faff;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2.2rem;
          color: #14208a;
          letter-spacing: 0.01em;
        }
        .section-bg {
          background: linear-gradient(90deg, #e3eafc 0%, #f8faff 60%, #f3e7fa 100%);
          border-radius: 22px;
          box-shadow: 0 2px 16px #6a82fb22;
        }
        .section-padded {
          padding: 3.5rem 0;
        }
        @media (max-width: 900px) {
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
          }
          .section-padded {
            padding: 2rem 0;
          }
          .container {
            padding: 0 0.7rem;
          }
        }
        @media (max-width: 600px) {
          .section-title {
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
          }
          .section-padded {
            padding: 1.2rem 0;
          }
          .container {
            padding: 0 0.2rem;
          }
        }
      `}</style>
    </>
  );
}
