import React from 'react';
import { BtnIcon } from '../BtnIcon/BtnIcon';
import { IoIosArrowUp } from 'react-icons/io';
import { ButtonProps } from '../Button.types';

export interface BtnFloatingProps extends ButtonProps {}

export const BtnFloating: React.FC<BtnFloatingProps> = ({
  children,
  style,
}) => {
  return (
    <BtnIcon
      size="xl"
      style={{
        position: 'fixed',
        right: 'var(--space-sm)',
        bottom: 'var(--space-sm)',
        ...style,
        backgroundColor: 'var(--themePrimary)',
      }}
    >
      {!children && (
        <IoIosArrowUp className="text--xxl text--light font-weight--600" />
      )}
      {children}
    </BtnIcon>
  );
};
