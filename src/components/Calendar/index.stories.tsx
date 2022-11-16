/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Calendar from './index';
import { eventsData } from '../../mocks';
import { CalendarPropsType } from './types';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarPropsType> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventsData,
};
