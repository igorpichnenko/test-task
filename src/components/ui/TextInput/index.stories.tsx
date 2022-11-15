/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TextInputPropsType, TextInput } from './index';

export default {
  title: 'UI components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputPropsType> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Укажите краткое название',
  required: true,
  name: "subtitle",
}
