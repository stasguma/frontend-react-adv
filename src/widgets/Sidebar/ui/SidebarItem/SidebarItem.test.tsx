import { screen } from '@testing-library/react';

import { renderWithAllProviders } from '@/shared/lib';
import { SidebarItem } from './SidebarItem';
import { SidebarItemList } from '../../model/consts/SidebarItemList';

describe('<SidebarItem />', () => {
  test('render one item', () => {
    const oneItem = SidebarItemList[0];

    renderWithAllProviders(<SidebarItem itemData={oneItem} />);
    expect(screen.getByText(/home/)).toBeInTheDocument();
  });

  test('render all items', () => {
    renderWithAllProviders(
      <ul>
        {SidebarItemList.map(item => (
          <SidebarItem key={item.name} itemData={item} />
        ))}
      </ul>
    );
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(SidebarItemList.length);
  });
});
