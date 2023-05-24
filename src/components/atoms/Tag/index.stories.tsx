import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';

const meta: Meta<typeof Tag> = {
  title: 'atoms/Tags',
  component: Tag,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: [
        'red',
        'orange',
        'yellow',
        'mediumseagreen',
        'skyblue',
        'blue',
        'purple',
        'gray',
        'magenta',
        'pink',
        'brown',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Index: Story = {
  args: {
    color: 'red',
    name: '重要',
  },
};
