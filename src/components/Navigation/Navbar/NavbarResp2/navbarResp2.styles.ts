import React from 'react';

export const defaultDesktopMenuStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-xs) var(--space-lg)',
  gap: 'var(--space-md)',
  width: '100%',
  overflow: 'hidden',
  boxShadow: 'rgb(0 0 0 / 9%) 0px 2px 24px 0px',
};
export const defaultMobileMenuStyles: React.CSSProperties = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 'calc(90vh)',
  padding: 'var(--space-sm)',
  gap: 'var(--space-md)',
};
