import type { RootState } from '@/app/providers/StoreProvider';
// import { createSelector } from '@reduxjs/toolkit';

export const getUserName = (state: RootState) => state.users.name;

// createSelector(getUserName, (name) => name);
