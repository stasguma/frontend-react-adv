import type { Country } from '@/shared/consts';
import type { TObjectValues } from '@/shared/types';

interface ICountryOptions {
  label: TObjectValues<typeof Country>;
  value: TObjectValues<typeof Country>;
}

interface ICityOptions {
  label: string;
  value: string;
}

export const countryOprions: ICountryOptions[] = [
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Germany', value: 'Germany' },
];

export const cityOptions: ICityOptions[] = [
  { label: 'Kyiv', value: 'Kyiv' },
  { label: 'London', value: 'London' },
  { label: 'Berlin', value: 'Berlin' },
];
