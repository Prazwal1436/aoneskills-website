import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us -  A-One Skills</title>
        <meta name="description" content="Learn about A-One Skills: our mission, values, team, and why we are the best digital agency for your business." />
      </Head>
      <Navbar />
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About A-One Skills</h1>
          <p className="about-lead">
            A-One Skills is Nepal's leading digital agency, dedicated to empowering businesses, entrepreneurs, and organizations with innovative web solutions, digital marketing, and branding expertise. With over <strong>8+ years of experience</strong>, our passionate team delivers results-driven strategies tailored to your unique goals.<br /><br />
            <strong>Our Vision:</strong> To be the #1 digital marketing company in Nepal and a global leader in online growth.<br />
            <strong>Our Approach:</strong> We combine creativity, data-driven strategies, and the latest technology to deliver measurable results for our clients. Our campaigns are designed to maximize ROI, boost brand awareness, and drive real business growth.<br />
            <strong>Industry Recognition:</strong> Awarded "Best Digital Agency Nepal 2024" and recognized for excellence in SEO, social media, and paid advertising.<br />
            <strong>Global Reach:</strong> We serve clients in Nepal, India, Australia, and beyond, helping brands expand internationally.<br />
            <strong>Innovation:</strong> Early adopters of AI-powered marketing, automation, and advanced analytics.<br />
            <strong>Client Success:</strong> Our portfolio includes top brands, startups, and NGOs who have achieved record growth through our digital marketing expertise.
          </p>
          <div className="about-grid">
            <div className="about-block">
              <h2>Our Mission</h2>
              <p>
                Our mission is to help businesses grow online by providing high-quality websites, creative branding, and effective digital marketing. We believe in building long-term partnerships and delivering measurable results that drive success.<br /><br />
                We strive to:
                <ul>
                  <li>Lead the digital marketing industry with innovative solutions.</li>
                  <li>Empower clients to dominate their markets online.</li>
                  <li>Educate and inspire the next generation of digital marketers.</li>
                  <li>Continuously improve through research, training, and technology adoption.</li>
                </ul>
              </p>
            </div>
            <div className="about-block">
              <h2>Why Choose Us?</h2>
              <ul>
                <li><strong>Expert Team:</strong> Our certified digital marketers, designers, and developers are highly skilled and passionate about innovation.</li>
                <li><strong>Proven Results:</strong> 200+ successful projects, 50+ SEO #1 rankings, and millions in client revenue generated.</li>
                <li><strong>Cutting-Edge Technology:</strong> We use AI, automation, and advanced analytics for smarter campaigns.</li>
                <li><strong>Comprehensive Services:</strong> From SEO and PPC to influencer marketing and video production.</li>
                <li><strong>Client-Centric Approach:</strong> We listen, understand, and deliver solutions that fit your needs and budget.</li>
                <li><strong>Continuous Support:</strong> From launch to growth, we’re with you every step of the way.</li>
                <li><strong>Transparent Reporting:</strong> Real-time dashboards and monthly performance reviews.</li>
                <li><strong>Global Perspective:</strong> Strategies that work locally and internationally.</li>
              </ul>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-block">
              <h2>Our Services</h2>
              <ul>
                <li>Custom Website Design & Development</li>
                <li>E-Commerce Solutions</li>
                <li>Branding & Logo Design</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>PPC & Paid Advertising (Google, Facebook, TikTok)</li>
                <li>Social Media Management & Influencer Marketing</li>
                <li>Content Creation & Copywriting</li>
                <li>Video Production & Animation</li>
                <li>Email & Automation Campaigns</li>
                <li>Business Consulting & Digital Strategy</li>
              </ul>
            </div>
            <div className="about-block">
              <h2>Our Values</h2>
              <ul>
                <li><strong>Integrity:</strong> We deliver what we promise.</li>
                <li><strong>Innovation:</strong> We embrace new ideas and technologies.</li>
                <li><strong>Excellence:</strong> We strive for the highest quality in every project.</li>
                <li><strong>Growth:</strong> We help our clients and team members grow.</li>
              </ul>
            </div>
          </div>
          <div className="about-team">
            <h2>Words from Our CEO</h2>
            <div className="ceo-message-card">
              <img src="/img/prajjwal.png" alt="Prajjwal Parajuli, CEO" className="team-img" />
              <h3>Prajjwal Parajuli</h3>
              <p style={{ fontStyle: 'italic', color: '#388e3c', fontWeight: 500 }}>
                "At A-One Skills, our mission is to empower every business to thrive in the digital world. We believe in innovation, transparency, and relentless pursuit of excellence. Our team is dedicated to delivering results that matter, building lasting partnerships, and setting new standards in digital marketing. Thank you for trusting us with your growth journey."
              </p>
              <span style={{ color: '#14208a', fontWeight: 600 }}>Founder & CEO</span>
            </div>
            <h2 style={{ marginTop: '2.2rem' }}>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <img src="/img/prajjwal.png" alt="Founder & CEO" className="team-img" />
                <h3>Prajjwal Parajuli</h3>
                <p>Founder & CEO<br />Digital Strategist, Full Stack Developer</p>
              </div>
              <div className="team-card">
                <img src="/images/team2.jpg" alt="Lead Designer" className="team-img" />
                <h3>Rohan Chudal</h3>
                <p>Front End Designer<br />Web Developer</p>
              </div>
              <div className="team-card">
                <img src="/images/team3.jpg" alt="Marketing Specialist" className="team-img" />
                <h3>Kushal Parajuli</h3>
                <p>Marketing Specialist<br />Content & Marketing</p>
              </div>
              <div className="team-card">
                <img src="/img/nirmal.png" alt="Graphic Designer" className="team-img" />
                <h3>Nirmal Parajuli</h3>
                <p>Graphic Designer<br />Visual Storyteller</p>
              </div>
          
            </div>
          </div>
          <div className="about-process">
            <h2>Our Process</h2>
            <ol>
              <li><strong>Consultation:</strong> We understand your goals and requirements.</li>
              <li><strong>Strategy:</strong> We plan a custom solution for your business.</li>
              <li><strong>Design & Development:</strong> We create and build your project.</li>
              <li><strong>Launch & Support:</strong> We launch, optimize, and support your growth.</li>
            </ol>
          </div>
          <div className="about-cta">
            <h2>Ready to Grow Your Business?</h2>
            <p>Contact us today for a free consultation and discover how A-One Skills can help you achieve your digital goals.</p>
            <a href="/contact" className="about-contact-btn">Contact Us</a>
          </div>
        </div>
        <style jsx>{`
          .ceo-message-card {
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 2px 12px #6a82fb22;
            padding: 1.2rem 1rem;
            margin-bottom: 2rem;
            text-align: center;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
          .about-section {
            background: #f7f9fc;
            padding: 2.2rem 0 1.5rem 0;
            margin-top: 4.2rem;
            min-height: 60vh;
          }
          .about-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .about-title {
            font-size: 2.1rem;
            font-weight: 800;
            color: #14208a;
            margin-bottom: 1.1rem;
            text-align: center;
          }
          .about-lead {
            font-size: 1.13rem;
            color: #444;
            font-weight: 500;
            margin-bottom: 1.3rem;
            text-align: center;
          }
          .about-grid {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
          }
          .about-block {
            flex: 1 1 320px;
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 2px 12px #6a82fb22;
            padding: 1.2rem 1rem;
            margin-bottom: 1rem;
          }
          .about-block h2 {
            font-size: 1.18rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
            color: #388e3c;
          }
          .about-block ul, .about-block ol {
            font-size: 1.03rem;
            color: #444;
            font-weight: 500;
            margin-bottom: 0.7rem;
            padding-left: 1.1rem;
          }
          .about-team {
            margin-bottom: 2rem;
          }
          .team-grid {
            display: flex;
            gap: 1.2rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .team-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 12px #6a82fb22;
            padding: 1rem;
            text-align: center;
            flex: 1 1 180px;
            max-width: 220px;
          }
          .team-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 0.7rem;
            background: #e3eafc;
          }
          .about-process {
            margin-bottom: 2rem;
          }
          .about-process ol {
            padding-left: 1.2rem;
          }
          .about-testimonials {
            margin-bottom: 2rem;
          }
          .testimonial-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 12px #fc5c7d22;
            padding: 1rem;
            margin-bottom: 1rem;
            font-size: 1.05rem;
            color: #444;
          }
          .testimonial-card span {
            display: block;
            color: #14208a;
            font-weight: 600;
            margin-top: 0.5rem;
          }
          .about-cta {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .about-contact-btn {
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
          .about-contact-btn:hover {
            background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
            transform: scale(1.04);
          }
          @media (max-width: 600px) {
            .about-title {
              font-size: 1.45rem;
            }
            .about-lead {
              font-size: 1.01rem;
            }
            .about-container {
              padding: 0 0.3rem;
            }
            .about-grid {
              flex-direction: column;
              gap: 1rem;
            }
            .about-block {
              padding: 0.9rem 0.5rem;
            }
            .team-grid {
              flex-direction: column;
              gap: 0.7rem;
            }
            .team-card {
              max-width: 100%;
              padding: 0.7rem;
            }
            .team-img {
              width: 60px;
              height: 60px;
            }
            .about-contact-btn {
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
