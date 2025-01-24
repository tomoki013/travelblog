"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";
import { TagsProps } from "../types";

// カスタムソートの順序を定義
const customOrder = ["全て", "海外", "アジア", "日本", "スペイン", "フランス", "インド", "タイ", "ベトナム", "北海道"];

const TagsItem = ({
    tags,
    ulClassName,
    hideAll,
} : TagsProps
) => {
    const searchParams = useSearchParams();
    const query = searchParams.get('tag') || "全て";

    const pathname = usePathname();
    let url = '/travelDiary';
    if (pathname.includes('travelInfo')) {
        url = '/travelInfo';
    } else if (pathname.includes('/info')) {
        url = '/travelInfo';
    }

    if (!tags || tags.length === 0) {
        return null;
    }

    // カスタムソート関数
    const customSort = (a: string, b: string) => {
        const indexA = customOrder.indexOf(a);
        const indexB = customOrder.indexOf(b);

        if (indexA === -1 && indexB === -1) {
            // 両方ともカスタム順序にない場合はアルファベット順にソート
            return a.localeCompare(b);
        } else if (indexA === -1) {
            // aがカスタム順序にない場合は後にソート
            return 1;
        } else if (indexB === -1) {
            // bがカスタム順序にない場合は後にソート
            return -1;
        } else {
            // 両方ともカスタム順序にある場合はその順序に従ってソート
            return indexA - indexB;
        }
    };

    // タグをカスタムソート
    const sortedTags = hideAll ? [...tags].sort(customSort) : ["全て", ...tags].sort(customSort);

    return (
        <ul className={`flex mt-2 flex-wrap ${ulClassName}`}>
            {sortedTags.map((tag, index) => (
                <li key={index}>
                    <Link href={tag === "全て" ? `${url}` : `${url}?tag=${tag}`} scroll={false}>
                        <p className={`border border-[var(--color-one)] text-[var(--color-one)] rounded p-1 m-1 hover:text-white hover:bg-[var(--color-one)] ${query === tag ? 'text-white bg-[var(--color-one)]' : ''}`}>{tag}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Tags: React.FC<TagsProps> = ({ tags, ulClassName, hideAll }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TagsItem tags={tags} ulClassName={ulClassName} hideAll={hideAll} />
        </Suspense>
    );
}

export default Tags;
