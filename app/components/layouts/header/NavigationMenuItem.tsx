import Link from "next/link";

interface NavigationMenuItemProps {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ href, onClick, children }) => {
    return (
        <li className="flex h-14 mt-2 border-b border-solid border-b-white">
            <Link
                href={href}
                onClick={onClick}
                className="flex justify-center items-center w-full h-full text-white md:text-xl tracking-[0.2rem] rounded-md transition-all duration-300 ease-in-out hover:bg-[var(--hover-color-one)] hover:opacity-75 text-2xl"
            >
                {children}
            </Link>
        </li>
    );
}

export default NavigationMenuItem;
