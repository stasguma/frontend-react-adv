import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/Sidebar';
import { renderWithRouter } from '@/shared/lib/tests/withRouter';

describe('<Sidebar />', () => {
  test('render', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test a toggle function', () => {
    renderWithRouter(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('is-collapsed');
  });
});
