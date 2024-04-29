import type { Output } from 'valibot';
import { Country, Currency } from '@/shared/consts';

import { object, string, number, minLength, email, picklist, optional } from 'valibot';

export const ProfileFormSchema = object({
  id: number(),
  username: string([minLength(1, 'Field is required')]),
  email: string([email('Email address is not correct')]),
  city: string(),
  country: picklist(
    Object.values(Country),
    'Please select your country.'
  ),
  currency: picklist(
    Object.values(Currency),
    'Please select your currency.'
  ),
  avatarUrl: optional(string()),
  role: picklist(['admin', 'user'], 'Please select your role'),
});

export type IProfileForm = Output<typeof ProfileFormSchema>;
