import { create } from '@storybook/theming';
import { color, typography, background } from '@storybook/theming/dist/modern';

export default create({
  base: 'light',

  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: background.app,
  appContentBg: color.lightest,
  appBorderColor: color.border,
  appBorderRadius: 4,

  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,

  // Text colors
  textColor: color.darkest,
  textInverseColor: color.lightest,
  textMutedColor: color.dark,

  // Toolbar default and active colors
  barTextColor: color.mediumdark,
  barSelectedColor: color.secondary,
  barBg: color.lightest,

  // Form colors
  inputBg: color.lightest,
  inputBorder: color.border,
  inputTextColor: color.darkest,
  inputBorderRadius: 4,

  brandTitle: 'TEST TASK',
  // brandUrl: 'https://example.com',
  brandImage: null,
});