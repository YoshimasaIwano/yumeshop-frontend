import type { Meta, StoryObj } from '@storybook/react';
import { CardText } from './index';

const meta: Meta<typeof CardText> = {
  title: 'atoms/CardText',
  component: CardText,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardText>;

export const Large: Story = {
  args: {
    size: 'large',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
  },
};
