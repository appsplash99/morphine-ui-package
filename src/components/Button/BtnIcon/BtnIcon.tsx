import React from 'react';
import './BtnIcon.css';
import { GiMuscleUp } from 'react-icons/gi';
import { btnIconSizes, btnIconShapeVariants } from './btnIconSizes';
import { ButtonProps } from '../Button.types';

export interface BtnIconProps extends ButtonProps {
  disableRipple?: boolean;
}

export const BtnIcon: React.FC<BtnIconProps> = ({
  disableRipple = false,
  shape = 'circular',
  size = 'md',
  className,
  children,
  style,
  ...others
}) => {
  return (
    <button
      type="button"
      className={[
        'btn',
        'btn--icon',
        `${!disableRipple && 'ripple'}`,
        `${className}`,
      ].join(' ')}
      style={{
        ...btnIconSizes[size],
        ...btnIconShapeVariants(shape),
        /** has conflicts with ripple effect */
        overflow: !disableRipple ? 'visible' : '',
        ...style,
      }}
      {...others}
    >
      {children || <GiMuscleUp className="text--xl" />}
    </button>
  );
};
