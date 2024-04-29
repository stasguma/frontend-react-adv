export type { ProfileSchema, IProfile } from './model/types/profileSchema';
export {
  profileSlice,
  selectProfileData,
} from './model/slice/profileSlice';
export { profileApi, useMyProfileQuery, useProfileQuery } from './api/profileApi';
export { profileHandlers } from './api/__mocks__/profileHandlers';
export { UserProfileCard } from './ui/UserProfileCard/UserProfileCard';
