import { Post } from '@/lib/types';

export interface PostStyle1Props {
    post: Post;
    generatePostLink: (post: Post) => string;
}