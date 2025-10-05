import React from 'react';
import { useRouter } from 'next/router';

const packages = [
  {
    title: '💼 Basic Website',
    price: 'NPR 25,000',
    desc: 'Perfect for: Personal brands, portfolios, small businesses',
    features: [
      '5–6 Pages (Home, About, Services, Contact, etc.)',
      'Responsive & Mobile-Friendly Design',
      'Contact Form Integration',
      'Social Media Links',
      'Basic SEO Setup',
      '1 Month Free Support',
    ],
    delivery: '📅 Delivery: 7–10 Days',
  },
  {
    title: '🚀 Standard Business Website',
    price: 'NPR 45,000',
    desc: 'Perfect for: Companies, organizations, service providers',
    features: [
      'Up to 10 Pages with Semi-Custom Design',
      'Blog or News Section',
      'Google Map Integration',
      'Payment Gateway (Basic E-commerce Support)',
      'WhatsApp Chat Integration',
      'Basic On-Page SEO',
      '2 Months Free Support',
    ],
    delivery: '📅 Delivery: 2–3 Weeks',
  },
  {
    title: '🏆 Premium / Corporate Website',
    price: 'NPR 80,000',
    desc: 'Perfect for: Agencies, growing businesses, large companies',
    features: [
      'Up to 25 Pages – Fully Custom Design',
      'Advanced Animations & Effects',
      'User Login / Dashboard (Optional)',
      'Speed & Security Optimization',
      'SEO Optimization & Google Analytics',
      'Admin Panel / CMS Access',
      '3 Months Priority Support',
    ],
    delivery: '📅 Delivery: 3–5 Weeks',
  },
  {
    title: '🛒 E-Commerce Website',
    price: 'NPR 150,000',
    desc: 'Perfect for: Online shops, product-based businesses',
    features: [
      'Unlimited Product Listings',
      'Shopping Cart & Secure Checkout',
      'Payment Gateway Integration (eSewa, Khalti, etc.)',
      'Product Search, Filters, and Reviews',
      'Coupon & Discount System',
      'Inventory & Order Management',
      'Full SEO + Analytics + Pixel Integration',
      '6 Months Priority Support',
    ],
    delivery: '📅 Delivery: 4–6 Weeks',
  }
];

