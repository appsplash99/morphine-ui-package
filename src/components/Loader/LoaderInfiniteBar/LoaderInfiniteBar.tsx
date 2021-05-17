import React from 'react';
import './LoaderInfiniteBar.css';
export interface LoaderInfiniteBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showLoaderBar?: boolean;
  style?: React.CSSProperties;
  bgColor?: string;
  progressColor?: string;
}

export const LoaderInfiniteBar: React.FC<LoaderInfiniteBarProps> = ({
  showLoaderBar,
  progressColor,
  bgColor,
  style,
}) => {
  return (
    <div
      className="loader-infinite-progress__container"
      style={{
        display: showLoaderBar ? '' : 'none',
        backgroundColor: bgColor,
        ...style,
      }}
    >
      <div
        className="loader-infinite-progress__bar"
        style={{
          backgroundColor: progressColor,
        }}
      ></div>
    </div>
  );
};
