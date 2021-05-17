import React, { ReactElement } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * 'xxxs' works only for btnIcon and not btn and btnInverted
   */
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children?:
    | React.ReactNode
    | JSX.Element
    | ReactElement
    | HTMLElement
    | string;
  shape?: 'square' | 'rounded' | 'capsule';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'dark'
    | 'light'
    | 'error';
}
