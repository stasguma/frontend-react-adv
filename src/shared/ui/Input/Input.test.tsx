import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  test('render a default input', () => {
    /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
    render(<Input register={() => null} defaultValue="default value" />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field');
  });

  test('render an input with label', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        id="username"
        label="Username"
      />
    );
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    const labelEl = inputEl.previousSibling;
    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveClass('input__label');
  });

  test('render an input with placeholder', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        defaultValue="default value"
        placeholder="Username"
      />
    );
    const inputEl = screen.getByPlaceholderText('Username');
    expect(inputEl).toBeInTheDocument();
  });

  test('render a large size input', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        defaultValue="default value"
        size="lg"
      />
    );
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field input__field--large');
  });

  test('render a medium size input', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        defaultValue="default value"
        size="md"
      />
    );
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field input__field--medium');
  });

  test('render a small size input', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        defaultValue="default value"
        size="sm"
      />
    );
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field input__field--small');
  });

  test('render a danger validate status', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        id="value"
        validateStatus="danger"
      />
    );
    const inputEl = screen.getByRole('textbox').closest('.input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input input--danger');
  });

  test('render a warning validate status', () => {
    render(
      <Input
        /* @ts-expect-error: Type 'null' is not assignable to type 'UseFormRegisterReturn<any> */
        register={() => null}
        id="value"
        validateStatus="warning"
      />
    );
    const inputEl = screen.getByRole('textbox').closest('.input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input input--warning');
  });
});
