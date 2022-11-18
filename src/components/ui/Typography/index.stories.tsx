/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TypographyPropsType, Typography } from './index';

export default {
  title: 'UI components/Typography',
  component: Typography,
} as Meta;

const Template: Story<
  TypographyPropsType & React.HTMLAttributes<HTMLElement>
> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: 'h4',
  children: 'Календарь',
  md: true,
};
