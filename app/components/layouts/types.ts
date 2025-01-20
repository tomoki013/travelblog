export interface FooterProps {
    className?: string;
}

export interface NavigationMenuItemProps {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}