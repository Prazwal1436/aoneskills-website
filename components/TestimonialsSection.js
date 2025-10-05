import React from 'react';
import Link from 'next/link';

export default function TestimonialsSection() {
    const testimonials = [
      {
        name: 'Sujan Shrestha',
        role: 'Founder, MY Cafe',
        text: 'A-One Skills delivered our website on time and exceeded our expectations. Their team is professional, creative, and always available for support.',
      },
      {
        name: 'Pratima Karki',
        role: 'Marketing Lead, Himalayan Foods',
        text: 'We saw a huge boost in online sales after A-One Skills revamped our e-commerce site and digital marketing. Highly recommended!',
      },
      {
        name: 'Ramesh Thapa',
        role: 'Director, Thapa Travels',
        text: 'Their branding and design work gave our business a fresh identity. The process was smooth and the results were fantastic.',
      },
      {
        name: 'Anita Gurung',
        role: 'Owner, Gurung Boutique',
        text: 'A-One Skills is my go-to for web and marketing. They listen, deliver, and care about my business growth.',
      },
    ];

    // Helper to get initials from name
    function getInitials(name) {
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
    }

  const [current, setCurrent] = React.useState(0);
  const slideCount = testimonials.length;

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, slideCount]);

  const goPrev = () => setCurrent((current - 1 + slideCount) % slideCount);
  const goNext = () => setCurrent((current + 1) % slideCount);

  return (
    <section id="testimonials" className="testimonials-section-bg">
      <div className="container">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-desc">
          Hear what our clients say about working with A-One Skills.
        </p>
        <div className="testimonials-carousel-wrap">
          <button className="testimonials-arrow left" onClick={goPrev} aria-label="Previous testimonial">
            &#8592;
          </button>
          <div className="testimonials-carousel">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`testimonial-card-carousel${idx === current ? ' active' : ''}`}
                style={{
                  transform: `translateX(${(idx - current) * 110}%)`,
                  opacity: idx === current ? 1 : 0,
                  zIndex: idx === current ? 2 : 1,
                  pointerEvents: idx === current ? 'auto' : 'none',
                }}
              >
                <div className="testimonial-avatar-wrap">
                    <span className="testimonial-avatar-icon">
                      {getInitials(t.name)}
                    </span>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-meta">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonials-arrow right" onClick={goNext} aria-label="Next testimonial">
            &#8594;
          </button>
        </div>
        <div className="testimonials-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`testimonials-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        <div className="text-center mt-3">
          <Link href="/about#testimonials" legacyBehavior>
            <a className="testimonials-learnmore-btn">See More Testimonials</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .testimonials-section-bg {
          background: linear-gradient(120deg, #e3e8ff 60%, #fff 100%);
          padding: 4rem 0 3rem 0;
          position: relative;
        }
        .testimonials-section-bg::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, #6a82fb22 0%, #fff0 80%);
          z-index: 0;
          border-radius: 50%;
        }
        .testimonials-title {
          font-weight: 800;
          font-size: 2.2rem;
          letter-spacing: 1px;
          color: #14208a;
          position: relative;
          z-index: 1;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .testimonials-desc {
          font-size: 1.15rem;
          color: #555;
          position: relative;
          z-index: 1;
          margin-bottom: 2.2rem;
          text-align: center;
        }
        .testimonials-carousel-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 1.2rem;
        }
        .testimonials-arrow {
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px #6a82fb22;
          cursor: pointer;
          margin: 0 10px;
          transition: background 0.2s, transform 0.2s;
        }
        .testimonials-arrow:hover {
          background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
          transform: scale(1.08);
        }
        .testimonials-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 420px;
          min-height: 320px;
          position: relative;
          overflow: hidden;
        }
        .testimonial-card-carousel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 2px 12px #6a82fb11;
          padding: 2.2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.6s cubic-bezier(.7,.2,.3,1), opacity 0.4s;
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }
        .testimonial-card-carousel.active {
          opacity: 1;
          z-index: 2;
          pointer-events: auto;
        }
        .testimonial-avatar-wrap {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          box-shadow: 0 2px 12px #6a82fb22;
        }
          .testimonial-avatar-icon {
            width: 62px;
            height: 62px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            font-size: 2rem;
            border: 3px solid #fff;
            box-shadow: 0 2px 12px #6a82fb22;
            letter-spacing: 1px;
          }
        .testimonial-content {
          text-align: center;
        }
        .testimonial-text {
          font-size: 1.08rem;
          color: #444;
          margin-bottom: 1.1rem;
          font-style: italic;
        }
        .testimonial-meta {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .testimonial-name {
          font-weight: 700;
          color: #14208a;
          font-size: 1.05rem;
        }
        .testimonial-role {
          font-size: 0.98rem;
          color: #6a82fb;
        }
        .testimonials-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .testimonials-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dbe2ff;
          margin: 0 5px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .testimonials-dot.active {
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
          transform: scale(1.2);
        }
        .testimonials-learnmore-btn {
          display: inline-block;
          font-weight: 700;
          font-size: 1.08rem;
          padding: 0.7rem 2rem;
          border-radius: 2rem;
          background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
          color: #fff;
          box-shadow: 0 2px 12px #6a82fb22;
          border: none;
          transition: background 0.2s, transform 0.2s;
          letter-spacing: 0.5px;
          text-decoration: none;
        }
        .testimonials-learnmore-btn:hover {
          background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
          color: #fff;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 4px 24px #fc5c7d22;
          text-decoration: none;
        }
        @media (max-width: 767px) {
          .testimonials-title {
            font-size: 1.3rem;
          }
          .testimonials-carousel {
            min-height: 260px;
            max-width: 98vw;
          }
          .testimonial-card-carousel {
            border-radius: 1rem;
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          .testimonial-avatar-wrap {
            width: 54px;
            height: 54px;
          }
          .testimonial-avatar {
            width: 46px;
            height: 46px;
          }
          .testimonials-learnmore-btn {
            font-size: 0.98rem;
            padding: 0.5rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
