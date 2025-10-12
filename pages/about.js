
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

// TeamAvatar component for fallback avatar
function TeamAvatar({ name, alt, bg = '6a82fb', color = 'fff' }) {
  // Only use the first letter of the name for the avatar
  const initial = name && name.length > 0 ? name[0].toUpperCase() : '?';
  const avatarUrl = `https://ui-avatars.com/api/?name=${initial}&background=${bg}&color=${color}&length=1`;
  return (
    <img
      src={avatarUrl}
      alt={alt}
      className="about-modern-team-img"
    />
  );
}






export default function About() {
  return (
    <>
      <Head>
  <title>About | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills</title>
  <meta name="description" content="Learn about A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Discover our mission, team, and why we are #1 for digital marketing, web development, and boosting services." />
  <meta name="keywords" content="About Software Company Purbanchal, Province 1, Jhapa, Damak, Digital Marketing, Web Development, Branding, SEO, IT Agency Nepal, Facebook Boosting, Instagram Boosting" />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://aoneskills.com.np/about" />
  <meta property="og:title" content="About | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
  <meta property="og:description" content="Learn about A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Discover our mission, team, and why we are #1 for digital marketing, web development, and boosting services." />
  <meta property="og:url" content="https://aoneskills.com.np/about" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://aoneskills.com.np/img/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
  <meta name="twitter:description" content="Learn about A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Discover our mission, team, and why we are #1 for digital marketing, web development, and boosting services." />
  <meta name="twitter:image" content="https://aoneskills.com.np/img/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'A-One Skills',
              url: 'https://aoneskills.com.np',
              logo: 'https://aoneskills.com.np/img/logo.png',
              description: 'Best Software Company in Purbanchal, Province 1, Jhapa, Damak. Top Digital Marketing, Web Development, and Boosting Services.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Damak',
                addressLocality: 'Jhapa',
                addressRegion: 'Province 1',
                addressCountry: 'NP'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+977-9842747572',
                contactType: 'customer service',
                areaServed: 'NP'
              },
              sameAs: [
                'https://facebook.com/aoneskills',
                'https://linkedin.com/company/aoneskills',
                'https://instagram.com/aoneskills'
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <section className="about-modern-section">
        <div className="about-modern-hero">
          <h1>About A-One Skills</h1>
          <p>Nepal's leading digital agency, empowering businesses with innovative web solutions, marketing, and branding. <br /><span style={{fontWeight:700}}>8+ years of experience. Global reach. Award-winning results.</span></p>
        </div>
        <div className="about-modern-content">
          <div className="about-modern-cards">
            <div className="about-modern-card">
              <h2>Our Mission</h2>
              <p>Help businesses grow online with high-quality websites, creative branding, and effective marketing. We build long-term partnerships and deliver measurable results.</p>
              <ul>
                <li>Lead the digital industry with innovation</li>
                <li>Empower clients to dominate online</li>
                <li>Educate future digital marketers</li>
                <li>Continuous improvement & tech adoption</li>
              </ul>
            </div>
          </div>
          <WhyChooseUs />
          <div className="about-modern-cards">
            <div className="about-modern-card">
              <h2>Our Services</h2>
              <ul>
                <li>Website Design & Development</li>
                <li>E-Commerce Solutions</li>
                <li>Branding & Logo Design</li>
                <li>SEO & Content Marketing</li>
                <li>PPC & Paid Advertising</li>
                <li>Social Media & Influencer Marketing</li>
                <li>Copywriting & Content Creation</li>
                <li>Video Production & Animation</li>
                <li>Email & Automation Campaigns</li>
                <li>Business Consulting</li>
              </ul>
            </div>
            <div className="about-modern-card">
              <h2>Our Values</h2>
              <ul>
                <li><strong>Integrity:</strong> We deliver what we promise</li>
                <li><strong>Innovation:</strong> Embracing new ideas</li>
                <li><strong>Excellence:</strong> Highest quality in every project</li>
                <li><strong>Growth:</strong> Helping clients and team grow</li>
              </ul>
            </div>
          </div>
          <div className="about-modern-ceo">
            <div className="about-modern-ceo-card">
              <TeamAvatar alt="Prajjwal Parajuli, CEO" name="Prajjwal Parajuli" bg="6a82fb" color="fff" />
              <h3>Prajjwal Parajuli</h3>
              <p style={{ fontStyle: 'italic', color: '#388e3c', fontWeight: 500 }}>
                "Our mission is to empower every business to thrive in the digital world. We believe in innovation, transparency, and relentless pursuit of excellence. Thank you for trusting us with your growth journey."
              </p>
              <span style={{ color: '#14208a', fontWeight: 600 }}>Founder & CEO</span>
            </div>
          </div>
          <h2 className="about-modern-team-title">Meet Our Team</h2>
          <div className="about-modern-team-grid">
            <div className="about-modern-team-card">
              <div className="about-modern-team-img-container">
                <TeamAvatar alt="Founder & CEO" name="Prajjwal Parajuli" bg="6a82fb" color="fff" />
              </div>
              <h3>Prajjwal Parajuli</h3>
              <p>Founder & CEO<br />Digital Strategist, Full Stack Developer</p>
            </div>
            <div className="about-modern-team-card">
              <div className="about-modern-team-img-container">
                <TeamAvatar alt="Lead Designer" name="Rohan Chudal" bg="fc5c7d" color="fff" />
              </div>
              <h3>Rohan Chudal</h3>
              <p>Front End Designer<br />Web Developer</p>
            </div>
            <div className="about-modern-team-card">
              <div className="about-modern-team-img-container">
                <TeamAvatar alt="Marketing Specialist" name="Kushal Parajuli" bg="ffe082" color="14208a" />
              </div>
              <h3>Kushal Parajuli</h3>
              <p>Marketing Specialist<br />Content & Marketing</p>
            </div>
            <div className="about-modern-team-card">
              <div className="about-modern-team-img-container">
                <TeamAvatar alt="Graphic Designer" name="Nirmal Parajuli" bg="388e3c" color="fff" />
              </div>
              <h3>Nirmal Parajuli</h3>
              <p>Graphic Designer<br />Visual Storyteller</p>
            </div>
          </div>
          {/* Removed duplicate style jsx for .about-modern-team-img. Merged below. */}
          <div className="about-modern-process">
            <h2>Our Process</h2>
            <ol>
              <li><strong>Consultation:</strong> We understand your goals</li>
              <li><strong>Strategy:</strong> Custom solution for your business</li>
              <li><strong>Design & Development:</strong> We create and build</li>
              <li><strong>Launch & Support:</strong> We launch, optimize, and support</li>
            </ol>
          </div>
          <div className="about-modern-cta">
            <h2>Ready to Grow?</h2>
            <p>Contact us for a free consultation and discover how A-One Skills can help you achieve your digital goals.</p>
            <a href="/contact" className="about-modern-contact-btn">Contact Us</a>
          </div>
        </div>
        <style jsx>{`
          .about-modern-team-img-container {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 0.5rem auto;
            overflow: hidden;
            border-radius: 50%;
            background: #e3eafc;
            box-shadow: 0 2px 8px #6a82fb22;
            border: 2px solid #fff;
          }
          .about-modern-team-img {
            width: 100%;
            height: 100%;
            max-width: 70px;
            max-height: 70px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            display: block;
            margin: 0;
            padding: 0;
          }
          .about-modern-section {
            background: linear-gradient(120deg, #f7faff 0%, #e3e8ff 100%);
            min-height: 100vh;
            padding: 0 0 3rem 0;
            margin-top: 0;
          }
          .about-modern-hero {
            text-align: center;
            padding: 3rem 0 2rem 0;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            border-radius: 0 0 2rem 2rem;
            margin-bottom: 2rem;
          }
          .about-modern-hero h1 {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0.7rem;
            letter-spacing: 1px;
          }
          .about-modern-hero p {
            font-size: 1.2rem;
            font-weight: 500;
          }
          .about-modern-content {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2.5rem 2rem;
            background: #fff;
            border-radius: 2rem;
            box-shadow: 0 4px 32px #6a82fb33;
          }
          .about-modern-cards {
            display: flex;
            gap: 2.5rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
          }
          .about-modern-card {
            flex: 1 1 340px;
            min-width: 280px;
            background: #f7faff;
            border-radius: 1.5rem;
            box-shadow: 0 2px 16px #6a82fb22;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }
          .about-modern-card h2 {
            color: #6a82fb;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .about-modern-card ul {
            font-size: 1.08rem;
            color: #444;
            font-weight: 500;
            margin-bottom: 0.7rem;
            padding-left: 1.1rem;
          }
          .about-modern-ceo {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
          }
          .about-modern-ceo-card {
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 2px 12px #6a82fb22;
            padding: 1.2rem 1rem;
            text-align: center;
            max-width: 500px;
          }
          .about-modern-team-title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: #fc5c7d;
            margin-bottom: 1.2rem;
          }
          .about-modern-team-grid {
            display: flex;
            gap: 1.2rem;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 2rem;
          }
          .about-modern-team-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 12px #6a82fb22;
            padding: 1rem;
            text-align: center;
            flex: 1 1 180px;
            max-width: 220px;
          }
          .about-modern-process {
            margin-bottom: 2rem;
          }
          .about-modern-process ol {
            padding-left: 1.2rem;
            font-size: 1.08rem;
            color: #444;
            font-weight: 500;
          }
          .about-modern-cta {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .about-modern-contact-btn {
            display: inline-block;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            font-weight: 700;
            border-radius: 2rem;
            padding: 0.85rem 2.2rem;
            box-shadow: 0 2px 12px #6a82fb22;
            border: none;
            letter-spacing: 0.5px;
            font-size: 1.08rem;
            margin-top: 0.7rem;
            text-decoration: none;
            transition: background 0.2s, transform 0.2s;
          }
          .about-modern-contact-btn:hover {
            background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
            transform: scale(1.04);
          }
          @media (max-width: 900px) {
            .about-modern-cards {
              flex-direction: column;
              gap: 2rem;
            }
            .about-modern-card {
              min-width: 0;
            }
            .about-modern-content {
              padding: 1.2rem 0.2rem;
            }
          }
          @media (max-width: 600px) {
            .about-modern-hero h1 {
              font-size: 1.5rem;
            }
            .about-modern-hero p {
              font-size: 1rem;
            }
            .about-modern-card h2, .about-modern-team-title {
              font-size: 1.1rem;
            }
            .about-modern-team-img-container {
              width: 60px;
              height: 60px;
            }
            .about-modern-team-img {
              max-width: 60px;
              max-height: 60px;
            }
            .about-modern-contact-btn {
              font-size: 1rem;
              padding: 0.7rem 1.2rem;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
