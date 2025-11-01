import React from 'react';

// items: array of strings or nodes
export default function Ticker({ items = [], className = '', speed = 30 }) {
  // duplicate items for seamless scroll
  const all = [...items, ...items];

  return (
    <div className={`ticker-wrap ${className}`}>
      <div className="ticker-track" style={{ animationDuration: `${speed}s` }}>
        {all.map((it, i) => (
          <div className="ticker-item" key={i}>{it}</div>
        ))}
      </div>
    </div>
  );
}
