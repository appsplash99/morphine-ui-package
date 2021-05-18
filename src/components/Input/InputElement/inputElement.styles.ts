import React from 'react';

export const defaultInputElementStyles: React.CSSProperties = {
  outline: 'none',
  border: '1px solid var(--themeSecondary)',
  padding: '0.75rem 0.75rem',
  borderRadius: 'var(--space-sm)',
  fontSize: '1rem',
  // background: 'transparent',
};

export const inputElementShapeVariants = (shape: string) => {
  if (shape === 'capsule') {
    return { borderRadius: '500px' };
  }
  if (shape === 'rounded') {
    return { borderRadius: 'var(--space-xs)' };
  }
  return { borderRadius: '0px' };
};
