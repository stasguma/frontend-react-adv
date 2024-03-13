import type { ReactNode, FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import classes from './Modal.module.scss';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, Portal } from '@/shared/ui';

import XMarkIcon from '@/shared/assets/icons/x-mark.svg';

type TModalSizes = 'sm' | 'md' | 'lg';

const ModalSizesMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

interface IProps {
  children: ReactNode;
  isOpen?: boolean;
  size?: TModalSizes;
  onClose?: () => void;
}

export const Modal: FC<IProps> = (props) => {
  const {
    children,
    size = 'md',
    isOpen,
    onClose,
  } = props;

  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const onAnimationEnd = useCallback(() => {
    if (isClosing) {
      setIsClosing(false);
      onClose?.();
    }
  }, [isClosing, onClose]);

  useEffect(() => {
    // Listener should be on a backdrop element as it always has the longest duration among other animations
    const backdropEl = backdropRef.current;
    backdropEl?.addEventListener('animationend', onAnimationEnd);
    return () => {
      backdropEl?.removeEventListener('animationend', onAnimationEnd);
    };
  }, [isClosing, onAnimationEnd]);

  const closeHandler = () => {
    // if (contentRef.current === e.target) {
    //   return e.stopPropagation();
    // }

    setIsClosing(true);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsClosing(true);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid="modal"
        className={
          classNames(classes.modal, {
            'is-closing': isClosing,
            'is-open': isOpen,
          })
        }
      >
        <div
          data-testid="modal-backdrop"
          ref={backdropRef}
          className={classNames(classes.modal__backdrop)}
          onClick={closeHandler}
        />
        <div className={classNames(classes.modal__wrapper)}>
          <div
            ref={contentRef}
            className={classNames(
              classes.modal__content,
              { [classes[`modal__content--${ModalSizesMap[size]}`]]: size !== 'md' }
            )}
            role="dialog"
            aria-modal="true"
          >
            <Button
              data-testid="modal-close-btn"
              className={classes['modal__close-btn']}
              onClick={closeHandler}
              aria-label="close"
              aria-disabled="false"
            >
              <XMarkIcon />
            </Button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

// ModalComponent.displayName = 'Modal';
// ModalHeader.displayName = 'Modal.Header';
// ModalBody.displayName = 'Modal.Body';
// ModalFooter.displayName = 'Modal.Footer';

// export const Modal = Object.assign(ModalComponent, {
//   Header: ModalHeader,
//   Body: ModalBody,
//   Footer: ModalFooter,
// });
