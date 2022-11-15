/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { EventPopupPropsType, EventPopup } from './index';

export default {
  title: 'UI components/EventPopup',
  component: EventPopup,
} as Meta;

const Template: Story<EventPopupPropsType> = (args) => <EventPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  isEventPopup: true,
  setEventPopup: () => { },
  handleDeleteEvent: () => { },
  currentEvent: {
    id: 6,
    event: [{ text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", subtitle: "lorem ipsum lorem ipsum lorem ipsum", id: 6 }],
    date: "11/11/22022"
  }
};
