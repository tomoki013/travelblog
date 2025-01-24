"use client";

import { usePathname } from "next/navigation";
import { PaginationProps } from "../types";

const Pagination = ({
    totalPages,
    currentPage,
    onPageChange
} : PaginationProps
) => {
    const pathname = usePathname();

    if (!pathname.includes('/travelDiary') && !pathname.includes('/travelInfo')) {
        return null;
    }

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    return (
        <ul className="flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
                <li
                    key={index}
                    className={`border border-[var(--color-one)] text-[var(--color-one)] rounded py-1 px-2 m-1 cursor-pointer hover:text-white hover:bg-[var(--color-one)] ${currentPage === index + 1 ? 'bg-[var(--color-one)] text-white' : ''}`}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </li>
            ))}
        </ul>
    );
}

export default Pagination;
