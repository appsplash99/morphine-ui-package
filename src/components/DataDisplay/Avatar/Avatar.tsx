import React from 'react';
import './Avatar.css';
import { avatarSizes } from './avatarSizes';

export interface AvatarProps {
  imageSrc?: 'string';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  showStatusBadge?: boolean;
  avatarStatus?: 'online' | 'offline';
  shape?: 'square' | 'rounded' | 'circular';
  badgePosition?: object;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  size = 'md',
  showStatusBadge = true,
  avatarStatus = 'online',
  shape = 'rounded',
  badgePosition = { bottom: 0, right: 0 },
  ...others
}) => {
  return (
    <div className="flex align-items--c justify-content--c">
      <div className="flex flex--column" style={{ position: 'relative' }}>
        <img
          src={imageSrc || 'https://material-ui.com/static/images/avatar/2.jpg'}
          alt="Avatar"
          className={[
            'avatar__img',
            `${avatarSizes[size].imageSize}`,
            `${shape === 'square' && 'avatar-image-square'}`,
            `${shape === 'rounded' && 'avatar-image-rounded'}`,
            `${shape === 'circular' && 'avatar-image-circular'}`,
          ].join(' ')}
          {...others}
        />
        {showStatusBadge && (
          <span
            className={[
              'border-radius--50',
              `${avatarSizes[size].badgeSize}`,
              `${avatarStatus === 'online' && 'bg--success'}`,
              `${avatarStatus === 'offline' && 'bg--danger'}`,
            ].join(' ')}
            style={{
              position: 'absolute',
              ...badgePosition,
            }}
          />
        )}
      </div>
    </div>
  );
};
