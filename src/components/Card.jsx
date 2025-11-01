import React from 'react';

export default function Card({ title, children, tag, className = '' }) {
  return (
    <div className={`card ${className}`.trim()}>
      {tag && <div className="card-tag">{tag}</div>}
      {title && <h3>{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}
