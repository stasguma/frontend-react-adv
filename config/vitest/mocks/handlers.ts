import { sessionHandlers } from '@/entities/Session';
import { profileHandlers } from '@/entities/Profile';
import { articleHandlers } from '@/entities/Article';

export const handlers = [
  ...sessionHandlers,
  ...profileHandlers,
  ...articleHandlers,
];
