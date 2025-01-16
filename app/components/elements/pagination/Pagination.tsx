"use client";

import { usePathname } from "next/navigation";

const Pagination: React.FC = () => {
    const pathname = usePathname();

    if (!pathname.includes('/blogList') && !pathname.includes('/travelinfo')) {
        return null;
    }

    return (
        <ul className="flex justify-center">
            <li className={`border border-[var(--color-one)] text-[var(--color-one)] rounded p-1 m-1 hover:text-white hover:bg-[var(--color-one)]`}>1</li>
        </ul>
    );
}

export default Pagination;
