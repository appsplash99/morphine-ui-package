import React from 'react';

export const iconDefaultStyles: React.CSSProperties = {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
  width: '48px',
  fontSize: 'var(text--lg)',
  backgroundColor: 'lightblue',
  padding: 'var(--space-xs)',
};

export const badgeDataDefaultStyles: React.CSSProperties = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  // top: '-10px',
  top: '-0.25rem',
  // right: '-5px',
  right: '-0.5rem',
  backgroundColor: 'lightpink',
  fontSize: 'var(--text-sm)',
  height: '20px',
};

export const badgeDataValidatedStyles = (data: number) => {
  switch (true) {
    case data > 9:
      return {
        padding: '0.25rem 0.3rem',
        borderRadius: '500px',
      };
    case data > 0:
      return {
        padding: '0.25rem',
        width: '20px',
      };
    case data === 0 || !data:
      return { display: 'none' };

    default:
      return {};
  }
};

export const iconShapeVariants = (shape: string) => {
  if (shape === 'circular') {
    return { borderRadius: '50%' };
  }
  if (shape === 'rounded') {
    return { borderRadius: '20%' };
  }
  return { borderRadius: '0px' };
};
