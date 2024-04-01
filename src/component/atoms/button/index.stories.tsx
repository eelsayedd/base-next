import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CustomButton from './index';
import { Props } from './interface';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    // Define other props here if necessary
  },
} as Meta<Props>;

const Template: StoryObj<Props> = {
  render: (args) => <CustomButton {...args} />,
};

export const Primary = {
  ...Template,
  args: {
    label: 'Primary Button', // Default label
    // Define default values for other props if necessary
  },
};
