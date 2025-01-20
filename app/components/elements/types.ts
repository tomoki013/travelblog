// Reorganized interfaces using inheritance to improve reusability and maintainability.
import { Post } from '@/lib/types';

// Base interface for components with children
export interface WithChildren {
    children: React.ReactNode;
}

// Base interface for components with className
interface WithClassName {
    className?: string;
}

// Base interface for components with optional id and style
interface WithOptionalIdAndStyle {
    id?: string;
    style?: React.CSSProperties;
}

export interface PostStyleProps {
    post: Post;
    generatePostLink: (post: Post) => string;
    styleType: "style1" | "style2";
}

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export interface TagsProps {
    tags?: string[];
    ulClassName?: string;
    hideAll?: boolean;
}

export interface PageTopButtonProps {
    opacity: string;
    onHover: (hover: boolean) => void;
}

export interface NavigationItemProps extends WithChildren, WithClassName {
    href: string;
}

export interface IconThemeProps extends WithChildren {
    href: string;
}

export interface HamburgerIconProps {
    menuIconRef: React.RefObject<HTMLDivElement | null>;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export interface UnitContainerProps extends WithChildren, WithClassName, WithOptionalIdAndStyle {}

export interface MainContainerProps extends WithChildren, WithClassName { }
