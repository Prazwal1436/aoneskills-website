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
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  // Carousel state
  const carouselImages = [
    '/img/rol.jpg',
    '/img/network.jpg',
    '/img/services1.jpg',
    '/img/services2.jpg'
  ];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Initialize smooth scroll functionality
    const initSmoothScroll = () => {
      const links = document.querySelectorAll('a[href*="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    };

    initSmoothScroll();
  }, []);

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Digital Extra - Best Digital Agency</title>
        <meta name="description" content="Best Digital Agency for Growth Marketing, Online Branding, and Animated Ads. Transform your business with our digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#667eea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#top">
            <Image src="/img/logo.png" alt="Digital Extra Logo" width={300} height={120} className="navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={handleNavToggle} style={{ background: '#14208a', border: 'none', borderRadius: '8px', padding: '8px 12px' }}>
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1) brightness(0.7)' }}>
              <i className="fa fa-bars" aria-hidden="true" style={{ color: '#fff', fontSize: 24 }}></i>
            </span>
          </button>
          <div className={`navbar-collapse${navOpen ? ' show' : ' collapse'}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#top">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">TESTIMINIALS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="banner">
        <div className="hero-section" style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(120deg, #1a237e 0%, #3949ab 50%, #e53935 100%)',
          borderRadius: '2rem',
          boxShadow: '0 8px 32px 0 rgba(26,35,126,0.15)',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1200px',
            padding: '2rem',
            gap: '2rem',
            flexWrap: 'wrap',
            animation: 'fadeIn 1.2s ease',
          }}>
            <div style={{ flex: '1 1 350px', minWidth: '260px' }}>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '1.2rem',
                letterSpacing: '1px',
                lineHeight: 1.1,
                background: 'linear-gradient(90deg, #fff 60%, #e53935 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'slideInDown 1.2s cubic-bezier(.77,0,.18,1)'
              }}>
                <span style={{ display: 'inline-block', animation: 'pulse 2s infinite' }}>BEST DIGITAL AGENCY</span>
              </h1>
              <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.95, animation: 'fadeIn 2s 0.5s both' }}>
                Transform your business with cutting-edge digital solutions that drive growth and maximize your online presence.<br /><br />
                We specialize in creating powerful digital strategies that connect your brand with your target audience.<br /><br />
                From stunning web design to comprehensive digital marketing campaigns, we help businesses thrive in the digital landscape.
              </p>
              <a href="https://www.youtube.com/watch?v=5qEbCaEWju0" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(90deg, #1a237e 60%, #e53935 100%)',
                color: '#fff',
                borderRadius: '2rem',
                padding: '0.7rem 1.5rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 2px 12px #1a237e33',
                textDecoration: 'none',
                transition: 'background 0.2s',
                animation: 'fadeIn 2s 1s both'
              }}>
                <Image src="/img/play.png" alt="Play" width={18} height={18} className="play-btn" />
                Watch Tutorials
              </a>
            </div>
            <div style={{ flex: '1 1 350px', minWidth: '260px', textAlign: 'center', animation: 'fadeIn 1.5s 0.5s both' }}>
              <Image
                className="img-fluid"
                src={carouselImages[currentImage]}
                alt="Banner"
                width={500}
                height={400}
                style={{ borderRadius: '24px', boxShadow: '0 4px 32px #1a237e33', maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container text-center">
          <h1 className="title">WHAT WE DO ?</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <Image src="/img/in.png" alt="Growth Marketing" width={100} height={100} className="service-img" />
              <h4>Growth Marketing</h4>
              <p>Accelerate your business growth with data-driven marketing strategies. We implement comprehensive campaigns that increase brand awareness, generate qualified leads, and boost your revenue through proven digital marketing techniques.</p>
            </div>
            <div className="col-md-4 services">
              <Image src="/img/brand.jpg" alt="Online Branding" width={100} height={100} className="service-img" />
              <h4>Online Branding</h4>
              <p>Build a powerful and memorable brand identity that resonates with your audience. Our branding experts create cohesive visual identities, compelling messaging, and consistent brand experiences across all digital touchpoints.</p>
            </div>
            <div className="col-md-4 services">
              <Image src="/img/animated.jpg" alt="Animated Ads" width={100} height={100} className="service-img" />
              <h4>Animated Ads</h4>
              <p>Capture attention with stunning animated advertisements that tell your story and drive engagement. Our creative team designs eye-catching animations that boost click-through rates and maximize your advertising ROI across all platforms.</p>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => {
            const details = document.getElementById('all-services-details');
            if (details) {
              const show = details.style.display !== 'flex';
              details.style.display = show ? 'flex' : 'none';
              if (show) {
                setTimeout(() => details.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }
            }
          }}>All Services</button>
          <div id="all-services-details" style={{ display: 'none', marginTop: '2rem', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
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

      <section id="about-us">
        <div className="container">
          <h1 className="title text-center">WHY CHOOSE US ?</h1>
          <div className="row">
            <div className="col-md-6 about-us">
              <p className="about-title">Why are we different</p>
              <ul>
                <li>Our Design & Delivery approach, commitment to sustainability, and culture of excellence are unique.</li>
                <li>Believe in doing business with honesty.</li>
                <li>Clients benefit from our collaborative process and dedication to serving as trusted advisors.</li>
                <li>We're driven by a commitment to continuously raise the bar on sustainability so that buildings function efficiently, responsibly, and as part of an integrated community.</li>
                <li>Digital Agency is driven from a passion for using technology, not for its own sake, or because its cool, but to make things better.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <Image src="/img/network.jpg" alt="Network" width={500} height={400} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container text-center">
          <h1 className="title">WHAT CLIENTS SAY ?</h1>
          <div className="row offset-1">
            <div className="col-md-5 testimonials">
              <p>Thank you for creating astonishing websites. I love your top-notch designs.</p>
              <Image src="/img/user.png" alt="User" width={60} height={60} />
              <p className="user-details"><b>Rohan Chudal</b><br />Founder of Digital Extra</p>
            </div>
            <div className="col-md-5 testimonials">
              <p>Thanks for your encouragement towards making a great web-design.</p>
              <Image src="/img/user2.jpg" alt="User" width={60} height={60} />
              <p className="user-details"><b>Prajjwal Parajuli</b><br />Co-founder of Digital Extra</p>
            </div>
          </div>
        </div>
      </section>

      <section id="social-media">
        <div className="container text-center">
          <p>FIND US ON SOCIAL MEDIA</p>
          <div className="social-icons">
            <a href="https://twitter.com/Mighty_Adebiyi">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/kunle.biyi">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/kunlebiyi">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/adebiyi-adekunle-02231b143/">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="footer">
  <div className="container" style={{ padding: '2rem 0' }}>
    <div className="footer-box" style={{ background: '#fff', color: '#14208a', borderRadius: '18px', boxShadow: '0 2px 16px 0 rgba(20,32,138,0.07)', padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: '1 1 260px', minWidth: '220px', textAlign: 'center' }}>
        <Image src="/img/logo.png" alt="Digital Extra Logo" width={200} height={80} className="footer-logo" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto 1rem' }} />
        <p>We are passionate about delivering exceptional digital experiences that drive real business results. Our team combines creativity with cutting-edge technology to help your brand stand out in the competitive digital landscape.</p>
      </div>
      <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
        <p style={{ fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>CONTACT US</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)' }}>
              <i className="fa fa-phone" style={{ color: '#fff', fontSize: 20 }}></i>
            </span>
            <span style={{ fontSize: '1.08rem' }}>984-2747572</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)' }}>
              <i className="fa fa-whatsapp" style={{ color: '#fff', fontSize: 20 }}></i>
            </span>
            <span style={{ fontSize: '1.08rem' }}>+977 984-2747572</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)' }}>
              <i className="fa fa-envelope" style={{ color: '#fff', fontSize: 20 }}></i>
            </span>
            <span style={{ fontSize: '1.08rem' }}>contact@aoneskills.com.np</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)' }}>
              <i className="fa fa-instagram" style={{ color: '#fff', fontSize: 20 }}></i>
            </span>
            <span style={{ fontSize: '1.08rem' }}>aoneskills · 39 followers</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)' }}>
              <i className="fa fa-link" style={{ color: '#fff', fontSize: 20 }}></i>
            </span>
            <a href="https://aoneskills.com.np" style={{ fontSize: '1.08rem', color: '#14208a' }}>aoneskills.com.np</a>
          </span>
        </div>
      </div>
      <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
        <p><b>SUBSCRIBE NEWLETTER</b></p>
        <input type="email" className="form-control" placeholder="Your Email" style={{ background: '#fff', color: '#14208a', border: '2px solid #14208a', fontSize: '1rem', padding: '0.75rem 1rem', marginBottom: '1rem', width: '100%', boxSizing: 'border-box' }} />
        <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Subscribe</button>
      </div>
    </div>
  </div>
      </section>

      {/* Floating Viber Button */}
      <div className="floating-viber">
        <a href="viber://chat?number=+2347033946824" className="viber-float" title="Chat with us on Viber">
          <i className="fa fa-phone-square"></i>
        </a>
      </div>
    </>
  )
}
