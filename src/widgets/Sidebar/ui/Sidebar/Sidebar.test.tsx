import { fireEvent, render, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/Sidebar';

describe('<Sidebar />', () => {
  test('render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test a toggle function', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('is-collapsed');
  });
});
