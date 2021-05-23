import React, { ReactElement } from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiThumbUpFill } from 'react-icons/ri';
import { kFormatter } from '../../../../../utils/utils';
import { BtnIcon } from '../../../../Button';
import { Image } from '../../../../Image';
import { FaEye, FaRegCommentDots, FaThumbsUp } from 'react-icons/fa';

export interface VideoCardBigProps {
  title?: string;
  videoId?: string;
  isPlaylistItem?: boolean;
  isHistoryItem?: boolean;
  isWatchLaterItem?: boolean;
  isLikedVideo?: boolean;
  thumbnail?: string;
  length?: string;
  description?: string;
  date?: string;
  playNowBtn?:
    | React.ReactNode
    | ReactElement
    | JSX.Element
    | HTMLElement
    | string;
  likes?: number;
  views?: number;
  category?: string[];
  channelLogo?: string;
  comments?: number;
}

export const VideoCardBig: React.FC<VideoCardBigProps> = ({
  isLikedVideo,
  isPlaylistItem,
  isWatchLaterItem,
  // isHistoryItem,
  description,
  // playNowBtn,
  // thumbnail,
  videoId,
  length,
  title,
  // date,
  likes,
  views,
  channelLogo,
  comments = 3,
}) => {
  return (
    <div
      className="flex flex--column justify-content--c align-items--c"
      style={{
        display: 'flex',
        backgroundColor: 'var(--grey-200)',
        margin: '0 auto',
        maxWidth: '300px',
      }}
    >
      <div
        className="flex flex--column align-items--c justify-content--c gap--lg pb--md"
        style={{
          borderRadius: '0.5rem',
        }}
      >
        <div
          className="flex flex--column align-items--c"
          style={{
            position: 'relative',
          }}
        >
          <Image
            responsive
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            style={{
              objectFit: 'cover',
              height: 'auto',
              width: '100%',
              borderTopLeftRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
            }}
          />
          <Image
            shape="circular"
            height="60"
            width="60"
            src={channelLogo}
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              padding: 'var(--space-xxxs)',
              backgroundColor: 'var(--grey-200)',
            }}
          />
          <span
            style={{
              position: 'absolute',
              right: 'var(--space-xxxs)',
              bottom: 'var(--space-xxxs)',
              padding: '0 var(--space-xxxs)',
              opacity: 0.9,
            }}
            className="text--light font-weight--500 text--sm"
          >
            {length}
          </span>
          <div
            className="flex gap--xs"
            style={{
              position: 'absolute',
              top: 'var(--space-xs)',
              right: 'var(--space-xs)',
              zIndex: 100000 /**Change This */,
            }}
          >
            {isPlaylistItem && (
              <BtnIcon
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'var(--themePrimary)',
                }}
                size="lg"
              >
                <MdPlaylistAddCheck className="text--light text--md" />
              </BtnIcon>
            )}
            {isLikedVideo && (
              <BtnIcon
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'var(--themePrimary)',
                  //   position: 'absolute',
                  //   top: 'var(--space-xs)',
                  //   right: 'var(--space-xs)',
                  //   zIndex: 100000,
                }}
                size="lg"
              >
                <RiThumbUpFill className="text--light text--md" />
              </BtnIcon>
            )}
            {isWatchLaterItem && (
              <BtnIcon
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'var(--themePrimary)',
                }}
                size="lg"
              >
                <AiFillClockCircle className="text--light text--md" />
              </BtnIcon>
            )}
          </div>
        </div>
        <div className="flex flex--column align-items--c justify-content--c gap--sm">
          <div className="flex flex--column align-items--c justify-content--c px--sm text-align--c">
            <div
              className="text--sm font-weight--600"
              style={{
                color: 'var(--grey-800)',
                // whiteSpace: 'nowrap',
                // width: '180px',
                // overflow: 'hidden',
                // textOverflow: 'ellipsis',
              }}
            >
              {title}
            </div>
            <div
              className="text--xxs text-align--l"
              style={{
                color: 'var(--grey-800)',
                whiteSpace: 'nowrap',
                width: '150px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </div>
          </div>
          <div className="flex flex-wrap--wrap align-items--c justify-content--c px--sm text-align--c gap--sm ">
            <div className="flex align-items--c gap--xxs">
              <FaThumbsUp />
              {/* <div className="text--sm">{likes} Likes</div> */}
              <div className="text--sm">{likes}</div>
            </div>
            <div className="flex align-items--c gap--xxs">
              {/* <div className="text--sm">{comments} comments</div> */}
              <FaRegCommentDots />
              <div className="text--sm">{comments}</div>
            </div>
            <div className="flex align-items--c gap--xxs">
              {/* <div className="text--sm">
                {views ? kFormatter(views) : 55} views
              </div> */}
              <FaEye />
              <div className="text--sm">{views ? kFormatter(views) : 55}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
