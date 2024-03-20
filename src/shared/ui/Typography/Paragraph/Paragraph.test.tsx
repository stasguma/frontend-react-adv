import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('<Paragraph />', () => {
  test('render a default paragraph', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    const textEl = screen.getByText(/paragraph/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('paragraph');
  });

  test('render a small size paragraph', () => {
    render(<Paragraph size="sm">Paragraph</Paragraph>);
    const textEl = screen.getByText(/paragraph/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('paragraph paragraph--small');
  });
});
