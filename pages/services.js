import React, { useContext, useState } from 'react';
import { VisitorContext } from '../pages/_app';
import packageDataJson from '../packageData.json';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const visitor = useContext(VisitorContext);
  const country = visitor.country && packageDataJson[visitor.country] ? visitor.country : 'Nepal';
  const [packageData] = useState(packageDataJson);

  // Card styles for inline usage
  const cardStyle = {
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 8px 32px #1a237e11',
    padding: '2.5rem 2rem',
    margin: '0 auto 2.5rem auto',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const cardTitleStyle = {
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  };
  const cardDescStyle = {
    textAlign: 'center',
    fontSize: '1.15rem',
    marginBottom: '1.2rem',
  };
  const cardListStyle = {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: 400,
    fontSize: '1.08rem',
    marginBottom: '0.5rem',
  };
  const packageTitleStyle = {
    fontWeight: 700,
    marginTop: '1.5rem',
    color: '#388e3c',
  };
  const packageListStyle = {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: 400,
    fontSize: '1.08rem',
    marginBottom: '0.5rem',
  };

  // Get all categories for the selected country
  const categories = Object.keys(packageData[country] || {});

  return (
    <>
      <Head>
        <title>Services | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills</title>
        <meta name="description" content="Explore the services offered by A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Web development, branding, marketing, boosting, and more." />
        <meta name="keywords" content="Software Services Purbanchal, Province 1, Jhapa, Damak, Web Development, Branding, Digital Marketing, SEO, Facebook Boosting, Instagram Boosting, IT Services Nepal" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://aoneskills.com.np/services" />
        <meta property="og:title" content="Services | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
        <meta property="og:description" content="Explore the services offered by A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Web development, branding, marketing, boosting, and more." />
        <meta property="og:url" content="https://aoneskills.com.np/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aoneskills.com.np/img/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Best Software Company in Purbanchal | Province 1 | Jhapa | Damak | A-One Skills" />
        <meta name="twitter:description" content="Explore the services offered by A-One Skills, the best software company in Purbanchal, Province 1, Jhapa, Damak. Web development, branding, marketing, boosting, and more." />
        <meta name="twitter:image" content="https://aoneskills.com.np/img/og-image.jpg" />
        {/* Structured Data for Organization and Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "A-One Skills",
              "url": "https://aoneskills.com.np",
              "logo": "https://aoneskills.com.np/img/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+977-9842747572",
                "contactType": "customer service",
                "areaServed": "NP"
              }],
              "sameAs": [
                "https://facebook.com/aoneskills",
                "https://linkedin.com/company/aoneskills"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Software, Web, Mobile, Marketing, Design, AI, Consulting",
              "provider": {
                "@type": "Organization",
                "name": "A-One Skills"
              },
              "areaServed": country,
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `Services and Packages for ${country}`,
                "itemListElement": categories.map(category => ({
                  "@type": "OfferCatalog",
                  "name": category,
                  "itemListElement": (packageData[country][category] || []).map(pkg => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": pkg.name || pkg.title,
                      "description": pkg.desc,
                      "areaServed": country,
                      "offers": {
                        "@type": "Offer",
                        "price": pkg.price
                      }
                    }
                  }))
                }))
              }
            })
          }}
        />
      </Head>
      <Navbar />
      <main style={{ background: '#f7f7fa', minHeight: '100vh', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
          <h1 className="title mb-5" style={{ fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem' }}>Our Services</h1>
          {/* Country selection removed, now auto-detected by IP */}
          {/* --- Dynamically Render All Categories --- */}
          {categories.map(category => (
            <section key={category}>
              <h2 style={{ fontWeight: 800, fontSize: '2rem', margin: '2.5rem 0 1.2rem 0', color: '#6a82fb', textAlign: 'center' }}>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h2>
              <div className="services-grid">
                {(packageData[country][category] || []).map(pkg => (
                  <div className="services-card" style={cardStyle} key={pkg.name || pkg.title}>
                    <h3 style={cardTitleStyle}>{pkg.name || pkg.title}</h3>
                    <p style={cardDescStyle}>{pkg.desc}</p>
                    <ul style={cardListStyle}>
                      {pkg.features && pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <div style={{ marginTop: '1rem', fontWeight: 600, color: '#388e3c' }}>Price: {pkg.price}</div>
                    {/* Pass country to PackagesCarousel if used here: <PackagesCarousel country={country} category={category} /> */}
                    <a
                      href={`https://wa.me/9779842747572?text=${encodeURIComponent(
                        `Hello, I am interested in the following package/service:\n` +
                        `Name: ${pkg.name || pkg.title}\n` +
                        `Price: ${pkg.price}\n` +
                        `Description: ${pkg.desc || ''}\n` +
                        (pkg.features ? `Features: ${pkg.features.join(', ')}` : '')
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '1.5rem',
                        padding: '0.7rem 1.6rem',
                        background: 'linear-gradient(90deg,#25d366 60%,#075e54 100%)',
                        color: '#fff',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '1.08rem',
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px #075e5433',
                        transition: 'background 0.2s, transform 0.2s',
                      }}
                    >
                      Contact Us Now
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .services-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px #1a237e11;
          padding: 2.5rem 2rem;
          margin: 0 auto 2.5rem auto;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}

