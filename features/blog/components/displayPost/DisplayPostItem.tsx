"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useState, useMemo } from "react";
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

const DisplayPostItems = ({
    type,
    posts,
    displayCount = 10,
    id,
    styleType,
    containerStyle,
    h2ClassName,
    hrClassName,
    sortType = 'latest',
    children
} : DisplayPostItemProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const tag = searchParams.get("tag");
    const currentSlug = useMemo(() => pathname.split("/").pop(), [pathname]);

    const initialFilteredPosts = useMemo(() => {
        let filtered = tag && tag !== "全て" ? posts.filter((post) => post.tags?.includes(tag)) : posts;

        if (sortType === 'random') {
            filtered = [...filtered].sort(() => Math.random() - 0.5);
        } else if (sortType === 'date') {
            filtered = [...filtered].sort((a, b) => new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime());
        } else {
            filtered = [...filtered].sort((a, b) => new Date(b.dates[0]).getTime() - new Date(a.dates[0]).getTime());
        }

        return filtered;
    }, [posts, tag, sortType]);

    const showLatestBlogMessage = useMemo(
        () => sortType === 'latest' && currentSlug === initialFilteredPosts[0]?.slug,
        [sortType, currentSlug, initialFilteredPosts]
    );

    const filteredPosts = useMemo(() => {
        if (currentSlug) {
            return initialFilteredPosts.filter((post) => post.slug !== currentSlug);
        }
        return initialFilteredPosts;
    }, [initialFilteredPosts, currentSlug]);

    const h2Title = useMemo(
        () => (type === "diary" ? "ブログ一覧" : type === "info" ? "観光情報一覧" : "ブログ一覧"),
        [type]
    );

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = useMemo(() => Math.ceil(filteredPosts.length / displayCount), [filteredPosts, displayCount]);

    const paginatedItems = useMemo(
        () => filteredPosts.slice((currentPage - 1) * displayCount, currentPage * displayCount),
        [filteredPosts, currentPage, displayCount]
    );

    const handlePageChange = (page: number) => setCurrentPage(page);

    return (
        <Elements.UnitContainer id={id} style={containerStyle}>
            <h2 className={h2ClassName}>{h2Title}</h2>
            <hr className={hrClassName} />
            {showLatestBlogMessage ? (
                <h3 className="text-[var(--color-one)]">最新のブログです</h3>
            ) : (
                <ul className="flex flex-wrap justify-center p-0 m-0 gap-4">
                    {paginatedItems.map((item) => (
                        <Elements.PostStyle
                            key={item.slug}
                            post={item}
                            generatePostLink={() => `/post/${type}/${item.slug}`}
                            styleType={styleType}
                        />
                    ))}
                </ul>
            )}
            <Elements.Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            {children}
        </Elements.UnitContainer>
    );
};

export default DisplayPostItems;
