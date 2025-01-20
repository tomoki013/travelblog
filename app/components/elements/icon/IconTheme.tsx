import Link from "next/link"
import { IconThemeProps } from "../types";

const IconTheme = ({
    href,
    children
} : IconThemeProps
) => {
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
