import { useCallback, useRef, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useIntersection<T extends HTMLElement = any>(options?: IntersectionObserverInit) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (element: T | null) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }

      if (element === null) {
        setEntry(null);
        return;
      }
      observer.current = new IntersectionObserver(([_entry]) => {
        setEntry(_entry);
      }, options);

      observer.current.observe(element);
    },
    [options?.root, options?.rootMargin, options?.threshold]
  );

  return { ref, entry };
}
