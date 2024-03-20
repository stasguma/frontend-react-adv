import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  test('render a base button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('render a large button', () => {
    render(<Button size="lg">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn--large');
  });

  test('render a small button', () => {
    render(<Button size="sm">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn--small');
  });

  test('render a filled variant button', () => {
    render(<Button variant="filled">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-filled');
  });

  test('render a outlined variant button', () => {
    render(<Button variant="outlined">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-outlined');
  });

  test('render a ghost variant button', () => {
    render(<Button variant="ghost">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-ghost');
  });

  test('render a primary color button', () => {
    render(<Button variant="filled" color="primary">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-primary');
  });

  test('render a secondary color button', () => {
    render(<Button variant="filled" color="secondary">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-secondary');
  });

  test('render a success color button', () => {
    render(<Button variant="filled" color="success">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-success');
  });

  test('render a danger color button', () => {
    render(<Button variant="filled" color="danger">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-danger');
  });

  test('render a warning color button', () => {
    render(<Button variant="filled" color="warning">Button</Button>);
    const buttonEl = screen.getByText('Button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass('btn btn-warning');
  });
});
