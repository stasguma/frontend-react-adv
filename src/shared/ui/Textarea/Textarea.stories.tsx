import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography';
import { Textarea } from './Textarea';

const { Text } = Typography;

const meta: Meta<typeof Textarea> = {
  title: 'Shared/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="default"
        id="default"
      />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="with-label-1"
        id="with-label-1"
        label="Label"
      />
    </div>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="with-placeholder-1"
        id="with-placeholder-1"
        placeholder="Placeholder"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="disabled-1"
        id="disabled-1"
        placeholder="Placeholder"
        disabled
      />
    </div>
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Textarea
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="with-error-1"
        id="with-error-1"
        placeholder="Subject"
        errorEl={<Text color="danger">Error message</Text>}
      />
    </div>
  ),
};
