import Link from "next/link";
import { PageTopButtonProps } from "../types";

const PageTopButton = ({
    opacity,
    onHover
} : PageTopButtonProps
) => {
    return (
        <Link
            href={'#'}
            style={{ opacity: opacity }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            aria-label="ページトップボタン"
            className="fixed bottom-6 left-6 flex justify-center items-center flex-col text-white w-14 h-14 bg-[var(--color-one)] rounded-full shadow-md transition-opacity duration-300 ease-in-out z-[calc(var(--header-z-index) - 2)]"
        >
            <p className="transform -rotate-90">＞</p>
        </Link>
    );
}

export default PageTopButton;
