import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('<Text />', () => {
  test('renders a default text', () => {
    render(<Text>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text');
  });

  test('renders a small size text', () => {
    render(<Text size="sm">Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--small');
  });

  test('renders a success color text', () => {
    render(<Text color="success">Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--success');
  });

  test('renders a danger color text', () => {
    render(<Text color="danger">Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--danger');
  });

  test('renders a warning color text', () => {
    render(<Text color="warning">Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--warning');
  });

  test('renders a bold text', () => {
    render(<Text bold>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('B');
  });

  test('renders a strong text', () => {
    render(<Text strong>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('STRONG');
  });

  test('renders a italic text', () => {
    render(<Text italic>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('I');
  });

  test('renders a em text', () => {
    render(<Text em>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('EM');
  });

  test('renders a line-through text', () => {
    render(<Text crossOut>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--cross-out');
  });

  test('renders a underline text', () => {
    render(<Text underline>Text</Text>);
    const textEl = screen.getByText(/text/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('text text--underline');
  });
});
