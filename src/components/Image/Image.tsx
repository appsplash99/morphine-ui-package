import React from 'react';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  shape?: 'square' | 'circular';
  responsive?: boolean;
  src?: string;
  alt?: string;
  height?: number | string;
  width?: number | string;
}

export const Image: React.FC<ImageProps> = ({
  shape = 'square',
  responsive = false,
  src,
  alt,
  width,
  height,
  ...others
}) => {
  return (
    <img
      {...others}
      src={src || 'https://bit.ly/dan-abramov'}
      alt={alt || 'Dan Abramov'}
      height={responsive ? 'auto' : `${height}`}
      width={responsive ? 'auto' : `${width}`}
      className={[
        `${shape === 'square' && 'avatar-image-square'}`,
        `${shape === 'circular' && 'avatar-image-circular'}`,
      ].join(' ')}
    />
  );
};
