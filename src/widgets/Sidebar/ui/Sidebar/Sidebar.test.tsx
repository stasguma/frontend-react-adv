import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '@/widgets/Sidebar';
import { renderWithAllProviders } from '@/shared/lib';

describe('<Sidebar />', () => {
  test('render', () => {
    renderWithAllProviders(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test a toggle function', () => {
    renderWithAllProviders(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('is-collapsed');
  });
});
