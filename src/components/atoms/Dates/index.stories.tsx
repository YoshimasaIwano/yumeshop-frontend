import type { Meta, StoryObj } from '@storybook/react';
import { Dates } from './index';

const meta: Meta<typeof Dates> = {
  title: 'atoms/Dates',
  component: Dates,
};

export default meta;

type Story = StoryObj<typeof Dates>;

export const Index: Story = {
  args: {
    date: "2017-07-21T17:32:28Z",
  },
};