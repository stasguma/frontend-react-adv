export type { IComment, CommentSchema, AddCommentDto } from './model/types/commentSchema';
export {
  commentSlice,
} from './model/slice/commentSlice';
export { commentApi, useGetCommentsByArticleIdQuery, useAddCommentMutation } from './api/commentApi';
export { commentHandlers } from './api/__mocks__/commentHandlers';
export { CommentSection } from './ui/CommentSection/CommentSection';
