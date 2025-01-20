import { Post } from '@/lib/types';

export interface ArticleProps {
    title: string;
    description: string;
    place: string;
    dates: string[];
    image: string;
    alt: string;
    tags: string[];
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
