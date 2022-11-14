/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { EventFormProps, EventForm } from './index';

export default {
  title: 'UI components/EventForm',
  component: EventForm,
} as Meta;

const Template: Story<EventFormProps> = (args) => <EventForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => { },
  currentCheckedDate: "11/11/2022"
};
