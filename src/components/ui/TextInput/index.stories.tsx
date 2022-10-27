/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextInput, { TextInputPropsTypes } from './index';

export default {
  title: 'UI components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputPropsTypes> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
