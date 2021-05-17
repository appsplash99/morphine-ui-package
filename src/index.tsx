// import React, { FC, HTMLAttributes, ReactChild } from 'react';
// // Please do not use types off of a default export module or else Storybook Docs will suffer.
// // see: https://github.com/storybookjs/storybook/issues/9556
// /**
//  * A custom Thing component. Neat!
//  */
// export const Thing: FC<Props> = ({ children }) => {
//   return <div>{children || `the snozzberries taste like snozzberries`}</div>;
// };
/**
 * Contains all components that morphine-ui must ship
 */
export { Btn, BtnIcon, BtnInverted } from './components/Button';
export { Alert } from './components/Alert';
export { Avatar, DataBadgeIcon } from './components/DataDisplay';
export {
  LoaderBouncing,
  LoaderCometSpinner,
  LoaderDonutSpinner,
} from './components/Loader';
