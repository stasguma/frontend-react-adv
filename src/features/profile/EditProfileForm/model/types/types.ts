import type { Output } from 'valibot';
import { Country, Currency } from '@/shared/consts';

import { object, string, minLength, email, picklist, optional } from 'valibot';

export const ProfileFormSchema = object({
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
});

export type IProfileForm = Output<typeof ProfileFormSchema>;
