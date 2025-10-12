
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';
import { createContext } from 'react';

export const VisitorContext = createContext({ country: null, ip: null });

function MyApp({ Component, pageProps }) {
  const [visitor, setVisitor] = useState({ country: null, ip: null });

  useEffect(() => {
    async function fetchIPInfo() {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          setVisitor({ country: data.country_name, ip: data.ip });
        }
      } catch (err) {
        // fallback: do nothing
      }
    }
    fetchIPInfo();
  }, []);

  return (
    <VisitorContext.Provider value={visitor}>
      <>
        <Head>
          <title>A-One Skills - Best Digital Marketing Agency</title>
          <meta name="description" content="Best Digital Agency for Growth Marketing, Online Branding, and Animated Ads. Transform your business with our digital solutions." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/png" href="/img/logo.png" />
          <link rel="canonical" href="https://aoneskills.com.np" />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content="#6a82fb" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
           {/* Font Awesome CDN */}
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-papm6Qp1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'A-One Skills',
                url: 'https://aoneskills.com.np',
                logo: 'https://aoneskills.com.np/img/logo.png',
                sameAs: [
                  'https://facebook.com/aoneskills',
                  'https://linkedin.com/company/aoneskills'
                ],
                contactPoint: [{
                  '@type': 'ContactPoint',
                  telephone: '+977-9842747572',
                  contactType: 'customer service',
                  areaServed: 'NP'
                }]
              })
            }}
          />
          {/* Defer non-critical JS */}
          <script defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </Head>
        <Component {...pageProps} />
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
                <i className="fas fa-phone" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
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
        {/* Floating Scroll to Top Button */}
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
          <i className="fas fa-arrow-up"></i>
        </button>
        <style jsx global>{`
          .floating-contact {
            position: fixed;
            right: 2rem;
            bottom: 7.5rem;
            z-index: 999;
          }
          .contact-float {
            background: linear-gradient(90deg, #25d366 60%, #075e54 100%);
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 54px;
            height: 54px;
            box-shadow: 0 4px 16px #075e5433;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
          }
        `}</style>
      </>
    </VisitorContext.Provider>
  );
}

export default MyApp
