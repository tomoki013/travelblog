import Link from "next/link";
import { Post } from '@/lib/types';

type ArticleNavProps = {
    prevPost?: Post | null;
    nextPost?: Post | null;
};

const ArticleNav = ({ prevPost, nextPost}: ArticleNavProps) => {
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
                href="/"
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
