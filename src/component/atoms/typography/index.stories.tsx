import { Meta, StoryObj } from '@storybook/react';
import Typography from './index'; // Ensure this path is correct for your project structure
import { Props as TypographyProps } from './interface'; // Importing the props interface for your Typography component

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    component: {
      control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'] },
    },
    children: {
      control: 'text',
    },
    // Define additional props here as needed
  },
};

export default meta;

// Define the template using the StoryObj type
export const Primary: StoryObj<TypographyProps> = {
  args: {
    component: 'p', // Default selection for the component prop
    children: 'Hello', // Default text
    // Set default values for other props as needed
  },
  // You can add story-specific configurations here
};
