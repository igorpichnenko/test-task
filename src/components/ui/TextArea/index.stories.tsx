/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TextAreaProps, TextArea } from './index';

export default {
  title: 'UI components/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  required: true,
  placeholder: "Введите описание",
  name: "text"
};
