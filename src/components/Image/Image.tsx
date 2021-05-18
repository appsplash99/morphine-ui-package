import React from 'react';
import { imageSizes } from './imageSizes';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  shape?: 'square' | 'rounded' | 'circular';
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  responsive?: boolean;
  src?: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({
  shape = 'square',
  size = 'md',
  responsive = false,
  src,
  alt,
  ...others
}) => {
  return (
    <img
      {...others}
      src={src || 'https://bit.ly/dan-abramov'}
      alt={alt || 'Dan Abramov'}
      height={`${responsive ? 'auto' : imageSizes[size]}`}
      width={`${responsive ? 'auto' : imageSizes[size]}`}
      className={[
        `${shape === 'square' && 'avatar-image-square'}`,
        `${shape === 'rounded' && 'avatar-image-rounded'}`,
        `${shape === 'circular' && 'avatar-image-circular'}`,
      ].join(' ')}
    />
  );
};
