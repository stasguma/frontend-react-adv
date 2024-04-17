import { render, screen } from '@testing-library/react';

import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
  test('render a skeleton', () => {
    render(<Skeleton width={300} height={20} />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  test('render a circle skeleton', () => {
    render(
      <Skeleton
        width={300}
        height={20}
        circle
      />
    );
    const skeletonEl = screen.getByTestId('skeleton');
    expect(skeletonEl).toBeInTheDocument();
    expect(skeletonEl).toHaveClass('skeleton');
  });

  test('render with a rows prop', () => {
    render(
      <Skeleton
        width={300}
        height={20}
        rows={5}
      />
    );
    const skeletonEls = screen.getAllByTestId('skeleton');
    expect(skeletonEls).toHaveLength(5);
    expect(skeletonEls[0]).toHaveClass('skeleton skeleton--row');
  });
});
