import type { IComment } from '@/entities/Comment';

export const sortByDateDto = (dto: IComment[]): IComment[] => {
  const sorted = dto.toSorted((a, b) => b.createdAt - a.createdAt);
  return sorted;
};
