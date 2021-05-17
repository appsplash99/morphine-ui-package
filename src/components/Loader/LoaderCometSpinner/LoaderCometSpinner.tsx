import React from 'react';
import './LoaderCometSpinner.css';

export interface LoaderCometSpinnerProps {
  style?: React.CSSProperties;
  color?: string;
}

export const LoaderCometSpinner: React.FC<LoaderCometSpinnerProps> = ({
  style,
  color,
  ...props
}) => {
  const defalutLoaderStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: `conic-gradient(#0000 10%, ${
      color ? color : 'var(--themePrimary)'
    })`,
    WebkitMask:
      'radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0)',
  };

  return (
    <div
      className="loader-comet-spinner"
      style={{
        ...defalutLoaderStyle,
        ...style,
      }}
      {...props}
    ></div>
  );
};
