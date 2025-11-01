import React, { useState, useId } from 'react';

export default function AccordionItem({ title, children, defaultOpen = false, id }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  // useId is stable in React 18+, fallback to random id when unavailable
  const uidBase = (typeof useId === 'function') ? useId() : (id || Math.random().toString(36).slice(2, 9));
  const contentId = `accordion-content-${uidBase}`;
  const buttonId = `accordion-button-${uidBase}`;

  const toggle = () => setIsOpen((v) => !v);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="accordion-item">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="accordion-title"
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        {title}
        <span aria-hidden>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div id={contentId} role="region" aria-labelledby={buttonId} className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}