export default function PackageDetails() {
  const router = useRouter();
  const { id } = router.query;
  const pkg = packages[id];

  // Example hero images for each package (replace with your own images if available)
  const heroImages = [
    '/img/basic-website.png',
    '/img/standard-business.png',
    '/img/premium-corporate.png',
    '/img/ecommerce.png',
  ];
  const heroImg = heroImages[id] || '/img/default-package.png';

  if (!pkg) {
    return <div style={{ textAlign: 'center', marginTop: 80 }}><h2>Package not found</h2></div>;
  }

  return (
    <div className="package-details-bg">
      <div className="package-details-container">
        <div className="package-details-card">
          <div className="package-details-hero">
            <img src={heroImg} alt={pkg.title} className="package-details-img" />
            <div className="package-details-title-group">
              <h2 className="package-details-title">{pkg.title}</h2>
              <span className="package-details-price">{pkg.price}</span>
            </div>
          </div>
          <p className="package-details-desc">{pkg.desc}</p>
          <ul className="package-details-features">
            {pkg.features.map((f, j) => <li key={j} className="package-details-feature">{f}</li>)}
          </ul>
          <div className="package-details-delivery">
            <span>{pkg.delivery}</span>
          </div>
          <div className="package-details-support">
            <span>Support:</span> {pkg.features[pkg.features.length-1]}
          </div>
          <div className="package-details-contact">
            <span>Contact for Customization:</span> <a href="mailto:contact@aoneskills.com.np">contact@aoneskills.com.np</a>
          </div>
          <div className="package-details-actions">
            <button className="package-details-btn-primary" onClick={() => router.back()}>Go Back</button>
            <a
              href={`https://wa.me/9779842747572?text=Hello%2C%20I%20am%20interested%20in%20your%20website%20package%3A%20${encodeURIComponent(pkg.title)}`}
              className="package-details-btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >Contact Us</a>
          </div>
          {/* Contact Form */}
          <div className="package-details-form-wrapper">
            <h3 className="package-details-form-title">Request More Info / Book This Package</h3>
            <form
              className="package-details-form"
              onSubmit={e => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const phone = e.target.phone.value;
                const message = e.target.message.value;
                const text = `Hello, I am interested in your website package: ${pkg.title}%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
                window.open(`https://wa.me/9779842747572?text=${text}`, '_blank');
              }}
            >
              <div className="package-details-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="package-details-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="package-details-form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required placeholder="Your Phone Number" />
              </div>
              <div className="package-details-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3} placeholder="Tell us more about your needs or questions..." />
              </div>
              <button type="submit" className="package-details-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
  <style jsx>{`
        .package-details-form-wrapper {
          margin-top: 2.2rem;
          background: #f6f8ff;
          border-radius: 14px;
          padding: 1.5rem 1rem 1.2rem 1rem;
          box-shadow: 0 2px 12px rgba(106,130,251,0.07);
        }
        .package-details-form-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #14208a;
          margin-bottom: 1.1rem;
        }
        .package-details-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .package-details-form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .package-details-form-group label {
          font-size: 0.98rem;
          font-weight: 500;
          color: #14208a;
          margin-bottom: 0.3rem;
        }
        .package-details-form-group input,
        .package-details-form-group textarea {
          width: 100%;
          padding: 0.6rem 0.8rem;
          border-radius: 7px;
          border: 1.5px solid #e3e8ff;
          font-size: 1rem;
          margin-bottom: 0.1rem;
          background: #fff;
          transition: border 0.2s;
        }
        .package-details-form-group input:focus,
        .package-details-form-group textarea:focus {
          border: 1.5px solid #6a82fb;
          outline: none;
        }
        .package-details-form button[type="submit"] {
          margin-top: 0.5rem;
        }
        .package-details-bg {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(120deg, #f6f8ff 60%, #e3e8ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .package-details-container {
          width: 100%;
          max-width: 900px;
          padding: 3rem 2rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .package-details-card {
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 8px 32px rgba(106,130,251,0.13), 0 1.5px 8px rgba(20,32,138,0.07);
          padding: 3rem 3rem 2.5rem 3rem;
          width: 100%;
          max-width: 600px;
          text-align: center;
          position: relative;
        }
        @media (min-width: 1100px) {
          .package-details-container {
            max-width: 1200px;
            padding: 4rem 0;
          }
          .package-details-card {
            max-width: 700px;
            padding: 4rem 4rem 3rem 4rem;
          }
        }
        .package-details-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.2rem;
        }
        .package-details-img {
          width: 100%;
          max-width: 220px;
          max-height: 160px;
          object-fit: contain;
          border-radius: 14px;
          background: #f6f8ff;
          margin-bottom: 0.7rem;
          box-shadow: 0 2px 12px rgba(106,130,251,0.08);
        }
        .package-details-title-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .package-details-title {
          font-size: 1.45rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          color: #14208a;
        }
        .package-details-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: #e53935;
          margin-bottom: 0.2rem;
        }
        .package-details-desc {
          font-size: 1.08rem;
          font-weight: 500;
          margin-bottom: 1.1rem;
          color: #333;
        }
        .package-details-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.3rem 0;
          text-align: left;
          background: #f6f8ff;
          border-radius: 10px;
          display: inline-block;
          width: 100%;
          max-width: 340px;
          box-shadow: 0 1px 6px rgba(106,130,251,0.07);
        }
        .package-details-feature {
          font-size: 1rem;
          padding: 0.7rem 1.1rem;
          border-bottom: 1px solid #e3e8ff;
          color: #14208a;
        }
        .package-details-feature:last-child {
          border-bottom: none;
        }
        .package-details-delivery {
          font-weight: 600;
          color: #14208a;
          font-size: 1.05rem;
          margin-bottom: 0.7rem;
        }
        .package-details-support {
          margin-bottom: 0.7rem;
          color: #555;
          font-size: 0.98rem;
        }
        .package-details-contact {
          margin-bottom: 1.2rem;
          color: #555;
          font-size: 0.98rem;
        }
        .package-details-contact a {
          color: #6a82fb;
          text-decoration: underline;
        }
        .package-details-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .package-details-btn-primary {
          background: linear-gradient(90deg,#6a82fb,#14208a);
          border: none;
          color: #fff;
          font-weight: 700;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 2px 8px rgba(106,130,251,0.09);
          transition: background 0.2s;
        }
        .package-details-btn-primary:hover {
          background: linear-gradient(90deg,#14208a,#6a82fb);
        }
        .package-details-btn-outline {
          background: #fff;
          border: 2px solid #6a82fb;
          color: #6a82fb;
          font-weight: 700;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 2px 8px rgba(106,130,251,0.09);
          transition: background 0.2s, color 0.2s;
        }
        .package-details-btn-outline:hover {
          background: #6a82fb;
          color: #fff;
        }
        .package-details-form-wrapper {
          margin-top: 2.2rem;
          background: #f6f8ff;
          border-radius: 14px;
          padding: 1.5rem 1rem 1.2rem 1rem;
          box-shadow: 0 2px 12px rgba(106,130,251,0.07);
        }
        .package-details-form-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #14208a;
          margin-bottom: 1.1rem;
        }
        .package-details-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .package-details-form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .package-details-form-group label {
          font-size: 0.98rem;
          font-weight: 500;
          color: #14208a;
          margin-bottom: 0.3rem;
        }
        .package-details-form-group input,
        .package-details-form-group textarea {
          width: 100%;
          padding: 0.6rem 0.8rem;
          border-radius: 7px;
          border: 1.5px solid #e3e8ff;
          font-size: 1rem;
          margin-bottom: 0.1rem;
          background: #fff;
          transition: border 0.2s;
        }
        .package-details-form-group input:focus,
        .package-details-form-group textarea:focus {
          border: 1.5px solid #6a82fb;
          outline: none;
        }
        .package-details-form button[type="submit"] {
          margin-top: 0.5rem;
        }
        @media (max-width: 700px) {
          .package-details-container {
            max-width: 98vw;
            padding: 1rem 0.2rem;
          }
          .package-details-card {
            padding: 1.2rem 0.5rem 1.2rem 0.5rem;
          }
          .package-details-features {
            max-width: 98vw;
          }
          .package-details-form-wrapper {
            padding: 1rem 0.3rem 1rem 0.3rem;
          }
          .package-details-form-title {
            font-size: 1.05rem;
          }
          .package-details-form-group label {
            font-size: 0.95rem;
          }
          .package-details-form-group input,
          .package-details-form-group textarea {
            font-size: 0.95rem;
            padding: 0.5rem 0.6rem;
          }
          .package-details-btn-primary,
          .package-details-btn-outline {
            font-size: 0.95rem;
            padding: 0.6rem 1rem;
          }
        }
        @media (max-width: 480px) {
          .package-details-card {
            border-radius: 12px;
            padding: 0.7rem 0.1rem 0.7rem 0.1rem;
          }
          .package-details-img {
            max-width: 140px;
            max-height: 90px;
          }
          .package-details-title {
            font-size: 1.1rem;
          }
          .package-details-price {
            font-size: 1rem;
          }
          .package-details-features {
            max-width: 95vw;
          }
        }
      `}</style>
    </div>
  );
}
