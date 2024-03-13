import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'default',
  },
};

export const WithLabel: Story = {
  args: {
    name: 'with-label-1',
    label: 'Label',
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: 'with-placeholder-1',
    placeholder: 'Placeholder',
  },
};

export const InputSizes: Story = {
  name: 'Input sizes',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Input
        name="default-1"
        placeholder="Large Size"
        size="lg"
      />
      <Input
        name="default-2"
        placeholder="Medium Size"
        size="md"
      />
      <Input
        name="default-3"
        placeholder="Small Size"
        size="sm"
      />
    </div>
  ),
};

export const InputValidateStatuses: Story = {
  name: 'Input validate statuses',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Input
        name="default-1"
        placeholder="Default"
      />
      <Input
        name="danger-status"
        placeholder="Danger"
        validateStatus="danger"
      />
      <Input
        name="warning-status"
        placeholder="Warning"
        validateStatus="warning"
      />
    </div>
  ),
};
