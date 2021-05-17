import React from 'react';
import './LoaderDonutSpinner.css';
import {
  spinnerStyleXS,
  spinnerStyleSM,
  spinnerStyleMD,
  spinnerStyleLG,
  spinnerStyleXL,
  spinnerStyleXXL,
  spinnerStyleXXXL,
} from './donutSpinnerLoader.styles';

export interface LoaderDonutSpinnerProps {
  classname?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

export const LoaderDonutSpinner: React.FC<LoaderDonutSpinnerProps> = ({
  classname,
  style,
  variant = 'primary',
  size = 'md',
}) => {
  const donutSpinnerSizes = {
    xs: spinnerStyleXS,
    sm: spinnerStyleSM,
    md: spinnerStyleMD,
    lg: spinnerStyleLG,
    xl: spinnerStyleXL,
    xxl: spinnerStyleXXL,
    xxxl: spinnerStyleXXXL,
  };

  const spinnerVariants = {
    primary: 'var(--themePrimary)',
    secondary: 'var(--themeSecondary)',
    dark: 'var(--dark)',
    light: 'var(--light)',
  };

  return (
    <div
      className={['donut-spinner-loader', classname].join(' ')}
      style={{
        ...donutSpinnerSizes[size],
        borderLeftColor: spinnerVariants[variant],
        ...style,
      }}
    />
  );
};
