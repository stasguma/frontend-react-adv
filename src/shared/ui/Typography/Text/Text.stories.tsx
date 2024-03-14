import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Shared/Typography/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
};

export const AllTexts: Story = {
  name: 'All texts',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text color="success">Lorem, ipsum dolor sit amet consectetur adipisicing! Success</Text>
      <Text color="danger">Lorem, ipsum dolor sit amet consectetur adipisicing! Danger</Text>
      <Text color="warning">Lorem, ipsum dolor sit amet consectetur adipisicing! Warning</Text>
      <Text bold>Lorem, ipsum dolor sit amet consectetur adipisicing! Bold</Text>
      <Text strong>Lorem, ipsum dolor sit amet consectetur adipisicing! Strong</Text>
      <Text italic>Lorem, ipsum dolor sit amet consectetur adipisicing! Italic</Text>
      <Text em>Lorem, ipsum dolor sit amet consectetur adipisicing! Em</Text>
      <Text crossOut>Lorem, ipsum dolor sit amet consectetur adipisicing! crossOut</Text>
      <Text underline>Lorem, ipsum dolor sit amet consectetur adipisicing! underline</Text>
    </div>
  ),
};

export const TextSizes: Story = {
  name: 'Text sizes',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text size="sm">Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
    </div>
  ),
};

export const TextColors: Story = {
  name: 'Text colors',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Text color="success">Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text color="danger">Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text color="warning">Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
    </div>
  ),
};

export const TextBold: Story = {
  name: 'Bold text',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Text bold>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text strong>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
    </div>
  ),
};

export const TextItalic: Story = {
  name: 'Italic text',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Text italic>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
      <Text em>Lorem, ipsum dolor sit amet consectetur adipisicing!</Text>
    </div>
  ),
};

export const TextCrossOut: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    crossOut: true,
  },
};

export const TextUnderline: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    underline: true,
  },
};
