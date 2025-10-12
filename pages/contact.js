
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills</title>
        <meta name="description" content="Contact A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak for web development, digital marketing, branding, SEO, and boosting services. Get in touch for top results." />
        <meta name="keywords" content="Contact Software Company Purbanchal, Province 1, Jhapa, Damak, Digital Marketing Contact, Web Development Contact, IT Agency Nepal, SEO Contact, Branding Contact" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://aoneskills.com.np/contact" />
        <meta property="og:title" content="Contact | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
        <meta property="og:description" content="Contact A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak for web development, digital marketing, branding, SEO, and boosting services. Get in touch for top results." />
        <meta property="og:url" content="https://aoneskills.com.np/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aoneskills.com.np/img/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
        <meta name="twitter:description" content="Contact A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak for web development, digital marketing, branding, SEO, and boosting services. Get in touch for top results." />
        <meta name="twitter:image" content="https://aoneskills.com.np/img/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'A-One Skills',
              image: 'https://aoneskills.com.np/img/logo.png',
              '@id': 'https://aoneskills.com.np',
              url: 'https://aoneskills.com.np',
              telephone: '+977-9842747572',
              email: 'contact@aoneskills.com.np',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Damak-5',
                addressLocality: 'Jhapa',
                addressRegion: 'Province 1',
                postalCode: '57207',
                addressCountry: 'NP'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.667058,
                longitude: 87.688051
              },
              openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
                ],
                opens: '09:00',
                closes: '18:00'
              }],
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
  <section className="contact-modern-section">
        <div className="contact-modern-hero">
          <h1>Let's Connect</h1>
          <p>We'd love to hear from you! Fill out the form or reach us directly via phone, email, or social media.</p>
        </div>
        <div className="contact-modern-content">
          <div className="contact-modern-form-card">
            <h2>Send Us a Message</h2>
            <form className="contact-modern-form">
              <div className="contact-modern-form-group">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows={5} required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-modern-info-card">
            <h2>Contact Info</h2>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+9779842747572">+977-9842747572</a></li>
              <li><strong>Email:</strong> <a href="mailto:contact@aoneskills.com.np">contact@aoneskills.com.np</a></li>
              <li><strong>Address:</strong> Damak-5, Jhapa, Nepal</li>
            </ul>
            <div className="contact-modern-socials">
              <a href="https://facebook.com/aoneskills" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com/company/aoneskills" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/aoneskills" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://aoneskills.com.np" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            <div className="contact-modern-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281.894289934624!2d87.68805098196302!3d26.667058029246792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58ff7a3c0003b%3A0xb9d7fd4ea424ef1b!2sA.One%20Skills%20Tech%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1759752651555!5m2!1sen!2snp"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contact-modern-section {
            background: linear-gradient(120deg, #f7faff 0%, #e3e8ff 100%);
            min-height: 100vh;
            padding: 0 0 3rem 0;
            margin-top: 0;
          }
          .contact-modern-hero {
            text-align: center;
            padding: 3rem 0 2rem 0;
            background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
            color: #fff;
            border-radius: 0 0 2rem 2rem;
            margin-bottom: 2rem;
          }
          .contact-modern-hero h1 {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0.7rem;
            letter-spacing: 1px;
          }
          .contact-modern-hero p {
            font-size: 1.2rem;
            font-weight: 500;
          }
          .contact-modern-content {
            display: flex;
            gap: 2.5rem;
            max-width: 1100px;
            margin: 0 auto;
            flex-wrap: wrap;
            background: #fff;
            border-radius: 2rem;
            box-shadow: 0 4px 32px #6a82fb33;
            padding: 2.5rem 2rem;
          }
          .contact-modern-form-card {
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
          .contact-modern-form-card h2 {
            color: #6a82fb;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .contact-modern-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .contact-modern-form-group {
            display: flex;
            gap: 1rem;
          }
          .contact-modern-form input,
          .contact-modern-form textarea {
            flex: 1;
            padding: 0.9rem 1.2rem;
            border-radius: 1rem;
            border: 2px solid #e3e8ff;
            font-size: 1.08rem;
            background: #fff;
            color: #14208a;
            outline: none;
            transition: border 0.2s;
          }
          .contact-modern-form input:focus,
          .contact-modern-form textarea:focus {
            border-color: #6a82fb;
          }
          .contact-modern-form button {
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
          .contact-modern-form button:hover {
            background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 4px 24px #fc5c7d22;
          }
          .contact-modern-info-card {
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
          .contact-modern-info-card h2 {
            color: #fc5c7d;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .contact-modern-info-card ul {
            list-style: none;
            padding: 0;
            margin: 0 0 1rem 0;
          }
          .contact-modern-info-card li {
            font-size: 1.08rem;
            margin-bottom: 0.7rem;
          }
          .contact-modern-info-card a {
            color: #6a82fb;
            text-decoration: none;
            font-weight: 600;
            margin-right: 1rem;
            transition: color 0.2s;
          }
          .contact-modern-info-card a:hover {
            color: #fc5c7d;
            text-decoration: underline;
          }
          .contact-modern-socials {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .contact-modern-map {
            width: 100%;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 2px 12px #6a82fb22;
          }
          @media (max-width: 900px) {
            .contact-modern-content {
              flex-direction: column;
              gap: 2rem;
            }
            .contact-modern-form-card, .contact-modern-info-card {
              min-width: 0;
            }
          }
          @media (max-width: 600px) {
            .contact-modern-hero h1 {
              font-size: 1.5rem;
            }
            .contact-modern-hero p {
              font-size: 1rem;
            }
            .contact-modern-content {
              padding: 1.2rem 0.2rem;
            }
            .contact-modern-form-card h2, .contact-modern-info-card h2 {
              font-size: 1.1rem;
            }
            .contact-modern-form input,
            .contact-modern-form textarea {
              font-size: 0.98rem;
              padding: 0.6rem 0.8rem;
              border-radius: 0.7rem;
            }
            .contact-modern-form button {
              font-size: 0.98rem;
              padding: 0.6rem 1.2rem;
            }
          }
        `}</style>
      </section>
  <WhyChooseUs />
  <Footer />
    </>
  );
}
