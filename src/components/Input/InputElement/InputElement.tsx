import React from 'react';
import {
  defaultInputElementStyles,
  inputElementShapeVariants,
} from './inputElement.styles';

export interface InputElementProps
  extends React.HTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  shape?: 'square' | 'rounded' | 'capsule';
}

export const InputElement: React.FC<InputElementProps> = ({
  style,
  shape = 'rounded',
  ...others
}) => {
  return (
    <input
      style={{
        ...defaultInputElementStyles,
        ...inputElementShapeVariants(shape),
        ...style,
      }}
      {...others}
    />
  );
};
