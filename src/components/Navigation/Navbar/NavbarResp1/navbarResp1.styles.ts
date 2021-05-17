import React from 'react';

export const defaultDesktopMenuStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: 'var(--space-sm)',
  gap: 'var(--space-md)',
  width: '100%',
};
export const defaultMobileMenuStyles: React.CSSProperties = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 'calc(90vh)',
  padding: 'var(--space-sm)',
  gap: 'var(--space-md)',
};
