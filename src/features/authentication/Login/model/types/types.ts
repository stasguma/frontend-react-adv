import type { Output } from 'valibot';

import { object, string, minLength } from 'valibot';

export const LoginFormSchema = object({
  username: string([minLength(1, 'Field is required')]),
  password: string([minLength(4, 'Minimum length is 4')]),
});

export type ILoginForm = Output<typeof LoginFormSchema>;
