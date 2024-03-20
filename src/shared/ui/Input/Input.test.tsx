import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  test('render a default input', () => {
    render(<Input value="default value" />);
    const inputEl = screen.getByDisplayValue('default value');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field');
  });

  test('render an input with label', () => {
    render(<Input id="username" label="Username" />);
    const inputEl = document.querySelector('.input .input__label');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__label');
  });

  test('render an input with placeholder', () => {
    render(<Input value="default value" placeholder="Username" />);
    const inputEl = screen.getByPlaceholderText('Username');
    expect(inputEl).toBeInTheDocument();
  });

  test('render a large size input', () => {
    render(<Input value="default value" size="lg" />);
    const inputEl = screen.getByDisplayValue('default value');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field input__field--large');
  });

  test('render a small size input', () => {
    render(<Input value="default value" size="sm" />);
    const inputEl = screen.getByDisplayValue('default value');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input__field input__field--small');
  });

  test('render a danger validate status', () => {
    render(<Input id="value" validateStatus="danger" />);
    const inputEl = document.getElementById('value')?.closest('.input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input input--danger');
  });

  test('render a warning validate status', () => {
    render(<Input id="value" validateStatus="warning" />);
    const inputEl = document.getElementById('value')?.closest('.input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveClass('input input--warning');
  });
});
