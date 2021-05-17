import React from 'react';
import './Btn.css';
import { btnSizes } from '../btnSizes';
import { normalBtnVariants } from './normalBtnVariants';
import { ButtonProps } from '../Button.types';

export interface BtnProps extends ButtonProps {
  disableRipple?: boolean;
}

export const Btn: React.FC<BtnProps> = ({
  children,
  className,
  size = 'md',
  variant = 'default',
  disableRipple = false,
  shape = 'rounded',
  ...other
}) => {
  return (
    <button
      type="button"
      className={[
        'btn',
        'btn--normal',
        `${!disableRipple && 'ripple'}`,
        `${shape === 'rounded' && 'border-radius--default-btn'}`,
        `${shape === 'capsule' && 'border-radius--capsule'}`,
        `${btnSizes[size]}`,
        `${variant ? normalBtnVariants[variant] : ''}`,
        `${className}`,
      ].join(' ')}
      {...other}
    >
      {children || 'default text'}
    </button>
  );
};
