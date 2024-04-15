import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const countryOprions = [
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Germany', value: 'Germany' },
];

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-def"
        id="country-def"
        options={countryOprions}
      />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-w-label"
        id="country-w-label"
        label="Country"
        options={countryOprions}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-disabled"
        id="country-disabled"
        label="Country"
        options={countryOprions}
        disabled
      />
    </div>
  ),
};

export const SelectSizes: Story = {
  name: 'Select sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-s-lg"
        id="country-s-lg"
        options={countryOprions}
        size="lg"
      />
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-s-md"
        id="country-s-md"
        options={countryOprions}
        size="md"
      />
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country-s-sm"
        id="country-s-sm"
        options={countryOprions}
        size="sm"
      />
    </div>
  ),
};
