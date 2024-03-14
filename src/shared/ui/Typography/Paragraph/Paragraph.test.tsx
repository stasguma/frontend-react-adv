import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

describe('<Paragraph />', () => {
  test('a default paragraph is render', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    const textEl = screen.getByText(/paragraph/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('paragraph');
  });

  test('a small size paragraph is render', () => {
    render(<Paragraph size="sm">Paragraph</Paragraph>);
    const textEl = screen.getByText(/paragraph/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass('paragraph paragraph--small');
  });
});
