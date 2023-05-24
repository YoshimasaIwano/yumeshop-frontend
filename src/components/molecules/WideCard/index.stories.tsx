import type { Meta, StoryObj } from '@storybook/react';
import { WideCard } from './index';

const meta: Meta<typeof WideCard> = {
  title: 'molecules/WideCard',
  component: WideCard,
};

export default meta;

type Story = StoryObj<typeof WideCard>;

export const Index: Story = {
  args: {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    title: 'メンテナンスのお知らせ',
    detail:
      '本日の19:00からメンテナンスのため、一時間ほどのサービス停止を予定しています。\n再開しだいメールにてアナウンスさせていただきます。\nご迷惑をおかけしますが、ご理解ご協力のほどをよろしくお願いいたします。',
    tags: [
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
        name: '重要',
        color: 'red',
        tagGroup: 'information',
      },
      {
        id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186d',
        name: 'メンテナンス',
        color: 'yellow',
        tagGroup: 'information',
      },
    ],
    announcedAt: '2017-07-21T17:32:28Z',
  },
};
