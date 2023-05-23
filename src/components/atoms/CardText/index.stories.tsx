import type { Meta, StoryObj } from '@storybook/react';
import { CardText } from './index';

const meta: Meta<typeof CardText> = {
  title: 'atoms/CardText',
  component: CardText,
  argTypes: {
    CardTextTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardText>;

export const Large: Story = {
  args: {
    CardTextTypes: 'large',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
  },
};

export const Middle: Story = {
  args: {
    CardTextTypes: 'middle',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
  },
};

export const Small: Story = {
  args: {
    CardTextTypes: 'small',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
  },
};
