import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography';
import { Input } from './Input';

const { Text } = Typography;

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Input
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
      <Input
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
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="with-placeholder-1"
        id="with-placeholder-1"
        placeholder="Placeholder"
      />
    </div>
  ),
};

export const InputSizes: Story = {
  name: 'Input sizes',
  render: () => (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="default-1"
        placeholder="Large Size"
        size="lg"
      />
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="default-2"
        placeholder="Medium Size"
        size="md"
      />
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
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
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="default-1"
        placeholder="Default"
      />
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="danger-status"
        placeholder="Danger"
        validateStatus="danger"
      />
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="warning-status"
        placeholder="Warning"
        validateStatus="warning"
      />
    </div>
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="with-error-1"
        id="with-error-1"
        placeholder="Enter the name"
        errorEl={<Text color="danger">Error message</Text>}
      />
    </div>
  ),
};
