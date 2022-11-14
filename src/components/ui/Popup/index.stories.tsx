/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { PopupProps, Popup } from './index';

export default {
  title: 'UI components/Popup',
  component: Popup,
} as Meta;

const Template: Story<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Popup!</div>,
};
