module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    /** for mdx */
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],

  // //////////////////// NEW CONFIG ////////////
  // addons: [
  //   {
  //     name: '@storybook/addon-docs',
  //     options: {
  //       configureJSX: true,
  //       babelOptions: {},
  //       sourceLoaderOptions: null,
  //     },
  //   },
  // ],
  // ///////////////////// NEW CONFIG /////////////

  // // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
    reactDocgen: 'react-docgen',
  },
};