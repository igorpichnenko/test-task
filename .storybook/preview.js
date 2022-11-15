import React from 'react';
import "../src/assets/variables/scss/_variables.scss";
import '../src/assets/fonts/font/stylesheet.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}