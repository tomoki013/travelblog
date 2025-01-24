"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ArticleNavProps } from '../types';

const ArticleNav = ({
    prevPost,
    nextPost
} : ArticleNavProps
) => {
    const pathname = usePathname();
    const blogListHref = pathname.includes('diary') ? '/blogList' : pathname.includes('info') ? '/travelInfo' : '/blogList';

    return (
        <nav className="relative h-6 my-3">

            {/* 前のブログへのリンク */}
            {prevPost ? (
                <Link
                    href={`${prevPost?.slug}`}
                    className="text-[var(--color-one)] underline hover:text-[var(--hover-color-one)] absolute left-[5%]"
                >
                    ＜＜前のブログへ
                </Link>
            ) : (
                <span className="hidden">＜＜前のブログへ</span>
            )}

            {/* ブログ一覧へ */}
            <Link
                className="hidden md:block text-[var(--color-one)] underline hover:text-[var(--hover-color-one)] absolute right-[46%]"
                href={blogListHref}
            >
                ブログ一覧へ
            </Link>

            {/* 次のブログへのリンク */}
            {nextPost ? (
                <Link
                    href={`${nextPost?.slug}`}
                    className="text-[var(--color-one)] underline hover:text-[var(--hover-color-one)] absolute right-[5%]"
                >
                    次のブログへ＞＞
                </Link>
            ) : (
                <span className="hidden">次のブログへ＞＞</span>
            )}

        </nav>
    );
}

export default ArticleNav;
