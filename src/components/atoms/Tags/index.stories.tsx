import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './index';

const meta: Meta<typeof Tags> = {
  title: 'atoms/Tags',
  component: Tags,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['red', 'orange','yellow', 'mediumseagreen', 'skyblue', 'blue', 'purple'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tags>;

export const Index: Story = {
  args: {
    color: 'red',
    name: '重要',
  },
};
