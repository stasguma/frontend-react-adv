export type { IUser, UserSchema } from './model/types/userSchema';
export {
  userSlice,
} from './model/slice/userSlice';
export { userApi, useGetUserByIdQuery } from './api/userApi';
export { userHandlers } from './api/__mocks__/userHandlers';
