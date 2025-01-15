import Link from "next/link"

interface IconThemeProps {
    href: string;
    children: React.ReactNode;
}

const IconTheme: React.FC<IconThemeProps> = ({ href, children }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-black bg-white p-1 hover:opacity-70"
        >
            {children}
        </Link>
    );
}

export default IconTheme;
