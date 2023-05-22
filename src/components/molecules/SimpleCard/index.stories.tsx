import type { Meta, StoryObj } from '@storybook/react';
import { SimpleCard } from './index';

const meta: Meta<typeof SimpleCard> = {
  title: 'molecules/SimpleCard',
  component: SimpleCard,
  argTypes: {
    SimpleCardTypes: {
      control: { type: 'radio' },
      options: ['small', 'middle', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SimpleCard>;

export const Large: Story = {
  args: {
    SimpleCardTypes: 'large',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
    thumbnail: '',
  },
};

export const Middle = {
  args: {
    SimpleCardTypes: 'middle',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
    thumbnail: '',
  },
};

export const Small = {
  args: {
    SimpleCardTypes: 'small',
    name: 'TextTextTextTextTextTextTextTextTextTextTextTextText',
    thumbnail: '',
  },
};