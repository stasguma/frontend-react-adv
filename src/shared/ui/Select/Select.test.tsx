import { render, screen } from '@testing-library/react';

import { Select } from './Select';

const countryOprions = [
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Germany', value: 'Germany' },
];

describe('<Select />', () => {
  test('render a default select', () => {
    render(
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country"
        id="country"
        options={countryOprions}
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('render the select with a label', () => {
    render(
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country"
        id="country"
        options={countryOprions}
        label="Country"
      />
    );
    const selectEl = screen.getByRole('combobox');
    expect(selectEl).toBeInTheDocument();
    const labelEl = selectEl.previousSibling;
    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveClass('select__label');
  });

  test('render a small size select', () => {
    render(
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country"
        id="country"
        options={countryOprions}
        size="sm"
      />
    );
    const selectEl = screen.getByRole('combobox');
    expect(selectEl).toBeInTheDocument();
    expect(selectEl).toHaveClass('select__field--small');
  });

  test('render a medium size select', () => {
    render(
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country"
        id="country"
        options={countryOprions}
        size="md"
      />
    );
    const selectEl = screen.getByRole('combobox');
    expect(selectEl).toBeInTheDocument();
    expect(selectEl).toHaveClass('select__field--medium');
  });

  test('render a large size select', () => {
    render(
      <Select
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        name="country"
        id="country"
        options={countryOprions}
        size="lg"
      />
    );
    const selectEl = screen.getByRole('combobox');
    expect(selectEl).toBeInTheDocument();
    expect(selectEl).toHaveClass('select__field--large');
  });
});
