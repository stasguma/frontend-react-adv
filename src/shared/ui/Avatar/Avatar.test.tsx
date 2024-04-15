import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

const imageUrl = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg';

describe('<Avatar />', () => {
  test('render an avatar with imageUrl', () => {
    render(<Avatar imageUrl={imageUrl} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('render an extra large avatar', () => {
    render(<Avatar imageUrl={imageUrl} size="xl" />);
    const avatarEl = screen.getByRole('img');
    expect(avatarEl).toBeInTheDocument();
    expect(avatarEl).toHaveClass('avatar__img');
    expect(avatarEl.parentElement).toHaveClass('avatar--xlarge');
  });

  test('render a large avatar', () => {
    render(<Avatar imageUrl={imageUrl} size="lg" />);
    const avatarEl = screen.getByRole('img');
    expect(avatarEl).toBeInTheDocument();
    expect(avatarEl).toHaveClass('avatar__img');
    expect(avatarEl.parentElement).toHaveClass('avatar--large');
  });

  test('render a medium avatar', () => {
    render(<Avatar imageUrl={imageUrl} size="md" />);
    const avatarEl = screen.getByRole('img');
    expect(avatarEl).toBeInTheDocument();
    expect(avatarEl).toHaveClass('avatar__img');
    expect(avatarEl.parentElement).toHaveClass('avatar--medium');
  });

  test('render a small avatar', () => {
    render(<Avatar imageUrl={imageUrl} size="sm" />);
    const avatarEl = screen.getByRole('img');
    expect(avatarEl).toBeInTheDocument();
    expect(avatarEl).toHaveClass('avatar__img');
    expect(avatarEl.parentElement).toHaveClass('avatar--small');
  });
});
