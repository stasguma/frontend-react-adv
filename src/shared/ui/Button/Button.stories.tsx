import type { Meta, StoryObj } from '@storybook/react';

// import i18n from '@/shared/config/i18n/i18n';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Base',
    variant: 'base',
  },
};

export const FilledColors: Story = {
  name: 'Filled colors',
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="filled" color="primary">Primary</Button>
      <Button variant="filled" color="secondary">Secondary</Button>
      <Button variant="filled" color="success">Success</Button>
      <Button variant="filled" color="danger">Danger</Button>
      <Button variant="filled" color="warning">Warning</Button>
    </div>
  ),
};

export const OutlinedColors: Story = {
  name: 'Outlined colors',
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="danger">Danger</Button>
      <Button variant="outlined" color="warning">Warning</Button>
    </div>
  ),
};

export const GhostColors: Story = {
  name: 'Ghost colors',
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="ghost" color="primary">Primary</Button>
      <Button variant="ghost" color="secondary">Secondary</Button>
      <Button variant="ghost" color="success">Success</Button>
      <Button variant="ghost" color="danger">Danger</Button>
      <Button variant="ghost" color="warning">Warning</Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  name: 'Button sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <Button
        variant="filled"
        color="primary"
        size="lg"
      >
        Primary
      </Button>
      <Button
        variant="filled"
        color="primary"
      >
        Primary
      </Button>
      <Button
        variant="filled"
        color="primary"
        size="sm"
      >
        Primary
      </Button>
    </div>
  ),
};

export const Filled: Story = {
  args: {
    children: 'Primary',
    variant: 'filled',
    color: 'primary',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Outlined: Story = {
  args: {
    children: 'Primary',
    variant: 'outlined',
    color: 'primary',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Ghost: Story = {
  args: {
    children: 'Primary',
    variant: 'ghost',
    color: 'primary',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};
