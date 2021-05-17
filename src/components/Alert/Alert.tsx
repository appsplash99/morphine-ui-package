import React, { ReactElement } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { alertVariants } from './alertVariants';
import './Alert.css';

export interface AlertProps {
  children?: ReactElement | HTMLElement | string;
  shape?: 'square' | 'rounded' | 'capsule';
  alertIcon?: ReactElement | HTMLElement;
  handleHideAlert?: () => void;
  style?: React.CSSProperties;
  showAlert?: boolean;
  alertTitle?: string;
  className?: string;
  severity?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'light'
    | 'dark';
}

export const Alert: React.FC<AlertProps> = ({
  style,
  children,
  className,
  alertIcon,
  severity = 'default',
  alertTitle,
  shape = 'rounded',
  showAlert,
  handleHideAlert,
  ...others
}) => {
  return (
    <div
      className={[
        `alert ${alertVariants[severity].className}`,
        `${shape === 'square' && ''}`,
        `${shape === 'rounded' && 'border-radius--default-btn'}`,
        `${shape === 'capsule' && 'border-radius--capsule'}`,
        `${className}`,
      ].join(' ')}
      style={{ display: showAlert ? '' : 'none', ...style }}
      {...others}
    >
      <div className="flex align-items--fs justify-content--sb gap--md">
        <div className="flex align-items--fs gap">
          <div className="pt--xxs">
            {alertIcon || alertVariants[severity].icon}
          </div>
          <div className="flex flex--column align-self--fs align-items--fs gap--sm text--md font-weight--500">
            {!alertTitle ? alertVariants[severity].alertTitle : alertTitle}
            {children && <div className="text--sm">{children}</div>}
          </div>
        </div>
        <div>
          <IoIosCloseCircle
            onClick={handleHideAlert}
            className="text--lg font-weight--500 cursor--pointer"
          />
        </div>
      </div>
    </div>
  );
};
