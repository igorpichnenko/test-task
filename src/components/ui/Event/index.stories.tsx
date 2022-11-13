/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { EventPropsTypes, Event } from './index';

export default {
  title: 'UI components/Event',
  component: Event,
} as Meta;

const Template: Story<EventPropsTypes> = (args) => <Event {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
