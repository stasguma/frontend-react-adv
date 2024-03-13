import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  test('render', () => {
    render(<Input />);
    expect(screen.getByText('Input')).toBeInTheDocument();
  });
});
