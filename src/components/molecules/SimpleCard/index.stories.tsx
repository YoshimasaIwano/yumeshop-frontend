import type { Meta, StoryObj } from '@storybook/react';
import { SimpleCard } from './index';

const meta: Meta<typeof SimpleCard> = {
  title: 'molecules/SimpleCard',
  component: SimpleCard,
};

export default meta;

type Story = StoryObj<typeof SimpleCard>;

export const Index: Story = {
  args: {
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
    thumbnail: '',
  },
};