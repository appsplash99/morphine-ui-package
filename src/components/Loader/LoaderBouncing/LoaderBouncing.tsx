import React from 'react';
import './LoaderBouncing.css';

export interface LoaderBouncingProps {
  dotBgColor?: string;
  size?:
    | 'xxxs'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'xxxxl';
}

const loaderSizes = {
  xxxs: '0.25rem',
  xxs: '0.5rem',
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  xxl: '3rem',
  xxxl: '3.5rem',
  xxxxl: '4rem',
};

export const LoaderBouncing: React.FC<LoaderBouncingProps> = ({
  size = 'xs',
  dotBgColor,
}) => {
  return (
    <div className="bouncing-loader">
      <div
        className="bouncing-loader__dots"
        style={{
          height: loaderSizes[size],
          width: loaderSizes[size],
          backgroundColor: dotBgColor,
        }}
      />
      <div
        className="bouncing-loader__dots"
        style={{
          height: loaderSizes[size],
          width: loaderSizes[size],
          backgroundColor: dotBgColor,
        }}
      />
      <div
        className="bouncing-loader__dots"
        style={{
          height: loaderSizes[size],
          width: loaderSizes[size],
          backgroundColor: dotBgColor,
        }}
      />
    </div>
  );
};
