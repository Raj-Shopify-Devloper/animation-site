import React, { useEffect, useRef } from 'react';

const LetsTalkSection = () => {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const btn = btnRef.current;

    if (!section || !btn) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic strength (adjust 0.3 for more/less movement)
      const strength = 0.3;

      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0, 0)';
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="lets-connect" ref={sectionRef}>
      <div className="scrolling-text-container">
        <div className="scrolling-text-row">
          <span className="scrolling-text">LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND </span>
          <span className="scrolling-text">LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND </span>
        </div>
        <div className="scrolling-text-row reverse">
          <span className="scrolling-text">LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND </span>
          <span className="scrolling-text">LET'S CONNECT AND LET'S CONNECT AND LET'S CONNECT AND </span>
        </div>
      </div>

      <div className="cta-container">
        <a href="#" className="contact-btn" ref={btnRef}>
          Let's Contact
          <span className="arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default LetsTalkSection;
