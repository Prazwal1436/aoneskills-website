import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id="nav-bar" className="custom-navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="/">
          <img src="/img/logo.png" alt="Logo" style={{ height: '48px', borderRadius: '0', boxShadow: 'none' }} />
        </a>
        <button className="navbar-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li><Link href="/" legacyBehavior><a className="custom-link">Home</a></Link></li>
          <li><Link href="/services" legacyBehavior><a className="custom-link">Services</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className="custom-link">About</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a className="custom-link">Contact</a></Link></li>
        </ul>
      </div>
      <style jsx>{`
        .custom-navbar {
          background: linear-gradient(90deg, #e3eafc 0%, #f8faff 60%, #f3e7fa 100%);
          border-radius: 0 0 22px 22px;
          box-shadow: 0 2px 16px #6a82fb22;
          padding: 0.7rem 1.5rem;
          z-index: 1050;
          position: fixed;
          width: 100%;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-brand img {
          height: 48px;
          border-radius: 0;
          box-shadow: none;
          transition: none;
        }
        .navbar-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 1rem;
        }
        .bar {
          width: 28px;
          height: 3px;
          background: #6a82fb;
          margin: 4px 0;
          border-radius: 2px;
          transition: 0.3s;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links li {
          margin: 0 0.2rem;
        }
        .custom-link {
          font-weight: 600;
          font-size: 1.08rem;
          color: #14208a !important;
          border-radius: 8px;
          padding: 0.5rem 1.2rem;
          transition: background 0.2s, color 0.2s;
          display: inline-block;
        }
        .custom-link:hover, .custom-link:focus {
          background: linear-gradient(90deg, #6a82fb22 0%, #e5393522 100%);
          color: #e53935 !important;
          text-decoration: none;
        }
        .custom-link.active {
          background: #6a82fb22;
          color: #e53935 !important;
          box-shadow: 0 2px 8px #6a82fb22;
        }
        .btn:focus, .btn:active {
          box-shadow: 0 0 0 2px #6a82fb55 !important;
          outline: none !important;
        }
        @media (max-width: 900px) {
          .navbar-inner {
            flex-direction: row;
          }
          .navbar-toggle {
            display: flex;
          }
          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100vw;
            background: linear-gradient(90deg, #e3eafc 0%, #f8faff 60%, #f3e7fa 100%);
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 2rem;
            box-shadow: 0 8px 32px #6a82fb22;
            border-radius: 0 0 18px 18px;
            display: none;
          }
          .navbar-links.open {
            display: flex;
          }
          .navbar-links li {
            margin: 0.5rem 0;
          }
        }
        @media (max-width: 600px) {
          .custom-navbar {
            padding: 0.5rem 0.5rem;
            border-radius: 0 0 10px 10px;
          }
          .navbar-brand img {
            height: 38px;
          }
          .custom-link {
            font-size: 1rem;
            padding: 0.5rem 0.8rem;
          }
        }
      `}</style>
    </nav>
  );
}
