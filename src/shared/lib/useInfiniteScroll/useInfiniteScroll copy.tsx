import type { RefObject } from 'react';
import { useEffect } from 'react';

interface IUseInfiniteScrollProps {
  callback: () => void;
  triggerRef: RefObject<HTMLElement>;
  wrapperRef?: RefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: IUseInfiniteScrollProps) {
  const options = {
    root: wrapperRef?.current ?? null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (triggerEl) {
      observer.observe(triggerEl);
    }

    return () => {
      if (triggerEl) {
        observer.unobserve(triggerEl);
      }
    };
  }, [callback, triggerRef]);
}
