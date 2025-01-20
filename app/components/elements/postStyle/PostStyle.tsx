import Link from "next/link";
import Image from "next/image";
import styles from './PostStyle.module.scss';
import { PostStyleProps } from "../types";

const PostStyle = ({
    post,
    generatePostLink,
    styleType,
} : PostStyleProps
) => {
    const truncateTitle = (title: string, maxLength: number) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };

    if (styleType === "style1") {
        return (
            <li 
                key={post.slug}
                className="flex w-[200px] h-[280px] m-4 border border-[var(--color-one)] hover:opacity-70 hover:bg-[var(--blog-hover-color)]"
            >
                <Link
                    href={generatePostLink(post)}
                    className={`${styles.item_1} "flex flex-col w-[100%] h-[100%] p-3 text-[var(--color-one)]"`}
                >
                    <Image
                        src={post.image}
                        alt={post.alt}
                        width={180}
                        height={150}
                        className="w-[100%] h-[150px] my-3 mx-0"
                    />
                    <hr />
                    <p className="text-[var(--color-one)]">{truncateTitle(post.title, 15)}</p>
                </Link>
            </li>
        );
    } else {
        return (
            <li
                key={post.slug}
                className="relative bg-white border border-[var(--color-one)] rounded-md hover:opacity-70 hover:bg-[var(--blog-hover-color] w-[90%] m-auto"
            >
                <Link
                    href={generatePostLink(post)}
                    className="flex items-center py-4 px-2 text-[var(--color-one)] transition-color duration-300 ease"
                >
                    <p>{truncateTitle(post.title, 25)}</p>
                    <Image
                        src={post.image}
                        alt={post.alt}
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] rounded-[50%] ml-auto border-5 border-opacity"
                    />
                </Link>
            </li>
        );
    };
}

export default PostStyle;
