import Link from "next/link";

interface TagsProps {
    tags?: string[];
    ulClassName?: string;
}

// カスタムソートの順序を定義
const customOrder = ["全て", "海外", "日本", "アジア", "インド", "タイ", "北海道"];

const Tags: React.FC<TagsProps> = ({ tags, ulClassName }) => {

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
    const sortedTags = [...tags].sort(customSort);

    return (
        <ul className={`flex mt-2 ${ulClassName}`}>
            {sortedTags.map((tag, index) => (
                <li key={index}>
                    <Link href={`/blogList?tag=${tag}`}>
                        <p className="border border-black rounded-xl bg-gray-200 p-1 m-1">{tag}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Tags;