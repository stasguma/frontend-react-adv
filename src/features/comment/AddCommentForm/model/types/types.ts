import type { Output } from 'valibot';

import { object, string, minLength } from 'valibot';

export const AddCommentFormSchema = object({
  text: string([minLength(1)]),
});

export type IAddCommentForm = Output<typeof AddCommentFormSchema>;
