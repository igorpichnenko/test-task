/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { CalendarProps, Calendar } from './index';
import { eventsData } from '../../mocks';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventsData: eventsData
}

