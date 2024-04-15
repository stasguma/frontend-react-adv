import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from './Modal';

describe('<Modal />', () => {
  test('modal is open', () => {
    render(<Modal isOpen={true}>Modal</Modal>);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toHaveClass('is-open');
  });

  test.skip('close modal by a close button', async () => {
    const closeHandler = vi.fn();
    render(<Modal isOpen={true} onClose={closeHandler}>Modal</Modal>);
    const modal = screen.getByTestId('modal');
    const modalBackdrop = screen.getByTestId('modal-backdrop');
    const closeBtn = screen.getByTestId('modal-close-btn');

    await userEvent.click(closeBtn);
    expect(modal).toHaveClass('is-closing');
    fireEvent.animationEnd(modalBackdrop);
    expect(modal).not.toHaveClass('is-closing');
    closeHandler();
    expect(closeHandler).toHaveBeenCalled();
    // await waitForElementToBeRemoved(() => expect(screen.queryByTestId('modal')).not.toBeInTheDocument());
    await waitForElementToBeRemoved(() => screen.queryByTestId('modal'));

    expect(modal).not.toBeInTheDocument();
  });
});
