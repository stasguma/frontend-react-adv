export type { CommentSchema } from './model/types/commentSchema';
export {
  commentSlice,
} from './model/slice/commentSlice';
export { useGetCommentsByArticleIdQuery, useAddCommentMutation } from './api/commentApi';
export { commentHandlers } from './api/__mocks__/commentHandlers';
export { CommentCard } from './ui/CommentCard/CommentCard';
export { CommentList } from './ui/CommentList/CommentList';
