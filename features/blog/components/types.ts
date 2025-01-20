import { Post } from '@/lib/types';

export interface ArticleProps extends Post {
    content: string;
}

export interface ArticleNavProps {
    prevPost?: Post | null;
    nextPost?: Post | null;
}

export interface DisplayPostProps {
    type: "diary" | "info";
    displayCount?: number;
    id?: string;
    children?: React.ReactNode;
    styleType: "style1" | "style2";
    containerStyle?: React.CSSProperties;
    h2ClassName?: string;
    hrClassName?: string;
    sortType?: 'date' | 'random' | 'latest';
}

export interface DisplayPostItemProps extends DisplayPostProps {
    posts: Post[];
}

export interface InfoIndexProps {
    content: string;
}
