import React from 'react';

export const defaultModalBackdropStyle: React.CSSProperties = {
  height: '200vh',
  width: '100vw',
  opacity: '0.6',
  backgroundColor: 'black',
  position: 'absolute',
  overflow: 'hidden',
};

export const defaultModalStyle: React.CSSProperties = {
  borderRadius: 'var(--space-sm)',
  backgroundColor: 'var(--themeSecondary)',
  height: 'auto',
  width: 'auto',
  margin: 'var(--space-sm)',
  position: 'absolute',
  overflow: 'hidden',
  top: '20vh',
};
