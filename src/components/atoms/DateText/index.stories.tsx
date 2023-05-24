import type { Meta, StoryObj } from '@storybook/react';
import { DateText } from './index';

const meta: Meta<typeof DateText> = {
  title: 'atoms/Dates',
  component: DateText,
};

export default meta;

type Story = StoryObj<typeof DateText>;

export const Index: Story = {
  args: {
    date: '2017-07-21T17:32:28Z',
  },
};
