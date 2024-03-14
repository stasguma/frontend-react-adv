import { render, screen } from '@testing-library/react';

import { Title } from './Title';

describe('<Title />', () => {
  test('renders a default title', () => {
    render(<Title>Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H1');
  });

  test('renders a variant 1 title', () => {
    render(<Title variant="1">Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H1');
  });

  test('renders a variant 2 title', () => {
    render(<Title variant="2">Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H2');
  });

  test('renders a variant 3 title', () => {
    render(<Title variant="3">Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H3');
  });

  test('renders a variant 4 title', () => {
    render(<Title variant="4">Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H4');
  });

  test('renders a variant 4 title with styles of variant 1', () => {
    render(<Title variant="4" as="h1">Title</Title>);
    const textEl = screen.getByText(/title/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl.tagName).toEqual('H4');
    expect(textEl).toHaveClass('h1');
  });
});
