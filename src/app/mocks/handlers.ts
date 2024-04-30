import { sessionHandlers } from '@/entities/Session';
import { profileHandlers } from '@/entities/Profile';
import { userHandlers } from '@/entities/User';
import { articleHandlers } from '@/entities/Article';
import { commentHandlers } from '@/entities/Comment';

export const handlers = [
  ...sessionHandlers,
  ...profileHandlers,
  ...userHandlers,
  ...articleHandlers,
  ...commentHandlers,
];
