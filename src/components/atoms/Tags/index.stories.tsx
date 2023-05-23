import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './index';

const meta: Meta<typeof Tags> = {
  title: 'atoms/Tags',
  component: Tags,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['red', 'orange'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tags>;

export const Red: Story = {
  args: {
    color: 'red',
    name: '重要',
  },
};

export const Orange: Story = {
  args: {
    color: 'orange',
    name: 'メンテナンス',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
    name: 'メンテナンス',
  },
};
