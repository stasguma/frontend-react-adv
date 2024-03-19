import type { UserSchema } from '@/entities/User';
import type { SessionSchema } from '@/entities/Session';

export interface StateSchema {
  user: UserSchema;
  session: SessionSchema;
}
