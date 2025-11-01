import React, { useEffect, useRef } from 'react';

export default function ProgramLayout({ GlobalStyles, children }) {
  const liveRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver reveal for elements with data-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    // Click announcer for elements with data-announce
    const onClick = (e) => {
      const el = e.target.closest('[data-announce]');
      if (el && liveRef.current) {
        const msg = el.getAttribute('data-announce');
        liveRef.current.textContent = msg || '';
        // clear shortly after
        setTimeout(() => { if (liveRef.current) liveRef.current.textContent = ''; }, 1200);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="homepage-wrapper">
      {/* Accessible skip link */}
      <a className="skip-link" href="#main-content">Skip to content</a>
      {GlobalStyles && <GlobalStyles />}
      <main id="main-content">
        {children}
      </main>
      {/* ARIA live region for CTA announcements */}
      <div ref={liveRef} aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} />
    </div>
  );
}
