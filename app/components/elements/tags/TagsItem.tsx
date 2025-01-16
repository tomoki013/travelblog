"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

interface TagsItemProps {
    tags?: string[];
    ulClassName?: string;
    hideAll?: boolean; // 新しいプロパティを追加
}

const TagsItem: React.FC<TagsItemProps> = ({ tags, ulClassName, hideAll }) => {
    const searchParams = useSearchParams();
    const query = searchParams.get('tag') || "全て";

    let url = '/blogList';
    const pathname = usePathname();
    if (pathname.includes('blogList')) {
        url = '/blogList';
    } else if (pathname.includes('travelinfo')) {
        url = '/travelinfo';
    } else if (pathname.includes('info')) {
        url = '/travelinfo';
    }

    if (!tags || tags.length === 0) {
        return null;
    }

    // カスタムソートの順序を定義
    const customOrder = ["全て", "海外", "アジア", "日本", "インド", "タイ", "北海道"];

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

export default TagsItem;
