/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { EventPropsType, Event } from './index';

export default {
  title: 'UI components/Event',
  component: Event,
} as Meta;

const Template: Story<EventPropsType> = (args) => <Event {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClickEvent: () => {},
  past: false,
  events: [
    {
      text: 'long text lorem ipsum long text lorem ipsum long text lorem ipsum',
      subtitle: 'long text lorem ipsum long text lorem ipsum',
      id: 7,
    },
  ],
};
