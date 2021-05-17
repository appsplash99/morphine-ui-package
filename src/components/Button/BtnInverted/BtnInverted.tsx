import React from 'react';
import './BtnInverted.css';
import { btnSizes } from '../btnSizes';
import { btnInvertedVariants } from './btnInvertedVariants';
import { ButtonProps } from '../Button.types';

export interface BtnInvertedProps extends ButtonProps {}

export const BtnInverted: React.FC<BtnInvertedProps> = ({
  children,
  className,
  size = 'md',
  variant = 'default',
  shape = 'rounded',
  ...others
}) => {
  return (
    <button
      type="button"
      className={[
        'btn',
        'btn--inverted',
        `${shape === 'square' && ''}`,
        `${shape === 'rounded' && 'border-radius--default-btn'}`,
        `${shape === 'capsule' && 'border-radius--capsule'}`,
        `${btnSizes[size]}`,
        `${variant ? btnInvertedVariants[variant] : ''}`,
        `${className}`,
      ].join(' ')}
      {...others}
    >
      {children || 'Default Btn'}
    </button>
  );
};
