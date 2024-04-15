import { sessionHandlers } from '@/entities/Session';
import { profileHandlers } from '@/entities/Profile';

export const handlers = [...sessionHandlers, ...profileHandlers];
