export type { ProfileSchema, IProfile } from './model/types/profileSchema';
export {
  profileSlice,
  selectProfileData,
} from './model/slice/profileSlice';
export { profileApi, useProfileQuery } from './api/profileApi';
export { profileHandlers } from './api/__mocks__/profileHandlers';
