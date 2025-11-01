import React from 'react';

export default function Button({ as = 'button', children, variant = 'primary', className = '', ...props }) {
  const Tag = as;
  const cls = `btn btn-${variant} ${className}`.trim();
  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  );
}
