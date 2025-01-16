"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Elements from '@/app/components/elements/index';
import { Post } from "@/lib/types";

interface DisplayPostItemProps {
    type: "diary" | "info";
    posts: Post[];
    displayCount?: number;
    id?: string;
    children?: React.ReactNode;
    styleType: "style1" | "style2";
    containerStyle?: React.CSSProperties;
    h2ClassName?: string;
    hrClassName?: string;
    sortType?: 'date' | 'random' | 'latest';
}

const DisplayPostItems: React.FC<DisplayPostItemProps> = ({ type, posts, displayCount, id, styleType, containerStyle, h2ClassName, hrClassName, sortType = 'latest', children }) => {
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag");

    let items = tag && tag !== "全て" ? posts.filter((post) => post.tags?.includes(tag)) : posts;

    if (sortType === 'random') {
        items = items.sort(() => Math.random() - 0.5);
    } else if (sortType === 'date') {
        items = items.sort((a, b) => new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime());
    } else {
        items = items.sort((a, b) => new Date(b.dates[0]).getTime() - new Date(a.dates[0]).getTime());
    }

    const h2Title = type === "diary" ? "ブログ一覧" : type === "info" ? "観光情報一覧" : "ブログ一覧";

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = displayCount || 10;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Elements.UnitContainer id={id} style={containerStyle}>
            <h2 className={h2ClassName}>{h2Title}</h2>
            <hr className={hrClassName} />
            <ul className="flex flex-wrap justify-center p-0 m-0 gap-4">
                {paginatedItems.map((item) => (
                    <Elements.PostStyle key={item.slug} post={item} generatePostLink={() => `/post/${type}/${item.slug}`} styleType={styleType} />
                ))}
            </ul>
            <Elements.Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            {children}
        </Elements.UnitContainer>
    );
}

export default DisplayPostItems;
