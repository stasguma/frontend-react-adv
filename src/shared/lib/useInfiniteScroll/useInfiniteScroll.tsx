import type { RefObject } from 'react';

import { useEffect } from 'react';
import { useIntersection } from '@/shared/lib';

interface IUseInfiniteScrollProps {
  onLoadMore: () => void;
  scrollContainerRef?: RefObject<HTMLElement>;
}

export function useInfiniteScroll({ onLoadMore, scrollContainerRef }: IUseInfiniteScrollProps) {
  const { ref, entry } = useIntersection<HTMLElement>(
    { root: scrollContainerRef?.current ?? null, threshold: 1 }
  );

  useEffect(() => {
    if (entry?.isIntersecting) {
      onLoadMore();
    }
  }, [onLoadMore]);

  return { ref };
}
