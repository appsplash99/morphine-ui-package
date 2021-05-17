import React, { ReactElement } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  iconDefaultStyles,
  iconShapeVariants,
  badgeDataDefaultStyles,
  badgeDataValidatedStyles,
} from './dataBadgeIcon.styles';

export interface DataBadgeIconProps {
  icon?: ReactElement | JSX.Element;
  showBadgeData?: boolean;
  disableRipple?: boolean;
  shape?: 'rounded' | 'circular' | 'square';
  data?: number;
  badgeDataStyleProp?: React.CSSProperties;
  iconStyleProp?: React.CSSProperties;
  style?: React.CSSProperties;
}

export const DataBadgeIcon: React.FC<DataBadgeIconProps> = ({
  icon,
  showBadgeData = true,
  disableRipple = false,
  shape = 'rounded',
  data = 0,
  badgeDataStyleProp = {},
  iconStyleProp = {},
}) => {
  return (
    <div
      style={{
        ...iconDefaultStyles,
        ...iconShapeVariants(shape),
        ...iconStyleProp,
        /** has conflicts with ripple effect */
        overflow: !disableRipple ? 'visible' : '',
      }}
      className={`${!disableRipple && 'ripple'}`}
    >
      {icon || <FaStar className="text--lg" />}
      {showBadgeData && (
        <span
          style={{
            ...badgeDataDefaultStyles,
            ...badgeDataValidatedStyles(data),
            ...badgeDataStyleProp,
          }}
        >
          {data}
        </span>
      )}
    </div>
  );
};
