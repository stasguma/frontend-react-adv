import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Shared/Typography/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet.',
  },
};

export const AllTitles: Story = {
  name: 'All titles',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Title>Lorem, ipsum dolor sit amet!</Title>
      <Title variant="2">Lorem, ipsum dolor sit amet!</Title>
      <Title variant="3">Lorem, ipsum dolor sit amet!</Title>
      <Title variant="4">Lorem, ipsum dolor sit amet!</Title>
    </div>
  ),
};
